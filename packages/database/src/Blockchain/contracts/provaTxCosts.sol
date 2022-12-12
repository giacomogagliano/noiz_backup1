// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

contract IsStruct {
    struct Acoso {
        address owner;
    }
    struct Acoso2 {
        address contracto;
    }
    struct Acoso3 {
        address manipulo;
    }

    Acoso blob = Acoso(address(this));
}

contract IsStruct2 {
    address coso = address(this);
}

contract IsStruct3 {
    enum ariannapublic {
        BELLA,
        BRAVA
    }
    address public coso = address(this);
    ariannapublic public numero;

    function setNumero() public {
        numero = ariannapublic.BRAVA;
    }
}
