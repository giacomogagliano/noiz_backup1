// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivateCreatorsPick.sol";
import "../../../lib/zArrays.sol";
import "../../../../access/Ownable.sol";

contract PrivateCreatorsPick is Ownable, APrivateCreatorsPick {
    using zArrays for uint256[];
    uint32 private immutable MAX_NUM_OF_CHOICES;

    address public immutable baseContract;
    address public immutable profileContract;

    mapping(address => bool) private __creators;
    mapping(address => uint256[]) private __creatorsChoices;
    mapping(address => mapping(uint256 => bool)) private __creatorsChoices2;

    constructor(
        address baseContract_,
        address profileContract_,
        uint32 MAX_NUM_OF_CHOICES_
    ) {
        baseContract = baseContract_;
        profileContract = profileContract_;
        MAX_NUM_OF_CHOICES = MAX_NUM_OF_CHOICES_;
        _transferOwnership(profileContract);
    }

    modifier noDuplicate(
        mapping(address => bool) storage creatorslist_,
        address creator_
    ) {
        require(__creators[creator_] == false);
        _;
    }

    modifier noDuplicateIds(
        mapping(uint256 => bool) storage idlist_,
        uint256 id_
    ) {
        require(!idlist_[id_]);
        _;
    }

    modifier onlyCreators(address requester) {
        require(__creators[requester] == true);
        _;
    }

    modifier lessThanMaxChoices(uint256[] memory choices) {
        require(choices.length < MAX_NUM_OF_CHOICES);
        _;
    }

    function _addCreator(address creator)
        internal
        noDuplicate(__creators, creator)
        onlyOwner
        returns (bool)
    {
        __creators[creator] = true;
        return true;
    }

    function _addChoice(address creator, uint256 id)
        internal
        onlyCreators(creator)
        noDuplicateIds(__creatorsChoices2[creator], id)
        lessThanMaxChoices(__creatorsChoices[creator])
        returns (bool)
    {
        __creatorsChoices[creator].push(id);
        __creatorsChoices2[creator][id] = true;
        return true;
    }

    function _deleteChoice(address creator, uint256 id)
        internal
        onlyCreators(creator)
        returns (bool)
    {
        __creatorsChoices[creator].removeItem(id);
        return true;
    }

    function _creatorsChoices()
        internal
        view
        returns (mapping(address => uint256[]) storage)
    {
        return __creatorsChoices;
    }

    function _creatorChoices(address creator)
        internal
        view
        returns (uint256[] memory)
    {
        return __creatorsChoices[creator];
    }

    function _creators()
        internal
        view
        returns (mapping(address => bool) storage)
    {
        return __creators;
    }

    // function transferOwnership(address newOwner)
    //     public
    //     virtual
    //     override
    //     onlyOwner
    // {
    //     require(
    //         newOwner != address(0),
    //         "Ownable: new owner is the zero address"
    //     );
    //     address previousOwner = owner();
    //     _transferOwnership(newOwner);
    //     __creators[previousOwner] = false;
    //     if (__creators[newOwner] == false) {
    //         __creators[newOwner] = true;
    //     }
    // }
}
