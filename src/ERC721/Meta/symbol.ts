import { hexToUtfStr } from "../../utils";
import { Ethers_Module } from "../../wrap";

export function symbol(address: string): string {
  const symbolResult = Ethers_Module.callContractView({
    address: address,
    method: "function symbol() external view returns (string memory)",
    args: [],
    connection: null,
  });
  if (symbolResult.isOk) {
    return symbolResult.unwrap();
  }

  // FIXME: This won't work since first call is throwing an error in case of symbol isn't string
  const bytesSymbolResult = Ethers_Module.callContractView({
    address: address,
    method: "function symbol() external view returns (bytes32)",
    args: [],
    connection: null,
  }).unwrap();
  return hexToUtfStr(bytesSymbolResult);
}
