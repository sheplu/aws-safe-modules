import "cdktf/lib/testing/adapters/jest"; 
import { readdirSync } from "node:fs";

describe("Modules Base", () => {
  describe("Count number of modules", () => {
    let folderList: Array<String>;

    beforeAll(() => {
      folderList = readdirSync('./base')
    });

    it("should should have 16 files", () => {
      expect(folderList.length).toEqual(15);
    });

    it("should should have the exact files", () => {
      const files: Array<String> = [
        'AWSProvider.ts',
        'ApiGateway.ts',
        'CloudWatch.ts',
        'Cloudfront.ts',
        'Cost.ts',
        'Dynamodb.ts',
        'ECR.ts',
        'IAM.ts',
        'Lambda.ts',
        'RDS.ts',
        'Route53.ts',
        'S3Bucket.ts',
        'SQS.ts',
        'SSM.ts',
        'VPC.ts',
        'WAFv2.ts'
      ];
      
      expect(folderList).toEqual(files);
    });
  });

});
