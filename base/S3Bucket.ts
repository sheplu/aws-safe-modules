import { S3Bucket as aws_S3Bucket, S3BucketConfig } from '@cdktf/provider-aws/lib/s3-bucket';
import { S3BucketCorsConfiguration as aws_S3BucketCorsConfiguration, S3BucketCorsConfigurationConfig } from '@cdktf/provider-aws/lib/s3-bucket-cors-configuration';
import { S3BucketLifecycleConfiguration as aws_S3BucketLifecycleConfiguration, S3BucketLifecycleConfigurationConfig } from '@cdktf/provider-aws/lib/s3-bucket-lifecycle-configuration';
import { S3BucketLoggingA as aws_S3BucketLoggingA, S3BucketLoggingAConfig } from '@cdktf/provider-aws/lib/s3-bucket-logging';
import { S3BucketObjectLockConfigurationA as aws_S3BucketObjectLockConfigurationA, S3BucketObjectLockConfigurationAConfig } from '@cdktf/provider-aws/lib/s3-bucket-object-lock-configuration';
import { S3BucketOwnershipControls as aws_S3BucketOwnershipControls, S3BucketOwnershipControlsConfig } from '@cdktf/provider-aws/lib/s3-bucket-ownership-controls';
import { S3BucketVersioningA as aws_S3BucketVersioningA, S3BucketVersioningAConfig } from '@cdktf/provider-aws/lib/s3-bucket-versioning';
import { S3BucketPolicy as aws_S3BucketPolicy, S3BucketPolicyConfig } from '@cdktf/provider-aws/lib/s3-bucket-policy';
import { Construct } from 'constructs';

export class S3Bucket extends aws_S3Bucket {
  constructor(scope: Construct, id: string, config?: S3BucketConfig) {
    const checkedConfig = { ...config };
    checkedConfig.bucket = `${config?.bucket}-s3`;

    super(scope, `asm/${id}`, checkedConfig);
  }
};

export class S3BucketOwnershipControls extends aws_S3BucketOwnershipControls {
  constructor(scope: Construct, id: string, config: S3BucketOwnershipControlsConfig) {
    const checkedConfig = { ...config };

    super(scope, `asm/${id}`, checkedConfig);
  }
};

export class S3BucketVersioningA extends aws_S3BucketVersioningA {
  constructor(scope: Construct, id: string, config: S3BucketVersioningAConfig) {
    const checkedConfig = { ...config };

    super(scope, `asm/${id}`, checkedConfig);
  }
};

export class S3BucketLifecycleConfiguration extends aws_S3BucketLifecycleConfiguration {
  constructor(scope: Construct, id: string, config: S3BucketLifecycleConfigurationConfig) {
    const checkedConfig = { ...config };

    super(scope, `asm/${id}`, checkedConfig);
  }
};

export class S3BucketObjectLockConfigurationA extends aws_S3BucketObjectLockConfigurationA {
  constructor(scope: Construct, id: string, config: S3BucketObjectLockConfigurationAConfig ) {
    const checkedConfig = { ...config };

    super(scope, `asm/${id}`, checkedConfig);
  }
};

export class S3BucketCorsConfiguration extends aws_S3BucketCorsConfiguration {
  constructor(scope: Construct, id: string, config: S3BucketCorsConfigurationConfig ) {
    const checkedConfig = { ...config };

    super(scope, `asm/${id}`, checkedConfig);
  }
};

export class S3BucketLoggingA extends aws_S3BucketLoggingA {
  constructor(scope: Construct, id: string, config: S3BucketLoggingAConfig ) {
    const checkedConfig = { ...config };

    super(scope, `asm/${id}`, checkedConfig);
  }
};

export class S3BucketPolicy extends aws_S3BucketPolicy {
	constructor(scope: Construct, id: string, config: S3BucketPolicyConfig) {
		const checkedConfig = { ...config };

    super(scope, `asm/${id}`, checkedConfig);
	}
};
