import {
  S3Bucket,
  S3BucketCorsConfiguration,
  S3BucketLifecycleConfiguration,
  S3BucketLoggingA,
  S3BucketObjectLockConfigurationA,
  S3BucketOwnershipControls,
  S3BucketVersioningA,
  S3BucketPolicy
} from "./base/S3Bucket";

import {
  DataAwsIamPolicyDocument,
  IamPolicy,
  IamPolicyAttachment,
  IamRole,
  IamRolePolicy,
  IamRolePolicyAttachment
} from "./base/IAM";
import { EcrRepository, EcrLifecyclePolicy } from "./base/ECR";
import { Wafv2WebAcl, Wafv2WebAclLoggingConfiguration, WafIpset, Wafv2WebAclAssociation } from "./base/WAFv2";
import { CloudwatchLogGroup, CloudwatchLogResourcePolicy } from "./base/CloudWatch";
import {
  CloudfrontDistribution,
  CloudfrontFunction,
  CloudfrontOriginAccessControl,
  CloudfrontKeyGroup,
  CloudfrontKeyValueStore,
  CloudfrontOriginAccessIdentity,
  CloudfrontPublicKey
} from "./base/Cloudfront";
import { LambdaFunction, LambdaPermission } from "./base/Lambda";
import {
  DynamodbTable,
  DynamodbGlobalTable,
  DynamodbResourcePolicy,
  DynamodbTableExport,
  DynamodbTableItem
 } from "./base/Dynamodb";
import { DbInstance } from "./base/RDS";
import { SqsQueue } from "./base/SQS";
import { SsmParameter } from "./base/SSM";
import {
  DataAwsRoute53Zone,
  AcmCertificate,
  AcmCertificateValidation,
  DataAwsRoute53Records,
  DataAwsRoute53Zones,
  Route53DelegationSet,
  Route53HealthCheck,
  Route53QueryLog,
  Route53Record,
  Route53Zone
} from "./base/Route53";
import {
  DataAwsSubnets,
  DataAwsVpc,
  DataAwsVpcEndpointService,
  SecurityGroup,
  VpcEndpoint,
  VpcSecurityGroupEgressRule,
  VpcSecurityGroupIngressRule,
  Vpc
} from "./base/VPC";

import {
  AwsProvider,
  S3Backend,
  TerraformOutput,
  DataAwsCallerIdentity,
  ApiGatewayAccount,
  DataTerraformRemoteStateS3
} from "./base/AWSProvider";

import {
  ApiGatewayBasePathMapping,
  ApiGatewayDeployment,
  ApiGatewayGatewayResponse,
  ApiGatewayRestApi,
  ApiGatewayStage,
  ApiGatewayAuthorizer,
  ApiGatewayClientCertificate,
  ApiGatewayDomainName,
  ApiGatewayIntegration,
  ApiGatewayIntegrationResponse,
  ApiGatewayMethod,
  ApiGatewayMethodResponse,
  ApiGatewayMethodSettings,
  ApiGatewayRequestValidator,
  ApiGatewayResource,
  ApiGatewayVpcLink,
  ApiGatewayApiKey,
  ApiGatewayUsagePlan,
  ApiGatewayUsagePlanKey
} from "./base/ApiGateway";

import {
  BcmdataexportsExport,
  CurReportDefinition
} from "./base/Cost";

import {
  EcsCluster,
  EcsService,
	EcsTaskDefinition
} from "./base/ECS";

import { ManagedS3 } from "./managed/S3Bucket";
import { ManagedWAF } from "./managed/WAFv2";

export {
  AwsProvider,
  S3Backend,
  TerraformOutput,
  DataAwsCallerIdentity,
  ApiGatewayAccount,
  DataTerraformRemoteStateS3,

  // ApiGatewy
  ApiGatewayBasePathMapping,
  ApiGatewayDeployment,
  ApiGatewayGatewayResponse,
  ApiGatewayRestApi,
  ApiGatewayStage,
  ApiGatewayAuthorizer,
  ApiGatewayClientCertificate,
  ApiGatewayDomainName,
  ApiGatewayIntegration,
  ApiGatewayIntegrationResponse,
  ApiGatewayMethod,
  ApiGatewayMethodResponse,
  ApiGatewayMethodSettings,
  ApiGatewayRequestValidator,
  ApiGatewayResource,
  ApiGatewayVpcLink,
  ApiGatewayApiKey,
  ApiGatewayUsagePlan,
  ApiGatewayUsagePlanKey,

  // Cost
  BcmdataexportsExport,
  CurReportDefinition,

  // Route53
  DataAwsRoute53Zone,
  AcmCertificate,
  AcmCertificateValidation,
  DataAwsRoute53Records,
  DataAwsRoute53Zones,
  Route53DelegationSet,
  Route53HealthCheck,
  Route53QueryLog,
  Route53Record,
  Route53Zone,

  // S3
  S3Bucket,
  S3BucketCorsConfiguration,
  S3BucketLifecycleConfiguration,
  S3BucketLoggingA,
  S3BucketObjectLockConfigurationA,
  S3BucketOwnershipControls,
  S3BucketVersioningA,
  S3BucketPolicy,

  // IAM
  DataAwsIamPolicyDocument,
  IamPolicy,
  IamPolicyAttachment,
  IamRole,
  IamRolePolicy,
  IamRolePolicyAttachment,

  // ECR
  EcrRepository,
  EcrLifecyclePolicy,

  // WAF
  Wafv2WebAcl,
  Wafv2WebAclLoggingConfiguration,
  WafIpset,
  Wafv2WebAclAssociation,

  // Cloudwatch
  CloudwatchLogGroup,
  CloudwatchLogResourcePolicy,

  // Cloudfront
  CloudfrontDistribution,
  CloudfrontFunction,
  CloudfrontOriginAccessControl,
  CloudfrontKeyGroup,
  CloudfrontKeyValueStore,
  CloudfrontOriginAccessIdentity,
  CloudfrontPublicKey,

  // Lambda
  LambdaFunction,
  LambdaPermission,

  // DynamoDB
  DynamodbTable,
  DynamodbGlobalTable,
  DynamodbResourcePolicy,
  DynamodbTableExport,
  DynamodbTableItem,

  // RDS
  DbInstance,

  // SQS
  SqsQueue,

  // SSM
  SsmParameter,

  // VPC
  DataAwsSubnets,
  DataAwsVpc,
  DataAwsVpcEndpointService,
  SecurityGroup,
  VpcEndpoint,
  VpcSecurityGroupEgressRule,
  VpcSecurityGroupIngressRule,
  Vpc,

	EcsCluster,
  EcsService,
	EcsTaskDefinition,

  // Managed
  ManagedS3,
  ManagedWAF,
}
