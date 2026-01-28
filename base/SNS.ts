import { SnsTopic as aws_SnsTopic, SnsTopicConfig } from '@cdktf/provider-aws/lib/sns-topic';
import { Construct } from 'constructs';

export class SnsTopic extends aws_SnsTopic {
    constructor(scope: Construct, id: string, config: SnsTopicConfig) {
        super(scope, `asm/${id}`, config);
    }
};
