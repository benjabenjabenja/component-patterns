//Hooks:
import useProduct, { Product } from '../../hooks/useProduct';
//Context:
import { Provider as ProductContextProvider } from '../../Context/ProductContext';
//Styles:
import styles from '../../styles/styles.module.css';

export interface ProductCardInitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardProps {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: () => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onProductCountChange?: (product: Product, newCount: number) => void;
    value?: number;
    initialValues?: ProductCardInitialValues;
}

export const ProductCard = ({ product, children, className, style, onProductCountChange, value, initialValues }: ProductCardProps) => {
    const { count, increaseBy, maxCount } = useProduct({ product, onProductCountChange, value, initialValues });

    return (
        <ProductContextProvider value={{
            count,
            increaseBy, 
            product,
            maxCount
        }}>

            <div className={`${styles.productCard} ${className}`} style={style}>
                { children && children() }
            </div>
        </ProductContextProvider>
    );
}

export default ProductCard;