import { Construct } from 'constructs';
import { DataAwsIamPolicyDocument, S3Bucket, S3BucketLifecycleConfiguration, S3BucketOwnershipControls, S3BucketPolicy, S3BucketVersioningA } from '../main';

export class ManagedS3 extends Construct {
	public instance: Construct;

	constructor(scope: Construct, id: string, config: any) {
		super(scope, `asm-m/${id}`);

		this.instance = new S3Bucket(scope, id, config);

        const myBucket = new S3Bucket(this, 'myBucket', {
			bucket: config.bucket,
		});

		new S3BucketOwnershipControls(this, 'myBucket-ownership', {
			bucket: myBucket.id,
			rule: {
				objectOwnership: "BucketOwnerPreferred",
			},
		});

		const myBucketVersioning = new S3BucketVersioningA(this, 'myBucket-versioning', {
			bucket: myBucket.id,
			versioningConfiguration: {
				status: 'Enabled',
				mfaDelete: 'Disabled',
			},
		});

		new S3BucketLifecycleConfiguration(this, 'myBucket-lifecycle', {
			bucket: myBucket.id,
			rule: [{
				id: 'default-lifecycle',
				status: 'Enabled',
				noncurrentVersionExpiration: [{
					noncurrentDays: 30,
					newerNoncurrentVersions: 2,
				}],
				abortIncompleteMultipartUpload: [{
					daysAfterInitiation: 7,
				}],
			}],
			dependsOn: [myBucketVersioning],
		});

		const myBucketPolicy = new DataAwsIamPolicyDocument(this, 'myBucket-iam-policy', {
			statement: [{
				actions: ['s3:*'],
				resources: [`${myBucket.arn}/*`],
				principals: [{
					type: 'AWS',
					identifiers: ['*'],
				}],
				effect: 'Deny',
				condition: [{
					test: 'Bool',
					variable: 'aws:SecureTransport',
					values: ['false'],
				}],
			}],
		});

		new S3BucketPolicy(this, 'myBucket-policy', {
			bucket: myBucket.id,
			policy: myBucketPolicy.json
		});
	}
}
