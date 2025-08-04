import { AlbConfig, Alb as aws_Alb } from '@cdktf/provider-aws/lib/alb';
import { AlbListener as aws_AlbListener, AlbListenerConfig } from '@cdktf/provider-aws/lib/alb-listener';
import { AlbTargetGroup as aws_AlbTargetGroup, AlbTargetGroupConfig } from '@cdktf/provider-aws/lib/alb-target-group';
import { Construct } from 'constructs';

export class Alb extends aws_Alb {
    constructor(scope: Construct, id: string, config: AlbConfig) {
        const checkedConfig = { ...config };
        checkedConfig.name = `${config?.name}-alb`;

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class AlbListener extends aws_AlbListener {
    constructor(scope: Construct, id: string, config: AlbListenerConfig) {
        const checkedConfig = { ...config };

        super(scope, `asm/${id}`, checkedConfig);
    }
};

export class AlbTargetGroup extends aws_AlbTargetGroup {
    constructor(scope: Construct, id: string, config: AlbTargetGroupConfig) {
        const checkedConfig = { ...config };
        checkedConfig.name = `${config?.name}-albtg`;

        super(scope, `asm/${id}`, checkedConfig);
    }
};
