import { DataAwsIamPolicyDocument as aws_DataAwsIamPolicyDocument, DataAwsIamPolicyDocumentConfig } from '@cdktf/provider-aws/lib/data-aws-iam-policy-document';
import { IamPolicy as aws_IamPolicy, IamPolicyConfig } from '@cdktf/provider-aws/lib/iam-policy';
import { IamPolicyAttachment as aws_IamPolicyAttachment, IamPolicyAttachmentConfig } from '@cdktf/provider-aws/lib/iam-policy-attachment';
import { IamRole as aws_IamRole, IamRoleConfig } from '@cdktf/provider-aws/lib/iam-role';
import { IamRolePolicy as aws_IamRolePolicy, IamRolePolicyConfig } from '@cdktf/provider-aws/lib/iam-role-policy';
import { IamRolePolicyAttachment as aws_IamRolePolicyAttachment, IamRolePolicyAttachmentConfig } from '@cdktf/provider-aws/lib/iam-role-policy-attachment';
import { Construct } from 'constructs';

export class DataAwsIamPolicyDocument extends aws_DataAwsIamPolicyDocument {
  constructor(scope: Construct, id: string, config?: DataAwsIamPolicyDocumentConfig) {
    const checkedConfig = { ...config };

    super(scope, `asm/${id}`, checkedConfig);
  }
};

export class IamPolicy extends aws_IamPolicy {
  constructor(scope: Construct, id: string, config: IamPolicyConfig) {
    const checkedConfig = { ...config };
    checkedConfig.name = `${config?.name}-iamp`;

    super(scope, `asm/${id}`, checkedConfig);
  }
};

export class IamRole extends aws_IamRole {
  constructor(scope: Construct, id: string, config: IamRoleConfig) {
    const checkedConfig = { ...config };
    checkedConfig.name = `${config?.name}-iamr`;

    super(scope, `asm/${id}`, checkedConfig);
  }
};

export class IamPolicyAttachment extends aws_IamPolicyAttachment {
  constructor(scope: Construct, id: string, config: IamPolicyAttachmentConfig) {
    const checkedConfig = { ...config };

    super(scope, `asm/${id}`, checkedConfig);
  }
};

export class IamRolePolicy extends aws_IamRolePolicy {
  constructor(scope: Construct, id: string, config: IamRolePolicyConfig) {
    const checkedConfig = { ...config };
    checkedConfig.name = `${config?.name}-iamrp`;

    super(scope, `asm/${id}`, checkedConfig);
  }
};

export class IamRolePolicyAttachment extends aws_IamRolePolicyAttachment {
  constructor(scope: Construct, id: string, config: IamRolePolicyAttachmentConfig) {
    const checkedConfig = { ...config };

    super(scope, `asm/${id}`, checkedConfig);
  }
};
