import { DomNode, el } from "skydapp-browser";

export default class ERC1155Item extends DomNode {
    constructor(
        image: string,
        title: string,
        amount: number,
    ) {
        super(".erc1155-item");
        this.append(
            el("img", { src: `/images/img/${image}.png`, alt: title }),
            el(".content",
                el("h6", title),
                el("p", `${amount.toLocaleString("ko-KR")}개`),
                el(".button-container",
                    el("a", "상세보기"),
                    el("a", "전송보기"),
                ),
            ),
        );
    }

    public delete() {
        super.delete();
    }
}