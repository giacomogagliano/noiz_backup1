// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../ZNFT.sol";

abstract contract Department is P, PPro {}

abstract contract ZionDepartment is Department {
    string public NAME = "ZionDepartment";
    string public TITLE;

    constructor(string memory title) {
        TITLE = title;
    }
}

abstract contract Learn is ZionDepartment {
    constructor() ZionDepartment("Learn") {}
}

abstract contract Design is ZionDepartment {
    constructor() ZionDepartment("Design") {}
}

abstract contract Build is ZionDepartment {
    constructor() ZionDepartment("Build") {}
}

abstract contract Communicate is ZionDepartment {
    constructor() ZionDepartment("Communicate") {}
}

abstract contract Trade is ZionDepartment {
    constructor() ZionDepartment("Trade") {}
}
