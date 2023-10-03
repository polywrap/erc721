import { hexToUtfStr } from "../../utils";
import { Ethers_Module } from "../../wrap";

export function name(address: string): string {
  const nameResult = Ethers_Module.callContractView({
    address: address,
    method: "function name() external view returns (string memory)",
    args: [],
    connection: null,
  });
  if (nameResult.isOk) {
    return nameResult.unwrap();
  }

  const bytesNameResult = Ethers_Module.callContractView({
    address: address,
    method: "function name() external view returns (bytes32)",
    args: [],
    connection: null,
  }).unwrap();
  return hexToUtfStr(bytesNameResult);
}
