import { useContext } from "react";
//Context:
import { ProductContext } from "./ProductCard";
//Utils:
import { PRODUCT_CARD } from "../../../utils/const";


export interface ProductPriceProps {
    className?: string;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ className }) => {
    const { count, product } = useContext(ProductContext);
    return (
        <small className={`${className}`}> ${count > PRODUCT_CARD.MIN_VALUE_COUNT ?
            Math.abs(product.price * count) :
            Math.abs(product.price)}
        </small>
    )
}

export default ProductPrice;