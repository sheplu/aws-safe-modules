import { Construct } from 'constructs';
import { DataAwsIamPolicyDocument, S3Bucket, S3BucketLifecycleConfiguration, S3BucketOwnershipControls, S3BucketPolicy, S3BucketVersioningA } from '../main';

export class ManagedS3 extends Construct {
	public instance: Construct;

	constructor(scope: Construct, id: string, config: any) {
		super(scope, `asm-m/${id}`);

		// this.instance = new S3Bucket(scope, id, config);

        const myBucket = new S3Bucket(this, `${id}`, {
			bucket: config.bucket,
		});

		this.instance = myBucket;

		new S3BucketOwnershipControls(this, `${id}-ownership`, {
			bucket: myBucket.id,
			rule: {
				objectOwnership: "BucketOwnerPreferred",
			},
		});

		const myBucketVersioning = new S3BucketVersioningA(this, `${id}-versioning`, {
			bucket: myBucket.id,
			versioningConfiguration: {
				status: 'Enabled',
				mfaDelete: 'Disabled',
			},
		});

		new S3BucketLifecycleConfiguration(this, `${id}-lifecycle`, {
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

		const myBucketPolicy = new DataAwsIamPolicyDocument(this, `${id}-iam-policy`, {
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

		new S3BucketPolicy(this, `${id}-policy`, {
			bucket: myBucket.id,
			policy: myBucketPolicy.json
		});
	}
}
