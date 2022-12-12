// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract A {
  uint256 public number;
  function updateNumber(uint number_) public {

    _beforeUpdate(number_);

  }

  function _beforeUpdate(uint _number) internal virtual {}
}

contract ProvaSuper is A {
    
  function _beforeUpdate(uint256 _number) internal virtual override {
    console.log("ProvaSuper:: number:", number);
    super._beforeUpdate(_number);
    if (_number == 0) {
      console.log("reached here");
        number = 1000;
    } else { number = _number;}
  }

  function valueZero(uint256 number_) internal {
      updateNumber(number_+1000);
  }
}