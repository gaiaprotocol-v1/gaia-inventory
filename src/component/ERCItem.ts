import { DomNode, el } from "skydapp-browser";

export default class ERCItem extends DomNode {
    constructor(
        image: string,
        title: string,
        amount: number,
    ) {
        super("a.erc-item");
        this.append(
            el(".img-container",
                el("img", { src: `/images/img/${image}.png`, alt: title }),
            ),
            el(".content",
                el("h6", title),
                el("p", `${amount.toLocaleString("ko-KR")} 개`),
            ),
        )
    }

    public delete() {
        super.delete();
    }
}