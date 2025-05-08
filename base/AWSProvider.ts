import { Construct } from 'constructs';
import { AwsProvider as aws_AwsProvider, AwsProviderConfig, AwsProviderDefaultTags } from "@cdktf/provider-aws/lib/provider";
import { validate } from '../check-tags';

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

