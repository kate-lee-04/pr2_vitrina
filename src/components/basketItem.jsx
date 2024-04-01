function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
    return (
        <ul className="collection">
            <li className="collection-item">
                {name}{" "}
                <i
                    class="material-icons basket-quantity"
                    onClick={() => decQuantity(id)}
                >
                    remove
                </i>
                x {quantity}
                <i
                    class="material-icons basket-quantity"
                    onClick={() => incQuantity(id)}
                >
                    add
                </i>{" "}
                = {price * quantity}{" "} руб.
                <span class="secondary-content" onClick={() => removeFromBasket(id)}>
                    <i class="material-icons basket-delete">clear</i>
                </span>
            </li>
        </ul>
    );
}

export { BasketItem };