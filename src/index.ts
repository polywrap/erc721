import {
  Args_approve,
  Args_balanceOf,
  Args_getApproved,
  Args_isApprovedForAll,
  Args_ownerOf,
  Args_safeTransferFrom,
  Args_tokenMeta,
  Args_tokenUrl,
  Args_transferFrom,
  Args_setApprovalForAll,
  Ethers_TxResponse,
  ModuleBase,
  TokenMeta,
} from "./wrap";
import * as ERC721 from "./ERC721";
import { BigInt } from "@polywrap/wasm-as";

export class Module extends ModuleBase {
  tokenMeta(args: Args_tokenMeta): TokenMeta {
    return {
      address: args.address.toLowerCase(),
      name: ERC721.name(args.address),
      symbol: ERC721.symbol(args.address),
    };
  }

  tokenUrl(args: Args_tokenUrl): string {
    return ERC721.tokenUrl(args.address, args.tokenId);
  }

  balanceOf(args: Args_balanceOf): BigInt {
    return ERC721.balanceOf(args.address, args.owner);
  }

  safeTransferFrom(args: Args_safeTransferFrom): Ethers_TxResponse {
    return ERC721.safeTransferFrom(
      args.address,
      args._from,
      args.to,
      args.tokenId,
      args.data
    );
  }

  transferFrom(args: Args_transferFrom): Ethers_TxResponse {
    return ERC721.transferFrom(args.address, args._from, args.to, args.tokenId);
  }

  approve(args: Args_approve): Ethers_TxResponse {
    return ERC721.approve(args.address, args.to, args.tokenId);
  }

  getApproved(args: Args_getApproved): string {
    return ERC721.getApproved(args.address, args.tokenId);
  }

  ownerOf(args: Args_ownerOf): string {
    return ERC721.ownerOf(args.address, args.tokenId);
  }

  isApprovedForAll(args: Args_isApprovedForAll): boolean {
    return ERC721.isApprovedForAll(args.address, args.owner, args.operator);
  }

  setApprovalForAll(args: Args_setApprovalForAll): Ethers_TxResponse {
    return ERC721.setApprovalForAll(args.address, args.operator, args.approved);
  }
}
