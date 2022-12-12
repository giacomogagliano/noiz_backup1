// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

library zArrays {
    function removeItem(uint256[] storage array, uint256 i)
        public
        returns (uint256[] storage)
    {
        uint256 lastElementIdx = array.length - 1;
        uint256 lastElementValue = array[lastElementIdx];
        uint256 elementToDelete = array[i];
        array[i] = lastElementValue;
        array[lastElementIdx] = elementToDelete;
        array.pop();
        return array;
    }
}
