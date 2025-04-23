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
  IamRole
} from "./base/IAM";
import { EcrRepository, EcrLifecyclePolicy } from "./base/ECR";
import { Wafv2WebAcl, Wafv2WebAclLoggingConfiguration, WafIpset } from "./base/WAFv2";
import { CloudwatchLogGroup, CloudwatchLogResourcePolicy } from "./base/CloudWatch";
import { CloudfrontDistribution, CloudfrontFunction, CloudfrontOriginAccessControl } from "./base/Cloudfront";
import { LambdaFunction } from "./base/Lambda";
import { DynamodbTable } from "./base/Dynamodb";
import { DbInstance } from "./base/RDS";
import { SqsQueue } from "./base/SQS";

import { ManagedS3 } from "./managed/S3Bucket";

export {
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

  // ECR
  EcrRepository,
  EcrLifecyclePolicy,

  // WAF
  Wafv2WebAcl,
  Wafv2WebAclLoggingConfiguration,
  WafIpset,

  // Cloudwatch
  CloudwatchLogGroup,
  CloudwatchLogResourcePolicy,

  // Cloudfront
  CloudfrontDistribution,
  CloudfrontFunction,
  CloudfrontOriginAccessControl,

  // Lambda
  LambdaFunction,

  // DynamoDB
  DynamodbTable,

  // RDS
  DbInstance,

  // SQS
  SqsQueue,

  // Managed
  ManagedS3,
}
