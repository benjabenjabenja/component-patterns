import { createContext, ReactElement } from 'react'
//Hooks:
import useProduct, { Product } from '../../hooks/useProduct';
//Styles:
import styles from '../../styles/styles.module.css';
//Components:
import {
    ProductImage,
    ProductTitle,
    ProductPrice,
    ProductButtons
} from '../../components';

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
}

export const ProductCard = ({ product, children }: ProductCardProps) => {
    const { count, increaseBy } = useProduct();

    return (
        <Provider value={{
            count,
            increaseBy, 
            product
        }}>

            <div className={styles.productCard}>

                { children ? children : (
                    <>
                        <ProductImage />

                        <ProductTitle title={product.title} />
                        
                        <ProductPrice />

                        <ProductButtons /> 
                    </>
                )}

            </div>
        </Provider>
    );
}

export default ProductCard;