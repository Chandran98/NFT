//SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;
pragma solidity ^0.8.0;

import"@openzeppelin/contracts/token/ERC721/ERC721.sol";
import"@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract NFT is ERC721URIStorage{
    uint private tokenid;
    constructor() ERC721("Pol Net", "PN"){}
    
    function mintNFT(string memory tokenURI)public returns(uint){
        tokenid+=1;
        _safeMint(msg.sender,tokenid);
        _setTokenURI(tokenid,tokenURI);
        return tokenid;
    }

}