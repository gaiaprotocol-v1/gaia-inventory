import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import ERCItem from "../component/ERCItem";
import Layout from "./Layout";

export default class Inventory implements View {

    private ercList: DomNode;

    private container: DomNode;
    private interval: any;


    constructor() {
        Layout.current.title = "Inventory";
        Layout.current.content.append(this.container = el(".inventory-view",
            el("header",
                el("h2.gaia", "GAIA"),
                el("h2", "INVENTORY"),
            ),
            this.ercList = el("section",
            ),
        ));
        this.init();
    }

    private init() {
        this.ercList.append(
            new ERCItem("injeolmi", "인절미", 1100),
        )
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}
