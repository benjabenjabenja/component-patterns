import { useContext } from "react";
//Context:
import { ProductContext } from "./ProductCard";
//Utils:
import { PRODUCT_CARD, SIMBOLOS } from "../../../utils/const";
//Styles:
import styles from '../../styles/styles.module.css';
import '../../styles/custom-styles.css';


export interface ProductButtonsProps {
    className?: string;
    style?: React.CSSProperties;
}

const ProductButtons: React.FC<ProductButtonsProps> = ({ className, style }) => {
    const { count, increaseBy } = useContext(ProductContext);

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>

            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(PRODUCT_CARD.VALUE_DISCOUNT)}>{SIMBOLOS.MINUS}</button>
        
            <div className={styles.countLabel}>{count ?? PRODUCT_CARD.DEFAULT_COUNT}</div>

            <button
                className={styles.buttonAdd}
                onClick={() => increaseBy(PRODUCT_CARD.VALUE_INCREASE)}>{SIMBOLOS.PLUS}</button>
        </div>
    )
}

export default ProductButtons;