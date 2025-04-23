import { LambdaFunction as aws_LambdaFunction, LambdaFunctionConfig } from '@cdktf/provider-aws/lib/lambda-function';
import { Construct } from 'constructs';

export class LambdaFunction extends aws_LambdaFunction {
  constructor(scope: Construct, id: string, config: LambdaFunctionConfig) {
    const checkedConfig = { ...config };
    checkedConfig.functionName = `${config?.functionName}-lbd`;

    super(scope, `asm/${id}`, checkedConfig);
  }
};
