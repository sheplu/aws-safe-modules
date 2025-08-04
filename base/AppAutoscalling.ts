import { AppautoscalingPolicy as aws_AppautoscalingPolicy, AppautoscalingPolicyConfig } from '@cdktf/provider-aws/lib/appautoscaling-policy';
import { AppautoscalingTarget as aws_AppautoscalingTarget, AppautoscalingTargetConfig } from '@cdktf/provider-aws/lib/appautoscaling-target';
import { Construct } from 'constructs';

export class AppautoscalingTarget extends aws_AppautoscalingTarget {
    constructor(scope: Construct, id: string, config: AppautoscalingTargetConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class AppautoscalingPolicy extends aws_AppautoscalingPolicy {
    constructor(scope: Construct, id: string, config: AppautoscalingPolicyConfig) {
        const checkedConfig = { ...config };
		checkedConfig.name = `${config?.name}-aasp`;

        super(scope, `asm/${id}`, checkedConfig);
    }
};
