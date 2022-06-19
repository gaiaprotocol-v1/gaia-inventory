import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import ERC721Item from "../component/ERC721Item";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class ERC721 implements View {

    private container: DomNode;
    private interval: any;


    constructor() {
        Layout.current.title = "ERC721";
        Layout.current.content.append(this.container = el(".erc721-view",
            el("header",
                el("a", "< 뒤로가기", {
                    click: () => {
                        ViewUtil.go("/")
                    }
                }),
            ),
            el("section",
                new ERC721Item("1", "injeolmi"),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}
