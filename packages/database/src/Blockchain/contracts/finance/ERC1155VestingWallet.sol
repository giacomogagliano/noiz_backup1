// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./IERC1155VestingWallet.sol";
import "../token/ERC1155/IERC1155.sol";

contract ERC1155VestingWallet is IERC1155VestingWallet {
    uint256 private _released;
    IERC1155 private immutable _erc1155Contract;

    mapping(uint256 => uint256) private _idReleased;
    address private immutable _beneficiary;
    uint256 private immutable _start;
    uint256 private immutable _duration;

    constructor(
        address erc1155Contract,
        address beneficiaryAddress,
        uint64 startTimestamp,
        uint64 durationSeconds
    ) {
        require(
            beneficiaryAddress != address(0),
            "IERC1155VestingWallet: beneficiary is zero address"
        );
        _erc1155Contract = IERC1155(erc1155Contract);
        _beneficiary = beneficiaryAddress;
        _start = startTimestamp;
        _duration = durationSeconds;
    }

    function beneficiary() public view virtual override returns (address) {
        return _beneficiary;
    }

    function start() public view virtual override returns (uint256 start_) {
        start_ = _start;
    }

    function duration()
        public
        view
        virtual
        override
        returns (uint256 duration_)
    {
        duration_ = _duration;
    }

    function released(uint256 id)
        public
        view
        virtual
        override
        returns (uint256 idReleased)
    {
        idReleased = _idReleased[id];
    }

    function release(uint256 id) public virtual override {
        uint256 releasable = vestedAmount(id, uint64(block.timestamp)) -
            released(id);
        _idReleased[id] += releasable;
        emit ERC1155Released(id, releasable);
        _erc1155Contract.safeTransferFrom(
            address(this),
            beneficiary(),
            id,
            releasable,
            ""
        );
    }

    function vestedAmount(uint256 id, uint64 timestamp)
        public
        view
        virtual
        override
        returns (uint256)
    {
        return
            _vestingSchedule(
                (_erc1155Contract.balanceOf(address(this), id) + released(id)),
                timestamp
            );
    }

    function _vestingSchedule(uint256 totalAllocation, uint64 timestamp)
        internal
        view
        virtual
        returns (uint256)
    {
        if (timestamp < start()) {
            return 0;
        } else if (timestamp > start() + duration()) {
            return totalAllocation;
        } else {
            return (totalAllocation * (timestamp - start())) / duration();
        }
    }
}
