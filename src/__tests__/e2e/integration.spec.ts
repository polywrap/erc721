import { ERC721 } from "../types";
jest.setTimeout(300000);

describe("ERC721", () => {
  let nft: ERC721;
  let wrapperUri: string;

  beforeAll(async () => {
    // deploy wrapper
    
    wrapperUri = `fs/${__dirname}/../../../build`;
    // get client
    nft = new ERC721(undefined, undefined, wrapperUri);
  });

  describe("ENS", () => {
    test("balanceOf", async () => {
      const result = await nft.balanceOf({
        address: "0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85",
        owner: "0x2E7F4dD3acD226DdAe10246a45337F815CF6B3ff"
      });
      expect(result.ok).toBeTruthy();
      if (!result.ok) throw new Error("Response is not ok");
      expect(result.value).toBeTruthy();
      expect(result.value).toBe("1");
    });
  });
});
