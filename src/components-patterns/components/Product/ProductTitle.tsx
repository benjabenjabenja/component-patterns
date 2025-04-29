import { useContext } from "react";
//Context:
import { ProductContext } from "./ProductCard";
//Styles:
import styles from '../../styles/styles.module.css';

export interface ProductTitleProps {
    title?: string;
}

const ProductTitle: React.FC<ProductTitleProps> = ({ title }) => {
    const { product } = useContext(ProductContext);
    return (
        <span className={styles.productDescription}> {title || product.title} </span>
    )
}

export default ProductTitle;