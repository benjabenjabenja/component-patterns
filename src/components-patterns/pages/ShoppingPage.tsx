import { useState } from 'react';
//ComponeProductCard, nts:
import { ProductCard, ProductList } from '../components';
//Utils:
import {
    CART_STYLE,
    PRODUCT_COUNT,
    PRODUCT_LIST,
    SHOPPING_PAGE
} from '../../utils/const';
//Styles:
import styles from '../styles/styles.module.css';
import '../../styles/variables.css'
//Hooks:
import { useProducts } from '../hooks/useProducts';
import { Product } from '../hooks/useProduct';

export interface ProductInCart extends Product { 
    quantity: number;
}

export interface ShoppingCartState {
    [key: string]: ProductInCart;
}

export const ShoppingPage: React.FC = () => {
    const [cart, setCart] = useState<ShoppingCartState>({});	
    const { products, loading } = useProducts();

    const onProductCountChange = (product: Product, count: number) => {
        setCart(prev => {
            const productInCart: ProductInCart = prev[product.id] || { ...product, quantity: count };
            if (count === PRODUCT_COUNT.MIN_VALUE) {
                const { [product.id]: _, ...rest } = prev;
                return rest;
            }
            return { ...prev, [product.id]: productInCart };
        });
    }

    return (
        <div>
            <h1> {SHOPPING_PAGE.TITLE} </h1>

            <main className={styles.shoppingPageMain}>

                {/* PRODUCTS LIST */}
                {products.length && !loading ? (
                    <ProductList products={products} onProductCountChange={onProductCountChange} />
                ) : <h2>{PRODUCT_LIST.LOADING}</h2> }

                {/* CART */}
                <div style={{ ...CART_STYLE.shoppingCart }}>
                   {Object.values(cart).map(product => (
                        <ProductCard
                            className='bg-dark text-white'
                            key={product.id}
                            product={product}
                           style={CART_STYLE.productCardCart}
                           onProductCountChange={onProductCountChange}
                        >
                            
                            <ProductCard.Image className='custom-image' img={product.img} />
                            <ProductCard.Buttons className='custom-buttons' />

                        </ProductCard>
                    ))}
                </div>

            </main>
        </div>
    );
}
export default ShoppingPage;
