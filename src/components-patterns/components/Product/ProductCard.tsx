import { createContext, ReactElement } from 'react'
//Components:
import {
    ProductImage,
    ProductTitle,
    ProductPrice,
    ProductButtons
} from '../../components';
//Hooks:
import useProduct, { Product } from '../../hooks/useProduct';
//Styles:
import styles from '../../styles/styles.module.css';

export interface ProductContextProps {
    count: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onProductCountChange?: (product: Product, newCount: number) => void;
    value?: number;
}

export const ProductCard = ({ product, children, className, style, onProductCountChange, value }: ProductCardProps) => {
    const { count, increaseBy } = useProduct({ product, onProductCountChange, value });

    return (
        <Provider value={{
            count,
            increaseBy, 
            product
        }}>

            <div className={`${styles.productCard} ${className}`} style={style}>

                { children ? children : (
                    <>
                        <ProductImage className='custom-image' />

                        <ProductTitle className='text-dark text-bold' title={product.title} />
                        
                        <ProductPrice className='text-dark text-bold' />

                        <ProductButtons className='custom-buttons-dark' /> 
                    </>
                )}

            </div>
        </Provider>
    );
}

export default ProductCard;