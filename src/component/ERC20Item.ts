import { DomNode, el } from "skydapp-browser";

export default class ERC20Item extends DomNode {
    constructor(
        image: string,
        title: string,
        amount: number,
    ) {
        super(".erc20-item");
        this.append(
            el(".img-container",
                el("img", { src: `/images/img/${image}.png`, alt: title }),
            ),
            el(".content",
                el(".title",
                    el("h6", `${title}`),
                    el("p", `${amount} 개`),
                ),
                el("a", "전송하기"),
            ),
        )
    }

    public delete() {
        super.delete();
    }
}