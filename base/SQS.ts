import { SqsQueue as aws_SqsQueue, SqsQueueConfig } from '@cdktf/provider-aws/lib/sqs-queue';
import { Construct } from 'constructs';

export class SqsQueue extends aws_SqsQueue {
    constructor(scope: Construct, id: string, config: SqsQueueConfig) {
        const checkedConfig = { ...config };
        checkedConfig.name = `${config?.name}-sqs`;

        super(scope, `asm/${id}`, checkedConfig);
    }
};
