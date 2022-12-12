// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezPausable.sol";

contract PrivatezPausable is Context, APrivatezPausable {
    bool private paused;

    constructor() {
        paused = false;
    }

    modifier whenNotPaused() {
        require(!_paused(), "Pausable: paused");
        _;
    }

    modifier whenPaused() {
        require(_paused(), "Pausable: not paused");
        _;
    }

    function _paused() internal view override returns (bool) {
        return paused;
    }

    function _pause() internal virtual whenNotPaused {
        paused = true;
        emit Paused(_msgSender());
    }

    function _unpause() internal virtual whenPaused {
        paused = false;
        emit Unpaused(_msgSender());
    }
}
