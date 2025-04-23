import { DynamodbTable as aws_DynamodbTable, DynamodbTableConfig } from '@cdktf/provider-aws/lib/dynamodb-table';
import { Construct } from 'constructs';

export class DynamodbTable extends aws_DynamodbTable {
    constructor(scope: Construct, id: string, config: DynamodbTableConfig) {
        const checkedConfig = { ...config };
        checkedConfig.name = `${config?.name}-ddb`;

        super(scope, `asm/${id}`, checkedConfig);
    }
};
