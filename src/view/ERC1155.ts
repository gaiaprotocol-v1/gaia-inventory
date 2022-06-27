import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import ERC1155Item from "../component/ERC1155Item";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class ERC1155 implements View {

    private ercList: DomNode;

    private container: DomNode;
    private interval: any;


    constructor() {
        Layout.current.title = "ERC1155";
        Layout.current.content.append(this.container = el(".erc1155-view",
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
                    el("h5", "RESOURCES"),
                ),
                this.ercList = el(".erc-list"),
            ),
        ));
        this.init();
    }

    private init() {
        this.ercList.append(
            new ERC1155Item("injeolmi", "injeolmi", 3562),
            new ERC1155Item("injeolmi", "injeolmi", 3562),
            new ERC1155Item("injeolmi", "injeolmi", 3562),

        )
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}
