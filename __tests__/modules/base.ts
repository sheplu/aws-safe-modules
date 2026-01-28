import "cdktf/lib/testing/adapters/jest";
import { readdirSync } from "node:fs";

describe("Modules Base", () => {
  describe("Count number of modules", () => {
    let folderList: Array<string>;

    beforeAll(() => {
      folderList = readdirSync('./base')
    });

    it("should should have 20 files", () => {
      expect(folderList.length).toEqual(20);
    });

    it("should should have the exact files", () => {
      const files: Array<string> = [
				'ALB.ts',
        'AWSProvider.ts',
        'ApiGateway.ts',
				'AppAutoscalling.ts',
        'CloudWatch.ts',
        'Cloudfront.ts',
        'Cost.ts',
        'Dynamodb.ts',
        'ECR.ts',
				'ECS.ts',
        'IAM.ts',
        'Lambda.ts',
        'RDS.ts',
        'Route53.ts',
        'S3Bucket.ts',
        'SNS.ts',
        'SQS.ts',
        'SSM.ts',
        'VPC.ts',
        'WAFv2.ts'
      ];

      expect(folderList).toEqual(files);
    });
  });

});
