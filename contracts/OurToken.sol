//SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OurToken is ERC20 {
    
//constructor
/**
 * @dev since users cant mint their own tokens, create an initial supply of tokens   */
constructor (uint256 initialSupply) ERC20 ("OurToken", "OT"){
    _mint(msg.sender, initialSupply);
}
    
}