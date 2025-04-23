import { CloudwatchLogGroup as aws_CloudwatchLogGroup, CloudwatchLogGroupConfig } from '@cdktf/provider-aws/lib/cloudwatch-log-group';
import { CloudwatchLogResourcePolicy as aws_CloudwatchLogResourcePolicy, CloudwatchLogResourcePolicyConfig } from '@cdktf/provider-aws/lib/cloudwatch-log-resource-policy';
import { Construct } from 'constructs';

export class CloudwatchLogGroup extends aws_CloudwatchLogGroup {
    constructor(scope: Construct, id: string, config: CloudwatchLogGroupConfig) {
        const checkedConfig = { ...config };
        checkedConfig.name = `${config?.name}-cwlg`;

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class CloudwatchLogResourcePolicy extends aws_CloudwatchLogResourcePolicy {
    constructor(scope: Construct, id: string, config: CloudwatchLogResourcePolicyConfig) {
        const checkedConfig = { ...config };
        
        super(scope, `asm/${id}`, checkedConfig);
    }
};
