import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import ERC1155Item from "../component/ERC1155Item";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class ERC1155 implements View {

    private container: DomNode;
    private interval: any;


    constructor() {
        Layout.current.title = "ERC1155";
        Layout.current.content.append(this.container = el(".erc1155-view",
            el("header",
                el("a", "< 뒤로가기", {
                    click: () => {
                        ViewUtil.go("/")
                    }
                }),
            ),
            el("section",
                new ERC1155Item("injeolmi", "인절미", 111),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}
