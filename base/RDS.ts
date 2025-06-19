import { DbInstance as aws_DbInstance, DbInstanceConfig } from '@cdktf/provider-aws/lib/db-instance';
import { Construct } from 'constructs';
import { Ajv } from "ajv";

export class DbInstance extends aws_DbInstance {
    constructor(scope: Construct, id: string, config: DbInstanceConfig) {
        const checkedConfig = { ...config };
        checkedConfig.dbName = `${config?.dbName}-rds`;

        super(scope, `asm/${id}`, checkedConfig);
    }
};

const ajv = new Ajv({ allErrors: true });

const schema = {
  type: "object",
  properties: {
    storageType: { enum: ["gp3", "io1", "io2"] },
    engine: { enum: ["postgres"] },
    allocatedStorage: { type: "number", minimum: 30 },
    engineVersion: { enum: ["17.4", "17.5"] },
  },
  required: ["storageType", "engine", "allocatedStorage"],
  additionalProperties: true,
}

export const validate = ajv.compile(schema)