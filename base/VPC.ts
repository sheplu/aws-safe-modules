import { DataAwsSubnets as aws_DataAwsSubnets, DataAwsSubnetsConfig } from '@cdktf/provider-aws/lib/data-aws-subnets';
import { DataAwsVpc as aws_DataAwsVpc, DataAwsVpcConfig } from '@cdktf/provider-aws/lib/data-aws-vpc';
import { DataAwsVpcEndpointService as aws_DataAwsVpcEndpointService, DataAwsVpcEndpointServiceConfig } from '@cdktf/provider-aws/lib/data-aws-vpc-endpoint-service';
import { SecurityGroup as aws_SecurityGroup, SecurityGroupConfig } from '@cdktf/provider-aws/lib/security-group';
import { VpcEndpoint as aws_VpcEndpoint, VpcEndpointConfig } from '@cdktf/provider-aws/lib/vpc-endpoint';
import { VpcSecurityGroupEgressRule as aws_VpcSecurityGroupEgressRule, VpcSecurityGroupEgressRuleConfig } from '@cdktf/provider-aws/lib/vpc-security-group-egress-rule';
import { VpcSecurityGroupIngressRule as aws_VpcSecurityGroupIngressRule, VpcSecurityGroupIngressRuleConfig } from '@cdktf/provider-aws/lib/vpc-security-group-ingress-rule';
import { Vpc as aws_Vpc, VpcConfig } from '@cdktf/provider-aws/lib/vpc';
import { Construct } from 'constructs';

export class DataAwsSubnets extends aws_DataAwsSubnets {
    constructor(scope: Construct, id: string, config: DataAwsSubnetsConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class DataAwsVpc extends aws_DataAwsVpc {
    constructor(scope: Construct, id: string, config: DataAwsVpcConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class DataAwsVpcEndpointService extends aws_DataAwsVpcEndpointService {
    constructor(scope: Construct, id: string, config: DataAwsVpcEndpointServiceConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class SecurityGroup extends aws_SecurityGroup {
    constructor(scope: Construct, id: string, config: SecurityGroupConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class VpcEndpoint extends aws_VpcEndpoint {
    constructor(scope: Construct, id: string, config: VpcEndpointConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class VpcSecurityGroupEgressRule extends aws_VpcSecurityGroupEgressRule {
    constructor(scope: Construct, id: string, config: VpcSecurityGroupEgressRuleConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class VpcSecurityGroupIngressRule extends aws_VpcSecurityGroupIngressRule {
    constructor(scope: Construct, id: string, config: VpcSecurityGroupIngressRuleConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class Vpc extends aws_Vpc {
    constructor(scope: Construct, id: string, config: VpcConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};
