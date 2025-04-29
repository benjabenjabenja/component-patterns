import { useContext } from "react";
//Context:
import { ProductContext } from "./ProductCard";
//Utils:
import { PRODUCT_CARD } from "../../../utils/const";


const ProductPrice: React.FC = () => {
    const { count, product } = useContext(ProductContext);
    return (
        <small> ${count > PRODUCT_CARD.MIN_VALUE_COUNT ?
            Math.abs(product.price * count) :
            Math.abs(product.price)}
        </small>
    )
}

export default ProductPrice;