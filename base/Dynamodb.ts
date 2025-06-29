import { DynamodbTableItem as aws_DynamodbTableItem, DynamodbTableItemConfig } from '@cdktf/provider-aws/lib/dynamodb-table-item';
import { DynamodbTable as aws_DynamodbTable, DynamodbTableConfig } from '@cdktf/provider-aws/lib/dynamodb-table';
import { Construct } from 'constructs';
import { DynamodbGlobalTable as aws_DynamodbGlobalTable, DynamodbGlobalTableConfig } from '@cdktf/provider-aws/lib/dynamodb-global-table';
import { DynamodbResourcePolicy as aws_DynamodbResourcePolicy, DynamodbResourcePolicyConfig } from '@cdktf/provider-aws/lib/dynamodb-resource-policy';
import { DynamodbTableExport as aws_DynamodbTableExport, DynamodbTableExportConfig } from '@cdktf/provider-aws/lib/dynamodb-table-export';

export class DynamodbTable extends aws_DynamodbTable {
    constructor(scope: Construct, id: string, config: DynamodbTableConfig) {
        const checkedConfig = { ...config };
        checkedConfig.name = `${config?.name}-ddb`;

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class DynamodbTableItem extends aws_DynamodbTableItem {
    constructor(scope: Construct, id: string, config: DynamodbTableItemConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class DynamodbGlobalTable extends aws_DynamodbGlobalTable {
    constructor(scope: Construct, id: string, config: DynamodbGlobalTableConfig) {
        const checkedConfig = { ...config };
        checkedConfig.name = `${config?.name}-ddb`;

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class DynamodbResourcePolicy extends aws_DynamodbResourcePolicy {
    constructor(scope: Construct, id: string, config: DynamodbResourcePolicyConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class DynamodbTableExport extends aws_DynamodbTableExport {
    constructor(scope: Construct, id: string, config: DynamodbTableExportConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};
