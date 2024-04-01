import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    if (!goods.length) {
        return <h3>Not found</h3>;
    }

    return (
        <div className="goods row row-cols-3 row-cols-xl-5 g-4">
            {goods.map((item) => (
                <div className="col">
                    <GoodsItem key={item.imdbID} {...item} addToBasket={addToBasket} />
                </div>
            ))}
        </div>
    );
}

export { GoodsList };