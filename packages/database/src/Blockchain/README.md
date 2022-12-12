# @zionstate/Blochain

This package contains contracts and utilities for testing and deploying contracts on th blockchain

## How to use.

to build artifacts and Typescript for contracts run:

```sh
npx hardhat compile
```

class C {
balances: (uint[] => addr[] => (uint:∞ | 1)) || (addr[] => uint:∞)
metadata: uri[]
}

class Z {
baseContractIds: C.id | C.id[]
balances: (uint[] => addr[] => (uint:∞ | 1))
metadata: uri[]
}

class P {
baseContractIds: C.id[],
governance: G,
balances: (uint[] => addr[] => (uint:∞ | 1))
metedata: (C|Z)[] | (C|Z)
}

class Padd extends P {
add()
}

class Pmint extends P {
mint
}

Members order:

1. variables
2. public functions
3. private functions
4. internal functions

## Syntax conventions

### Private members

Private members shall be defined in a `Private<contractName>.sol` file.
Shall be named with two underscores: `__<variableOrFunctionName>`.

## Internal members

Shall be named with one underscore : `_<variableOrFunctionName>`.

## Public members

Shall be named without underscore : `<variableOrFunctionName>`.

## Hardhat networks

The hardhat config file is setup to retrive datas from the `.env` file. It is supposed to get 4 variables:

```

ACCOUNT1_PrK=69a4ac....
ACCOUNT1_BLNC=10000....

ACCOUNT2_PrK=a8ef1c....
ACCOUNT2_BLNC=10000....

```

> make sure to create a `.env` file and place it in `/Blockchain`
