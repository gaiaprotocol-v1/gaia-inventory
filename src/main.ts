import { BrowserInfo, msg } from "skydapp-browser";
import { SkyRouter } from "skydapp-common";
import superagent from "superagent";
import Wallet from "./klaytn/Wallet";
import ERC1155 from "./view/ERC1155";
import ERC20 from "./view/ERC20";
import ERC721 from "./view/ERC721";
import InventoryList from "./view/Inventory";
import Layout from "./view/Layout";

(async () => {
    msg.language = BrowserInfo.language;
    msg.parseCSV((await superagent.get("/msg.csv")).text);

    SkyRouter.route("**", Layout);
    SkyRouter.route("", InventoryList);
    SkyRouter.route("erc20", ERC20);
    SkyRouter.route("erc721", ERC721);
    SkyRouter.route("erc1155", ERC1155);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }

    if (await Wallet.connected() !== true) {
        await Wallet.connect();
    }
})();