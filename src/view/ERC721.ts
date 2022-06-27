import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import ERC721Item from "../component/ERC721Item";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class ERC721 implements View {

    private ercList: DomNode;

    private container: DomNode;
    private interval: any;


    constructor() {
        Layout.current.title = "ERC721";
        Layout.current.content.append(this.container = el(".erc721-view",
            el("header",
                el("a", {
                    click: () => {
                        ViewUtil.go("/")
                    }
                },
                    el("p", "뒤로가기",),
                    el("img", { src: "/images/img/back.png", alt: "뒤로가기" })
                ),
            ),
            el("section",
                el("header",
                    el("h5.gaia", "GAIA"),
                    el("h5", "GENESIS"),
                ),
                this.ercList = el(".erc-list"),
            ),
        ));
        this.init();
    }

    private init() {
        this.ercList.append(
            new ERC721Item("1", "injeolmi"),
        )
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}
