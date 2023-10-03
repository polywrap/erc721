import { Ethers_Module, Ethers_TxResponse } from "../../wrap";
import { BigInt } from "@polywrap/wasm-as";

export function balanceOf(address: string, owner: string): BigInt {
  const balanceResult = Ethers_Module.callContractView({
    address: address,
    method: "function balanceOf(address owner) external view returns (uint256)",
    args: [owner],
    connection: null,
  }).unwrap();
  return BigInt.fromString(balanceResult);
}

export function ownerOf(address: string, tokenId: BigInt): string {
  return Ethers_Module.callContractView({
    address: address,
    method: "function ownerOf(uint256 tokenId) external view returns (address)",
    args: [tokenId.toString()],
    connection: null,
  }).unwrap();
}

export function safeTransferFrom(address: string, from: string, to: string, tokenId: BigInt, data: string|null = null): Ethers_TxResponse {
  const methodSignature = data ? 
    "function safeTransferFrom(address from, address to, uint256 tokenId, bytes data) external" :
    "function safeTransferFrom(address from, address to, uint256 tokenId) external";
  const args = data ? [from, to, tokenId.toString(), data as string] : [from, to, tokenId.toString()];
  
  return Ethers_Module.callContractMethod({
    address: address,
    method: methodSignature,
    args: args,
    connection: null,
    options: null,
  }).unwrap();
}

export function transferFrom(address: string, from: string, to: string, tokenId: BigInt): Ethers_TxResponse {
  return Ethers_Module.callContractMethod({
    address: address,
    method: "function transferFrom(address from, address to, uint256 tokenId) external",
    args: [from, to, tokenId.toString()],
    connection: null,
    options: null,
  }).unwrap();
}

export function approve(address: string, to: string, tokenId: BigInt): Ethers_TxResponse {
  return Ethers_Module.callContractMethod({
    address: address,
    method: "function approve(address to, uint256 tokenId) external",
    args: [to, tokenId.toString()],
    connection: null,
    options: null,
  }).unwrap();
}

export function getApproved(address: string, tokenId: BigInt): string {
  return Ethers_Module.callContractView({
    address: address,
    method: "function getApproved(uint256 tokenId) external view returns (address)",
    args: [tokenId.toString()],
    connection: null,
  }).unwrap();
}

export function setApprovalForAll(address: string, operator: string, approved: boolean): Ethers_TxResponse {
  return Ethers_Module.callContractMethod({
    address: address,
    method: "function setApprovalForAll(address operator, bool _approved) external",
    args: [operator, approved ? "true" : "false"],
    connection: null,
    options: null,
  }).unwrap();
}

export function isApprovedForAll(address: string, owner: string, operator: string): boolean {
  const approvalResult = Ethers_Module.callContractView({
    address: address,
    method: "function isApprovedForAll(address owner, address operator) external view returns (bool)",
    args: [owner, operator],
    connection: null,
  }).unwrap();
  return approvalResult == "true"; // Adjust depending on the return format of the module.
}
