import { LambdaFunction as aws_LambdaFunction, LambdaFunctionConfig } from '@cdktf/provider-aws/lib/lambda-function';
import { Construct } from 'constructs';
import { Ajv } from "ajv";
import { LambdaPermission as aws_LambdaPermission, LambdaPermissionConfig } from '@cdktf/provider-aws/lib/lambda-permission';

export class LambdaFunction extends aws_LambdaFunction {
  constructor(scope: Construct, id: string, config: LambdaFunctionConfig) {
    const checkedConfig = { ...config };
    checkedConfig.functionName = `${config?.functionName}-lbd`;

    const valid = validate(checkedConfig)
    if (!valid) {
      throw validate.errors
    }
    super(scope, `asm/${id}`, checkedConfig);
  }
};

export class LambdaPermission extends aws_LambdaPermission {
    constructor(scope: Construct, id: string, config: LambdaPermissionConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

const ajv = new Ajv({ allErrors: true });

const schema = {
  type: "object",
  properties: {
    memorySize: { type: "number", minimum: 128, maximum: 10240, multipleOf: 64 },
    runtime: { enum: ["nodejs22.x", "python3.13", "java21", "ruby3.4", "provided.al2023"] },
  },
  required: ["memorySize"],
  additionalProperties: true,
}

export const validate = ajv.compile(schema)
