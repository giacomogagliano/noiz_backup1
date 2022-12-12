import { ethers } from "hardhat";

const CONTRACTADDRESS = "0x7c544aC11d219d10Bcd3ef2A048f4a72588a2d59";

async function main() {
  const contract = await ethers.getContractAt(
    "ERC1155IndividualURI",
    CONTRACTADDRESS
  );
  console.log(await contract.uri(1));
}

main()
  .then(() => {
    console.log("success");
  })
  .catch((e) => console.log(e));
