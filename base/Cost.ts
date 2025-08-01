import { BcmdataexportsExport as aws_BcmdataexportsExport, BcmdataexportsExportConfig } from '@cdktf/provider-aws/lib/bcmdataexports-export';
import { CurReportDefinition as aws_CurReportDefinition, CurReportDefinitionConfig } from '@cdktf/provider-aws/lib/cur-report-definition';
import { Construct } from 'constructs';

export class CurReportDefinition extends aws_CurReportDefinition {
    constructor(scope: Construct, id: string, config: CurReportDefinitionConfig) {
        const checkedConfig = { ...config };
        checkedConfig.reportName = `${config?.reportName}-cur`;

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class BcmdataexportsExport extends aws_BcmdataexportsExport {
    constructor(scope: Construct, id: string, config: BcmdataexportsExportConfig) {
        const checkedConfig = {
            ...config,
            ...Array.isArray(config.export) ? {
                export: config.export?.map((item) => ({
                    ...item,
                    name: `${item.name}-curv2`
                }))
            } : null
        };
        // if (Array.isArray(checkedConfig.export)) {
        //     checkedConfig.export.forEach(item => item.name = `${item.name}-curv2`)
        // }

        super(scope, `asm/${id}`, checkedConfig);
    }
};
