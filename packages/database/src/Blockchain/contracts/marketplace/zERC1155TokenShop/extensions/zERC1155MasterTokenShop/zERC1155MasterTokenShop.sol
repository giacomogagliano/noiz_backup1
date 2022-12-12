// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/IzERC1155MasterTokenShop.sol";
import "./secure/PrivatezERC1155MasterTokenShop.sol";

contract zERC1155MasterTokenShop is
    IzERC1155MasterTokenShop,
    PrivatezERC1155MasterTokenShop
{
    constructor(
        address ierc1155master_,
        uint256 idUsedAsShare_,
        address owner_,
        address membership_,
        address tokenContract_,
        address tokenUsedForPayment_,
        uint256 price_
    )
        PrivatezERC1155MasterTokenShop(
            ierc1155master_,
            idUsedAsShare_,
            owner_,
            membership_,
            tokenContract_,
            tokenUsedForPayment_,
            price_
        )
    {}

    function getCurrentDividendId()
        public
        view
        override
        OnlyShareholders
        returns (uint256)
    {
        return _getCurrentDividendId();
    }

    /// @dev function which sets the state of the crowd sale, it is called .
    function setShopStatus(uint256 status) public override OnlyShareholders {
        _setShopStatus(status);
    }

    function buyTokens(bytes memory data) public override onlyMembers {
        address buyer = _msgSender();
        _buyTokens(buyer, 2, 1, data);
    }

    /**
     * @param account è l'account oggetto della query.
     * @param dividendId è l'id del dividendo oggetto della query.
     * @notice viene richiesto il balance di un account ad un determinato
     * Id.
     * <<<Se il dividendo non è ancora stato creato, la funzione <_valueAt>
     * ritorna false, quindi si deve calcolare la percentuale di share dell'account
     * in base a quanti token esso detiene al momento della richiesta.
     * <<<Nel caso in cui <_valueAt> ritornasse true, vuole dire che il dividendo
     * dell'account è stato creato per l'ID richiesto, il che significa che
     * l'account ha trasferito degli share da unaltro account, quindi il record
     * dividendo è stato creato.
     */
    function capitalOfAt(address account, uint256 dividendId)
        public
        view
        override
        returns (uint256)
    {
        (bool divided, uint256 value) = _valueAt(
            dividendId,
            _accountDividends(account)
        );

        uint256 accountCapitalShare = _calculateCapitalShare(account);
        return divided ? value : accountCapitalShare;
    }

    function dividend() public override OnlyShareholders {
        _dividend();
        uint256 currentDividendId = _getCurrentDividendId();
        uint256 totalCapitaAtId = _totalCapitalAt(currentDividendId);
        _updateTotalCapitalDividend(totalCapitaAtId);
    }

    function dividendOnSharesTransfer() public OnlyMasterToken {
        _dividend();
        uint256 currentDividendId = _getCurrentDividendId();
        uint256 totalCapitaAtId = _totalCapitalAt(currentDividendId);
        _updateTotalCapitalDividend(totalCapitaAtId);
    }

    function totalCapital() public view override returns (uint256 capital) {
        return _totalCapital();
    }

    /**
     * @param dividendId è l'id del dividendo oggetto della query.
     * @return se il dividendo è stato "diviso" <_valueAt> ritorna true
     * in  * quel case il valore ritorno da <totalCapitlAt> sarà
     * uguale al valore di ritorno da <_valueAt>, il quale è il valore
     * registrato nel dividendo.
     * In caso contrario è uguale alla somma di capitale raccolto
     * nel contratto.
     * return divided ? value : getRaisedCapital();
     */
    function totalCapitalAt(uint256 dividendId)
        public
        view
        override
        returns (uint256)
    {
        return _totalCapitalAt(dividendId);
    }
}
