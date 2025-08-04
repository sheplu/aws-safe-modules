import { EcsCluster as aws_EcsCluster, EcsClusterConfig } from '@cdktf/provider-aws/lib/ecs-cluster';
import { EcsService as aws_EcsService, EcsServiceConfig } from '@cdktf/provider-aws/lib/ecs-service';
import { EcsTaskDefinition as aws_EcsTaskDefinition, EcsTaskDefinitionConfig } from '@cdktf/provider-aws/lib/ecs-task-definition';
import { Construct } from 'constructs';

export class EcsCluster extends aws_EcsCluster {
	constructor(scope: Construct, id: string, config: EcsClusterConfig) {
		const checkedConfig = { ...config };
		checkedConfig.name = `${config?.name}-ecsc`;

		super(scope, `asm/${id}`, checkedConfig);
	}
};

export class EcsTaskDefinition extends aws_EcsTaskDefinition {
	constructor(scope: Construct, id: string, config: EcsTaskDefinitionConfig) {
		const checkedConfig = { ...config };
		checkedConfig.family = `${config?.family}-ecst`;

		super(scope, `asm/${id}`, checkedConfig);
	}
};

export class EcsService extends aws_EcsService {
	constructor(scope: Construct, id: string, config: EcsServiceConfig) {
		const checkedConfig = { ...config };
		checkedConfig.name = `${config?.name}-ecss`;

		super(scope, `asm/${id}`, checkedConfig);
	}
};
