import { Construct } from 'constructs';
import { DataAwsIamPolicyDocument, S3Bucket, S3BucketLifecycleConfiguration, S3BucketObjectLockConfigurationA, S3BucketOwnershipControls, S3BucketPolicy, S3BucketVersioningA } from '../main';

export type ManagedS3Config = {
	bucket?: string,
	worm?: boolean,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	addBucketPermission?: Array<any>
}

export class ManagedS3 extends Construct {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public readonly instance: any;

	constructor(scope: Construct, id: string, config: ManagedS3Config) {
		super(scope, id);

        const myBucket = new S3Bucket(this, 'bucket', {
			bucket: config.bucket,
			objectLockEnabled: config.worm ? true : false
		});

		this.instance = myBucket;

		new S3BucketOwnershipControls(this, 'bucket-ownership', {
			bucket: myBucket.id,
			rule: {
				objectOwnership: "BucketOwnerPreferred",
			},
		});

		const myBucketVersioning = new S3BucketVersioningA(this, 'bucket-versioning', {
			bucket: myBucket.id,
			versioningConfiguration: {
				status: 'Enabled',
				mfaDelete: 'Disabled',
			},
		});

		new S3BucketLifecycleConfiguration(this, 'bucket-lifecycle', {
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

		const bucketPermission = {
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
		};

		if(config.addBucketPermission) {
			bucketPermission.statement.push(...config.addBucketPermission);
		}

		const myBucketPolicy = new DataAwsIamPolicyDocument(this, 'bucket-iam-policy', bucketPermission);

		new S3BucketPolicy(this, 'bucket-policy', {
			bucket: myBucket.id,
			policy: myBucketPolicy.json
		});

		if(config.worm) {
			new S3BucketObjectLockConfigurationA(this, 'bucket-lock-configuration', {
                bucket: myBucket.id,
                rule: {
                    defaultRetention: {
                        days: 10,
                        mode: 'GOVERNANCE',
                    },
                },
            });
		}
	}
}
