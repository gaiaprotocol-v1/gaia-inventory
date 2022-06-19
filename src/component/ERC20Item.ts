import { DomNode, el } from "skydapp-browser";

export default class ERC20Item extends DomNode {
    constructor(
        image: string,
        title: string,
        amount: number,
    ) {
        super(".erc20-item");
        this.append(
            el(".left-container",
                el("h6", title),
                el("img", { src: `/images/img/${image}.png`, alt: title }),
            ),
            el(".right-container",
                el("p", `${amount} IJM`),
                el("a", "전송하기"),
            ),
        )
    }

    public delete() {
        super.delete();
    }
}