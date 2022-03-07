// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

//███████ ████████  █████  ██████
//██         ██    ██   ██ ██   ██
//███████    ██    ███████ ██████
//     ██    ██    ██   ██ ██   ██
//███████    ██    ██   ██ ██   ██
//wrapped STAR, present on partner networks similar to MATIC (ERC20)
contract STAR is AccessControl, ERC20Permit {
	//0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6
	bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
	//0x3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a848
	bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");

	constructor() ERC20("STAR", "STAR") ERC20Permit("STAR") {
		_setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
		_setupRole(MINTER_ROLE, _msgSender());
		_setupRole(BURNER_ROLE, _msgSender());
	}

	function mint(address to, uint256 amount) external onlyRole(MINTER_ROLE) {
		require(to != address(0), "invalid destination");
		//max 10 billions
		require(totalSupply() + amount <= 10000000000 ether, "over max supply");
		_mint(to, amount);
	}

	function burn(address from, uint256 amount) external onlyRole(BURNER_ROLE) {
		_burn(from, amount);
	}
}
