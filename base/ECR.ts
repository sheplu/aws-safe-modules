import { EcrLifecyclePolicy as aws_EcrLifecyclePolicy, EcrLifecyclePolicyConfig } from '@cdktf/provider-aws/lib/ecr-lifecycle-policy';
import { EcrRepository as aws_EcrRepository, EcrRepositoryConfig } from '@cdktf/provider-aws/lib/ecr-repository';
import { Construct } from 'constructs';

export class EcrRepository extends aws_EcrRepository {
    constructor(scope: Construct, id: string, config: EcrRepositoryConfig) {
        const checkedConfig = { ...config };
        checkedConfig.name = `${config?.name}-ecr`;

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class EcrLifecyclePolicy extends aws_EcrLifecyclePolicy {
    constructor(scope: Construct, id: string, config: EcrLifecyclePolicyConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};
