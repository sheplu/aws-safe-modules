import { CloudfrontDistribution as aws_CloudfrontDistribution, CloudfrontDistributionConfig } from '@cdktf/provider-aws/lib/cloudfront-distribution';
import { CloudfrontFunction as aws_CloudfrontFunction, CloudfrontFunctionConfig } from '@cdktf/provider-aws/lib/cloudfront-function';
import { CloudfrontOriginAccessControl as aws_CloudfrontOriginAccessControl, CloudfrontOriginAccessControlConfig } from '@cdktf/provider-aws/lib/cloudfront-origin-access-control';
import { Construct } from 'constructs';

export class CloudfrontFunction extends aws_CloudfrontFunction {
    constructor(scope: Construct, id: string, config: CloudfrontFunctionConfig) {
        const checkedConfig = { ...config };
        checkedConfig.name = `${config?.name}-cff`;

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class CloudfrontDistribution extends aws_CloudfrontDistribution {
    constructor(scope: Construct, id: string, config: CloudfrontDistributionConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class CloudfrontOriginAccessControl extends aws_CloudfrontOriginAccessControl {
    constructor(scope: Construct, id: string, config: CloudfrontOriginAccessControlConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};
