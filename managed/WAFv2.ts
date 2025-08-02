import { Construct } from 'constructs';
import { CloudwatchLogGroup, CloudwatchLogResourcePolicy, DataAwsIamPolicyDocument, Wafv2WebAcl, Wafv2WebAclLoggingConfiguration } from '../main';
import { Wafv2WebAclConfig } from '@cdktf/provider-aws/lib/wafv2-web-acl';

export type ManagedWAFConfig = {
	logGroup: string;
	logPolicy: string;
	waf: Wafv2WebAclConfig,
}

export class ManagedWAF extends Construct {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public readonly instance: any;

	constructor(scope: Construct, id: string, config: ManagedWAFConfig) {
		super(scope, id);

        const myWaf = new Wafv2WebAcl(this, 'wafv2', config.waf)

		this.instance = myWaf;

		const cwlg = new CloudwatchLogGroup(this, `wafv2-cloudwatch`, {
            name: `aws-waf-logs-${config.logGroup}-cw`,
            retentionInDays: 30,
        });

        new Wafv2WebAclLoggingConfiguration(this, `wafv2-logging-configuration`, {
            logDestinationConfigs: [cwlg.arn],
            resourceArn: myWaf.arn,
            loggingFilter: {
                defaultBehavior: 'DROP',
                filter: [
                    {
                        behavior: 'KEEP',
                        requirement: 'MEETS_ANY',
                        condition: [
                            {
                                actionCondition: {
                                    action: 'COUNT',
                                },
                            },
                            {
                                actionCondition: {
                                    action: 'BLOCK',
                                },
                            },
                        ],
                    },
                ],
            },
        });

        const cloudwatchPolicyDocument = new DataAwsIamPolicyDocument(this, `wafv2-cloudwatch-iam-policy`, {
            statement: [{
                effect: 'Allow',
                actions: ['logs:CreateLogStream', 'logs:PutLogEvents'],
                resources: [`${cwlg.arn}:*`],
                principals: [{
                    type: 'Service',
                    identifiers: ['delivery.logs.amazonaws.com'],
                }],
            }],
        });

        new CloudwatchLogResourcePolicy(this, `wafv2-cloudwatch-resource-policy`, {
            policyDocument: cloudwatchPolicyDocument.json,
            policyName: `wafv2-${config.logPolicy}-cwlp`,
        });
	}
}
