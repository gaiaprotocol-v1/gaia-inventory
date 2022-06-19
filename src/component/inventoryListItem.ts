import { DomNode, el } from "skydapp-browser";

export default class InventoryListItem extends DomNode {
    constructor(
        image: string,
        title: string,
        amount: number,
    ) {
        super(".inventory-item");
        this.append(
            el(".title",
                el("img", { src: `/images/img/${image}.png`, alt: title }),
                el("h6", title),
            ),
            el(".amount",
                el("p", `${amount.toLocaleString("ko-KR")}개`),
            ),
        )
    }

    public delete() {
        super.delete();
    }
}