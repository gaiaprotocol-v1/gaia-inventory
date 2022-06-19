import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import InventoryListItem from "../component/inventoryListItem";
import Layout from "./Layout";

export default class InventoryList implements View {

    private container: DomNode;
    private interval: any;


    constructor() {
        Layout.current.title = "Inventory List";
        Layout.current.content.append(this.container = el(".home-view",
            el("section",
                new InventoryListItem("injeolmi", "인절미", 1100),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}
