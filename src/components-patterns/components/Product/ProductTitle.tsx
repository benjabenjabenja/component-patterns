import { useContext } from "react";
//Context:
import { ProductContext } from "./ProductCard";
//Styles:
import styles from '../../styles/styles.module.css';

export interface ProductTitleProps {
    title?: string;
    className?: string;
}

const ProductTitle: React.FC<ProductTitleProps> = ({ title, className }) => {
    const { product } = useContext(ProductContext);
    return (
        <span className={`${styles.productDescription} ${className}`}> {title || product.title} </span>
    )
}

export default ProductTitle;