import { CurReportDefinition as aws_CurReportDefinition, CurReportDefinitionConfig } from '@cdktf/provider-aws/lib/cur-report-definition';
import { Construct } from 'constructs';

export class CurReportDefinition extends aws_CurReportDefinition {
    constructor(scope: Construct, id: string, config: CurReportDefinitionConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};
