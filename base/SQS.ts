import { SqsQueue as aws_SqsQueue, SqsQueueConfig } from '@cdktf/provider-aws/lib/sqs-queue';
import { Construct } from 'constructs';

export class SqsQueue extends aws_SqsQueue {
    constructor(scope: Construct, id: string, config: SqsQueueConfig) {
        const { name, fifoQueue } = config;
        const checkedConfig = {
            ...config,
            name: `${name}${fifoQueue ? '.fifo' : '-sqs'}`,
        };
        
        super(scope, `asm/${id}`, checkedConfig);
    }
};
