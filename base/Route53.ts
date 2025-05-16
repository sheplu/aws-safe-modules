import { DataAwsRoute53Zone as aws_DataAwsRoute53Zone, DataAwsRoute53ZoneConfig } from '@cdktf/provider-aws/lib/data-aws-route53-zone';
import { Construct } from 'constructs';

export class DataAwsRoute53Zone extends aws_DataAwsRoute53Zone {
    constructor(scope: Construct, id: string, config: DataAwsRoute53ZoneConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};
