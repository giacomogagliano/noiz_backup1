import { ethers } from "hardhat";

export const logDeploymentGasLimit = async (contract, name) => {
  return console.log(
    "%d of gas is required to deploy the contract:",
    parseInt(contract.deployTransaction.gasLimit._hex),
    name
  );
};

export const emitsEventOnDeploy = async (contract, event) => {
  let response = await contract.deployTransaction.wait();
  let isEvent = response.events ? true : false;
  let eventResponse = isEvent ? response.events[0].event : undefined;
  return (eventResponse = event ? true : false);
};

// export const hashTx = async ({ contract, functionName, arguments }) => {
//   return contract.interface.encodeFunctionData(functionName, arguments);
// };

export const calculateProposalId = async ({
  targets,
  values,
  calldatas,
  description,
}) => {
  let types = ["address[]", "uint256[]", "bytes[]", "bytes32"];
  let abiEncodedProposal = await this.abi.encode(types, [
    targets,
    values,
    calldatas,
    description,
  ]);
  let hashedProposal = await ethers.utils.keccak256(abiEncodedProposal);
  return ethers.BigNumber.from(hashedProposal).toString();
};

export const calculateCallDatas = async (txs) => {
  let array = [];
  txs.forEach(async (tx) => {
    let hashedTx = await this.hashTx(tx);
    array.push(hashedTx);
  });
  return array;
};

export const abi = {
  encode: async (types, values) => {
    let abiEncoded = await ethers.utils.defaultAbiCoder.encode(types, values);
    return abiEncoded;
  },
};

export const zionUtils = {
  getContractFactory: async (contract) => {
    return ethers.getContractFactory(contract);
  },
  deployContract: async (contract, args) => {
    let Contract = await this.zionUtils.getContractFactory(contract);
    return Contract.deploy();
  },
  zionUtils: async () => {
    let zionUtils = await this.zionUtils.deployContract("ZionUtils");
    return zionUtils;
  },
  hashDescription: async (description) => {
    let zionUtils = await this.zionUtils.zionUtils();
    descriptionInBytes = await zionUtils.stringToBytes(description);
    return ethers.utils.keccak256(descriptionInBytes);
  },
  getBlockNumber: async () => {
    let zionUtils = await this.zionUtils.zionUtils();
    let blockNumber = await zionUtils.getBlockNumber();
    return blockNumber.toNumber();
  },
  getBlockTimestamp: async () => {
    let block = await ethers.provider.getBlock();
    return block.timestamp;
  },
  mineUSDC: async () => {
    return this.zionUtils.deployContract("USDC");
  },
  timeOutPromise: async (timeOut) => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.zionUtils.createTransactions(1));
      }, timeOut * 1000);
    });
  },
  createTransactions: async (numberOfTxToCreate) => {
    for (let index = 0; index < numberOfTxToCreate; index++) {
      await this.zionUtils.getBlockNumber();
    }
  },
  getGasUsed: async (tx, message) => {
    let waitTx = await tx.wait();
    return console.log(`${message}`, await waitTx.gasUsed.toNumber());
  },
  estimateGas: async (tx) => {},
  logDeploymentGasCost: async (contract, message) => {
    return console.log(
      `${message}`,
      parseInt(contract.deployTransaction.gasLimit._hex)
    );
  },
};

export const governance = {
  deployProposal: async (governor, { targets, values, txs, description }) => {
    let calldatas = await this.calculateCallDatas(txs);
    let hashedDescription = await this.zionUtils.hashDescription(description);
    let proposalObj = {
      targets,
      values,
      calldatas,
      description: hashedDescription,
    };
    let proposalId = await this.calculateProposalId({ ...proposalObj });
    return {
      proposal: governor.propose(targets, values, calldatas, description),
      proposalId,
      proposalObj,
    };
  },
  precondition1: async (usdc, zionDao, employee) => {
    let tx1 = {
      contract: usdc,
      functionName: "transfer",
      arguments: [employee.address, 1000],
    };
    let proposalObj = {
      targets: [usdc.address],
      values: [0],
      txs: [tx1],
      description: "description",
    };
    let {
      proposal,
      proposalId,
      proposalObj: proposalObj_,
    } = await this.governance.deployProposal(zionDao, { ...proposalObj });
    return {
      proposal,
      proposalId,
      proposalObj_,
    };
  },
  precondition2: async (usdc, zionDao, employee, holder1, holder2) => {
    let { proposalId, proposalObj_: proposalObj } =
      await this.governance.precondition1(usdc, zionDao, employee);
    await this.zionUtils.getBlockNumber();
    await zionDao.connect(holder1).castVote(proposalId, 0); // against
    await zionDao.connect(holder2).castVote(proposalId, 1); // pro
    await zionDao.proposalVotes(proposalId);
    await zionDao.voteSucceded(proposalId);
    return { proposalId, proposalObj };
  },
  precondition3: async (usdc, zionDao, employee, holder1, holder2, holder3) => {
    let { proposalId, proposalObj } = await this.governance.precondition2(
      usdc,
      zionDao,
      employee,
      holder1,
      holder2
    );
    await zionDao.connect(holder3).castVote(proposalId, 1); // abstain
    return { proposalId, proposalObj };
  },
  createTransactions: async (numberOfTxToCreate) => {
    for (let index = 0; index < numberOfTxToCreate; index++) {
      await this.zionUtils.getBlockNumber();
    }
  },
};
