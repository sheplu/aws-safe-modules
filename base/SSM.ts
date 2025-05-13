import { SsmParameter as aws_SsmParameter, SsmParameterConfig } from '@cdktf/provider-aws/lib/ssm-parameter';
import { Construct } from 'constructs';

export class SsmParameter extends aws_SsmParameter {
    constructor(scope: Construct, id: string, config: SsmParameterConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};
