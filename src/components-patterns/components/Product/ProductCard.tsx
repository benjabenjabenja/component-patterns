//Hooks:
import useProduct, { Product } from '../../hooks/useProduct';
//Context:
import { Provider as ProductContextProvider } from '../../Context/ProductContext';
//Styles:
import styles from '../../styles/styles.module.css';

export interface ProductCardsHandlers {
    count: number;
    isMaxCountReached: boolean;
    isMinCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;
    reset: () => void;
}

export interface ProductCardInitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardProps {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: (handlers: ProductCardsHandlers) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onProductCountChange?: (product: Product, newCount: number) => void;
    value?: number;
    initialValues?: ProductCardInitialValues;
}

export const ProductCard = (props: ProductCardProps) => {
    const {
        product,
        children,
        className,
        style,
        onProductCountChange,
        value,
        initialValues
    } = props;

    const {
        count,
        increaseBy,
        isMaxCountReached,
        isMinCountReached,
        maxCount,
        reset
    } = useProduct({ product, onProductCountChange, value, initialValues });

    return (
        <ProductContextProvider value={{
            count,
            increaseBy, 
            product,
            maxCount
        }}>

            <div className={`${styles.productCard} ${className}`} style={style}>
                { children && children({
                    count,
                    isMaxCountReached,
                    isMinCountReached,
                    maxCount,
                    product,
                    increaseBy,
                    reset
                })}
            </div>
        </ProductContextProvider>
    );
}

export default ProductCard;