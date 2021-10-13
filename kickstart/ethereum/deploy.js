const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "excite mail moon eyebrow napkin possible protect dentist anxiety explain pond merge",
  "https://rinkeby.infura.io/v3/f7f015df48e64392aae5a89ac01bd1cf"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0], gasPrice: "5000000000" });

  console.log("Contract deployed to", result.options.address);
};
deploy();
