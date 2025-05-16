import { Construct } from 'constructs';
import { AwsProvider as aws_AwsProvider, AwsProviderConfig, AwsProviderDefaultTags } from "@cdktf/provider-aws/lib/provider";
import { validate } from '../check-tags';
import { S3Backend as aws_S3Backend, S3BackendConfig, TerraformOutput as aws_TerraformOutput, TerraformOutputConfig } from 'cdktf';
import { DataAwsCallerIdentity as aws_DataAwsCallerIdentity, DataAwsCallerIdentityConfig } from '@cdktf/provider-aws/lib/data-aws-caller-identity';

export class AwsProvider extends aws_AwsProvider {
    constructor(scope: Construct, id: string, config: AwsProviderConfig) {
        const checkedConfig = { ...config };
        const defaultTags = config.defaultTags as AwsProviderDefaultTags[]
        const tags = defaultTags[0].tags
        const valid = validate(tags)
        if(!valid) {
            throw validate.errors
        }

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class S3Backend extends aws_S3Backend {
    constructor(scope: Construct, config: S3BackendConfig) {
        const checkedConfig = { ...config };

        super(scope, checkedConfig);
    }
};

export class TerraformOutput extends aws_TerraformOutput {
    constructor(scope: Construct, id: string, config: TerraformOutputConfig, withoutNamespace: boolean = false) {
        const checkedConfig = { ...config };
        const namespacedId = withoutNamespace ? id : `asm/${id}`

        super(scope, namespacedId, checkedConfig);
    }
};

export class DataAwsCallerIdentity extends aws_DataAwsCallerIdentity {
    constructor(scope: Construct, id: string, config: DataAwsCallerIdentityConfig) {
        const checkedConfig = { ...config };

        super(scope, id, checkedConfig);
    }
};