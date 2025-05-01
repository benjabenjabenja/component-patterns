import { useContext } from 'react';
//Context:
import { ProductContext } from '../../Context/ProductContext';
//Utils:
import { PRODUCT_CARD, SIMBOLOS } from '../../../utils/const';

export interface ProductPriceProps {
    className?: string;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ className }) => {
    const { count, product } = useContext(ProductContext);
    return (
        <small className={`${className}`}> {SIMBOLOS.DOLLAR} {count > PRODUCT_CARD.MIN_VALUE_COUNT ?
            Math.abs(product?.price * count) :
            Math.abs(product?.price)}
        </small>
    )
}

export default ProductPrice;