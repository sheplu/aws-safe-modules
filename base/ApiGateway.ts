import { ApiGatewayAuthorizer as aws_ApiGatewayAuthorizer, ApiGatewayAuthorizerConfig } from '@cdktf/provider-aws/lib/api-gateway-authorizer';
import { ApiGatewayBasePathMapping as aws_ApiGatewayBasePathMapping, ApiGatewayBasePathMappingConfig } from '@cdktf/provider-aws/lib/api-gateway-base-path-mapping';
import { ApiGatewayClientCertificateConfig, ApiGatewayClientCertificate as aws_ApiGatewayClientCertificate } from '@cdktf/provider-aws/lib/api-gateway-client-certificate';
import { ApiGatewayDeploymentConfig, ApiGatewayDeployment as aws_ApiGatewayDeployment } from '@cdktf/provider-aws/lib/api-gateway-deployment';
import { ApiGatewayDomainName as aws_ApiGatewayDomainName, ApiGatewayDomainNameConfig } from '@cdktf/provider-aws/lib/api-gateway-domain-name';
import { ApiGatewayGatewayResponse as aws_ApiGatewayGatewayResponse, ApiGatewayGatewayResponseConfig } from '@cdktf/provider-aws/lib/api-gateway-gateway-response';
import { ApiGatewayIntegration as aws_ApiGatewayIntegration, ApiGatewayIntegrationConfig } from '@cdktf/provider-aws/lib/api-gateway-integration';
import { ApiGatewayIntegrationResponse as aws_ApiGatewayIntegrationResponse, ApiGatewayIntegrationResponseConfig } from '@cdktf/provider-aws/lib/api-gateway-integration-response';
import { ApiGatewayMethod as aws_ApiGatewayMethod, ApiGatewayMethodConfig } from '@cdktf/provider-aws/lib/api-gateway-method';
import { ApiGatewayMethodResponse as aws_ApiGatewayMethodResponse, ApiGatewayMethodResponseConfig } from '@cdktf/provider-aws/lib/api-gateway-method-response';
import { ApiGatewayMethodSettings as aws_ApiGatewayMethodSettings, ApiGatewayMethodSettingsConfig } from '@cdktf/provider-aws/lib/api-gateway-method-settings';
import { ApiGatewayRequestValidator as aws_ApiGatewayRequestValidator, ApiGatewayRequestValidatorConfig } from '@cdktf/provider-aws/lib/api-gateway-request-validator';
import { ApiGatewayResource as aws_ApiGatewayResource, ApiGatewayResourceConfig } from '@cdktf/provider-aws/lib/api-gateway-resource';
import { ApiGatewayRestApi as aws_ApiGatewayRestApi, ApiGatewayRestApiConfig } from '@cdktf/provider-aws/lib/api-gateway-rest-api';
import { ApiGatewayStage as aws_ApiGatewayStage, ApiGatewayStageConfig } from '@cdktf/provider-aws/lib/api-gateway-stage';
import { ApiGatewayVpcLink as aws_ApiGatewayVpcLink, ApiGatewayVpcLinkConfig } from '@cdktf/provider-aws/lib/api-gateway-vpc-link';
import { Construct } from 'constructs';

export class ApiGatewayDeployment extends aws_ApiGatewayDeployment {
    constructor(scope: Construct, id: string, config: ApiGatewayDeploymentConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class ApiGatewayGatewayResponse extends aws_ApiGatewayGatewayResponse {
    constructor(scope: Construct, id: string, config: ApiGatewayGatewayResponseConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class ApiGatewayRestApi extends aws_ApiGatewayRestApi {
    constructor(scope: Construct, id: string, config: ApiGatewayRestApiConfig) {
        const checkedConfig = { ...config };
        checkedConfig.name = `${config?.name}-agw`;

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class ApiGatewayStage extends aws_ApiGatewayStage {
    constructor(scope: Construct, id: string, config: ApiGatewayStageConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class ApiGatewayBasePathMapping extends aws_ApiGatewayBasePathMapping {
    constructor(scope: Construct, id: string, config: ApiGatewayBasePathMappingConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class ApiGatewayAuthorizer extends aws_ApiGatewayAuthorizer {
    constructor(scope: Construct, id: string, config: ApiGatewayAuthorizerConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class ApiGatewayClientCertificate extends aws_ApiGatewayClientCertificate {
    constructor(scope: Construct, id: string, config: ApiGatewayClientCertificateConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class ApiGatewayDomainName extends aws_ApiGatewayDomainName {
    constructor(scope: Construct, id: string, config: ApiGatewayDomainNameConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class ApiGatewayVpcLink extends aws_ApiGatewayVpcLink {
    constructor(scope: Construct, id: string, config: ApiGatewayVpcLinkConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class ApiGatewayRequestValidator extends aws_ApiGatewayRequestValidator {
    constructor(scope: Construct, id: string, config: ApiGatewayRequestValidatorConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class ApiGatewayIntegration extends aws_ApiGatewayIntegration {
    constructor(scope: Construct, id: string, config: ApiGatewayIntegrationConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class ApiGatewayIntegrationResponse extends aws_ApiGatewayIntegrationResponse {
    constructor(scope: Construct, id: string, config: ApiGatewayIntegrationResponseConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class ApiGatewayMethod extends aws_ApiGatewayMethod {
    constructor(scope: Construct, id: string, config: ApiGatewayMethodConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class ApiGatewayMethodResponse extends aws_ApiGatewayMethodResponse {
    constructor(scope: Construct, id: string, config: ApiGatewayMethodResponseConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class ApiGatewayMethodSettings extends aws_ApiGatewayMethodSettings {
    constructor(scope: Construct, id: string, config: ApiGatewayMethodSettingsConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class ApiGatewayResource extends aws_ApiGatewayResource {
    constructor(scope: Construct, id: string, config: ApiGatewayResourceConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};