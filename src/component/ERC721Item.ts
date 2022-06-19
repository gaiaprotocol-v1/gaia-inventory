import { DomNode, el } from "skydapp-browser";

export default class ERC721Item extends DomNode {
    constructor(
        id: string,
        image: string,
    ) {
        super(".erc721-item");
        this.append(
            el("id", id),
            el("img", { src: `/images/img/${image}.png`, alt: id }),
            el("a", "상세보기"),
            el("a", "전송하기"),
        );
    }

    public delete() {
        super.delete();
    }
}