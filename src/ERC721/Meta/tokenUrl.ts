import { Ethers_Module } from "../../wrap";
import { BigInt } from "@polywrap/wasm-as";

export function tokenUrl(address: string, tokenId: BigInt): string {
  return Ethers_Module.callContractView({
      address: address,
      method: "function tokenURI(uint256 tokenId) external view returns (string memory)",
      args: [tokenId.toString()],
      connection: null,
    }).unwrap();
}
