import { AcmCertificate as aws_AcmCertificate, AcmCertificateConfig } from '@cdktf/provider-aws/lib/acm-certificate';
import { AcmCertificateValidation as aws_AcmCertificateValidation, AcmCertificateValidationConfig } from '@cdktf/provider-aws/lib/acm-certificate-validation';
import { DataAwsRoute53Records as aws_DataAwsRoute53Records, DataAwsRoute53RecordsConfig } from '@cdktf/provider-aws/lib/data-aws-route53-records';
import { DataAwsRoute53Zone as aws_DataAwsRoute53Zone, DataAwsRoute53ZoneConfig } from '@cdktf/provider-aws/lib/data-aws-route53-zone';
import { DataAwsRoute53Zones as aws_DataAwsRoute53Zones, DataAwsRoute53ZonesConfig } from '@cdktf/provider-aws/lib/data-aws-route53-zones';
import { Route53DelegationSet as aws_Route53DelegationSet, Route53DelegationSetConfig } from '@cdktf/provider-aws/lib/route53-delegation-set';
import { Route53HealthCheck as aws_Route53HealthCheck, Route53HealthCheckConfig } from '@cdktf/provider-aws/lib/route53-health-check';
import { Route53QueryLog as aws_Route53QueryLog, Route53QueryLogConfig } from '@cdktf/provider-aws/lib/route53-query-log';
import { Route53Record as aws_Route53Record, Route53RecordConfig } from '@cdktf/provider-aws/lib/route53-record';
import { Route53Zone as aws_Route53Zone, Route53ZoneConfig } from '@cdktf/provider-aws/lib/route53-zone';
import { Construct } from 'constructs';

export class DataAwsRoute53Zone extends aws_DataAwsRoute53Zone {
    constructor(scope: Construct, id: string, config: DataAwsRoute53ZoneConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class DataAwsRoute53Zones extends aws_DataAwsRoute53Zones {
    constructor(scope: Construct, id: string, config: DataAwsRoute53ZonesConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class DataAwsRoute53Records extends aws_DataAwsRoute53Records {
    constructor(scope: Construct, id: string, config: DataAwsRoute53RecordsConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class Route53Record extends aws_Route53Record {
    constructor(scope: Construct, id: string, config: Route53RecordConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class AcmCertificate extends aws_AcmCertificate {
    constructor(scope: Construct, id: string, config: AcmCertificateConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class AcmCertificateValidation extends aws_AcmCertificateValidation {
    constructor(scope: Construct, id: string, config: AcmCertificateValidationConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class Route53Zone extends aws_Route53Zone {
    constructor(scope: Construct, id: string, config: Route53ZoneConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class Route53HealthCheck extends aws_Route53HealthCheck {
    constructor(scope: Construct, id: string, config: Route53HealthCheckConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class Route53DelegationSet extends aws_Route53DelegationSet {
    constructor(scope: Construct, id: string, config: Route53DelegationSetConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class Route53QueryLog extends aws_Route53QueryLog {
    constructor(scope: Construct, id: string, config: Route53QueryLogConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};
