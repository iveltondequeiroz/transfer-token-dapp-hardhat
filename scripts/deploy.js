const hre = require("hardhat");


// Greeter deployed to: 0x7990b390A40F15529693FD6c0D2b406B22f2cF59
// Token deployed to: 0xd6124a3991f8521D5A1D0B0e9E82a0dc800dB0CF


async function main() {
  // We get the contract to deploy
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);


  // We get the Token to deploy
  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy();
  
  await token.deployed();

  console.log("Token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
