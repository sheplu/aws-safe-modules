import { DbInstance as aws_DbInstance, DbInstanceConfig } from '@cdktf/provider-aws/lib/db-instance';
import { Construct } from 'constructs';

export class DbInstance extends aws_DbInstance {
    constructor(scope: Construct, id: string, config: DbInstanceConfig) {
        const checkedConfig = { ...config };
        checkedConfig.dbName = `${config?.dbName}-rds`;

        super(scope, `asm/${id}`, checkedConfig);
    }
};
