# ERC721 Wrap

## Introduction

The ERC721 Wrap provides developers with an intuitive interface to interact with any ERC721 token (Non-Fungible Tokens or NFTs) on the Ethereum blockchain using the Polywrap framework. With the power of the Wasm wrap written in Rust, interacting with ERC721 tokens across any platform becomes seamless, eliminating the complexities of direct smart contract interactions.

## Features

- **Token Information**: Acquire the token's name, symbol, and address.
- **Token URL**: Fetch the URL associated with a specific token ID.
- **Ownership and Balance**: Ascertain the owner of a specific token ID and determine the balance of NFTs for an address.
- **Token Transfers**: Manage NFT transfers between addresses, supporting both regular and safe transfers.
- **Approval Management**: Control approvals for specific token IDs or establish approval for all tokens of an address.
- **Cross-Platform**: Compatibility with virtually any platform, thanks to Polywrap.

## Installation

Ensure you have the `@polywrap/client-js` package for installation:

```bash
npm install @polywrap/client-js
```

> Note: Depending on your environment, installation steps might differ. For more detailed instructions, refer to the [Polywrap documentation](https://docs.polywrap.io/).

## Usage

Here's a sample on how you can obtain the metadata of an ERC721 token:

```javascript
import {PolywrapClient} from "@polywrap/client-js";

async function fetchNFTMeta(tokenAddress) {
  const client = new PolywrapClient();
  
  const result = await client.invoke({
    uri: "wrapscan.io/polywrap/erc721@1.0",
    method: "tokenMeta",
    args: { address: tokenAddress },
  });

  console.log(result); // Displays the NFT's metadata
}

const NFT_ADDRESS = "0xYourNFTTokenAddressHere";
fetchNFTMeta(NFT_ADDRESS).then(() => {
  console.log("Metadata retrieved successfully!");
});
```

## ERC721 Wrap Overview

The Wrap provides essential methods for ERC721 token interaction:

- **tokenMeta**: Obtain the basic token metadata.
- **tokenUrl**: Get the URL associated with a given token ID.
- **ownerOf**: Identify the owner of a particular token ID.
- **balanceOf**: Determine the number of NFTs owned by an address.
- **transferFrom** & **safeTransferFrom**: Manage NFT transfers.
- **approve** & **getApproved**: Handle token ID specific approvals.
- **setApprovalForAll** & **isApprovedForAll**: Deal with approvals for all tokens for an address.

## Feedback and Contributions

For any feedback, issues, feature requests, or contributions, kindly raise an issue in our GitHub repository. We encourage community participation; however, please follow our contribution guidelines and code of conduct.

## License

This SDK is released under the [MIT License](LICENSE). For full details, view the LICENSE file.
