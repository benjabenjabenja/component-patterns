import { useCallback, useContext } from "react";
//Context:
import { ProductContext } from "../../Context/ProductContext";
//Utils:
import { PRODUCT_CARD, SIMBOLOS } from "../../../utils/const";
//Styles:
import styles from '../../styles/styles.module.css';
import '../../../styles/variables.css';
import '../../styles/custom-styles.css';

export interface ProductButtonsProps {
    className?: string;
}

const ProductButtons: React.FC<ProductButtonsProps> = ({ className }) => {
    const { count, increaseBy, maxCount } = useContext(ProductContext);

    const isMaxCountReached = useCallback(() => {
        return !!maxCount && count === maxCount;
    }, [count, maxCount]);

    const isMinCountReached = useCallback(() => {
        return count < PRODUCT_CARD.MIN_VALUE_COUNT;
    }, [count]);

    return (
        <div className={`${styles.buttonsContainer} ${className}`}>

            <button
                className={`${styles.buttonMinus} ${isMinCountReached() ? '-right-border' : ''}`}
                onClick={() => increaseBy(PRODUCT_CARD.VALUE_DISCOUNT)}
                disabled={isMinCountReached()}
            >{SIMBOLOS.MINUS}</button>
        
            <div className={styles.countLabel}>{count ?? PRODUCT_CARD.DEFAULT_COUNT}</div>

            <button
                className={`${styles.buttonAdd} ${isMaxCountReached() ? '-left-border' : ''}`}
                onClick={() => increaseBy(PRODUCT_CARD.VALUE_INCREASE)}
                disabled={isMaxCountReached()}
            >{SIMBOLOS.PLUS}</button>
        </div>
    )
}

export default ProductButtons;