import { CloudfrontDistribution as aws_CloudfrontDistribution, CloudfrontDistributionConfig, } from '@cdktf/provider-aws/lib/cloudfront-distribution';
import { CloudfrontFunction as aws_CloudfrontFunction, CloudfrontFunctionConfig } from '@cdktf/provider-aws/lib/cloudfront-function';
import { CloudfrontKeyGroup as aws_CloudfrontKeyGroup, CloudfrontKeyGroupConfig } from '@cdktf/provider-aws/lib/cloudfront-key-group';
import { CloudfrontKeyValueStore as aws_CloudfrontKeyValueStore, CloudfrontKeyValueStoreConfig } from '@cdktf/provider-aws/lib/cloudfront-key-value-store';
import { CloudfrontOriginAccessControl as aws_CloudfrontOriginAccessControl, CloudfrontOriginAccessControlConfig } from '@cdktf/provider-aws/lib/cloudfront-origin-access-control';
import { CloudfrontOriginAccessIdentity as aws_CloudfrontOriginAccessIdentity, CloudfrontOriginAccessIdentityConfig } from '@cdktf/provider-aws/lib/cloudfront-origin-access-identity';
import { CloudfrontPublicKey as aws_CloudfrontPublicKey, CloudfrontPublicKeyConfig } from '@cdktf/provider-aws/lib/cloudfront-public-key';
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

export class CloudfrontPublicKey extends aws_CloudfrontPublicKey {
    constructor(scope: Construct, id: string, config: CloudfrontPublicKeyConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class CloudfrontKeyGroup extends aws_CloudfrontKeyGroup {
    constructor(scope: Construct, id: string, config: CloudfrontKeyGroupConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class CloudfrontKeyValueStore extends aws_CloudfrontKeyValueStore {
    constructor(scope: Construct, id: string, config: CloudfrontKeyValueStoreConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class CloudfrontOriginAccessIdentity extends aws_CloudfrontOriginAccessIdentity {
    constructor(scope: Construct, id: string, config: CloudfrontOriginAccessIdentityConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};
