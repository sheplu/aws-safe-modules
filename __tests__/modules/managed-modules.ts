import "cdktf/lib/testing/adapters/jest";
import { readdirSync } from "node:fs";

describe("Modules Base", () => {
  describe("Count number of modules", () => {
    let folderList: Array<string>;

    beforeAll(() => {
      folderList = readdirSync('./managed')
    });

    it("should should have 2 files", () => {
      expect(folderList.length).toEqual(2);
    });

    it("should should have the exact files", () => {
      const files: Array<string> = [
        'S3Bucket.ts',
        'WAFv2.ts',
      ];

      expect(folderList).toEqual(files);
    });
  });

});
