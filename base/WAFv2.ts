import { WafIpset as aws_WafIpset, WafIpsetConfig } from '@cdktf/provider-aws/lib/waf-ipset';
import { Wafv2WebAcl as aws_Wafv2WebAcl, Wafv2WebAclConfig } from '@cdktf/provider-aws/lib/wafv2-web-acl';
import { Wafv2WebAclLoggingConfiguration as aws_Wafv2WebAclLoggingConfiguration, Wafv2WebAclLoggingConfigurationConfig } from '@cdktf/provider-aws/lib/wafv2-web-acl-logging-configuration';
import { Construct } from 'constructs';

export class Wafv2WebAcl extends aws_Wafv2WebAcl {
    constructor(scope: Construct, id: string, config: Wafv2WebAclConfig) {
        const checkedConfig = { ...config };
        checkedConfig.name = `${config?.name}-waf2`;

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class Wafv2WebAclLoggingConfiguration extends aws_Wafv2WebAclLoggingConfiguration {
    constructor(scope: Construct, id: string, config: Wafv2WebAclLoggingConfigurationConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class WafIpset extends aws_WafIpset {
    constructor(scope: Construct, id: string, config: WafIpsetConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};
