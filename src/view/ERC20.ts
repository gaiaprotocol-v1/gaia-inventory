import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import ERC20Item from "../component/ERC20Item";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class ERC20 implements View {

    private container: DomNode;
    private interval: any;


    constructor() {
        Layout.current.title = "ERC20";
        Layout.current.content.append(this.container = el(".erc20-view",
            el("header",
                el("a", "< 뒤로가기", {
                    click: () => {
                        ViewUtil.go("/")
                    }
                }),
            ),
            el("section",
                new ERC20Item("injeolmi", "인절미", 1100),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}
