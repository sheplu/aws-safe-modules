import { ApiGatewayBasePathMapping as aws_ApiGatewayBasePathMapping, ApiGatewayBasePathMappingConfig } from '@cdktf/provider-aws/lib/api-gateway-base-path-mapping';
import { ApiGatewayDeploymentConfig, ApiGatewayDeployment as aws_ApiGatewayDeployment } from '@cdktf/provider-aws/lib/api-gateway-deployment';
import { ApiGatewayGatewayResponse as aws_ApiGatewayGatewayResponse, ApiGatewayGatewayResponseConfig } from '@cdktf/provider-aws/lib/api-gateway-gateway-response';
import { ApiGatewayRestApi as aws_ApiGatewayRestApi, ApiGatewayRestApiConfig } from '@cdktf/provider-aws/lib/api-gateway-rest-api';
import { ApiGatewayStage as aws_ApiGatewayStage, ApiGatewayStageConfig } from '@cdktf/provider-aws/lib/api-gateway-stage';
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