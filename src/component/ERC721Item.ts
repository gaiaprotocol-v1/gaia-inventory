import { DomNode, el } from "skydapp-browser";

export default class ERC721Item extends DomNode {
    constructor(
        id: string,
        image: string,
    ) {
        super("a.erc721-item");
        this.append(
            el("header",
                el("p", `#${id}`),
            ),
            el("img", { src: `/images/img/${image}.png`, alt: id }),
            el(".button-container",
                el("a.detail-button", "상세보기"),
                el("a.send-button", "전송하기"),
            ),
        );
    }

    public delete() {
        super.delete();
    }
}