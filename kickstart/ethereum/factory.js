import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x65b944F6E09ea9Dd2D9dED7c8E150a854EBf700e"
);

export default instance;
