//Components:
import { ProductList } from '../components';
//Utils:
import { PRODUCT_LIST, SHOPPING_PAGE } from '../../utils/const';
//Styles:
import styles from '../styles/styles.module.css';
import '../../styles/variables.css'
//Hooks:
import { useProducts } from '../hooks/useProducts';
import { Product } from '../hooks/useProduct';
import { useShoppingCart } from '../hooks/useShoppingCart';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';

export interface ProductInCart extends Product { 
    quantity: number;
}

export interface ShoppingCartState {
    [key: string]: ProductInCart;
}

export const ShoppingPage: React.FC = () => {
    const { products, loading } = useProducts();
    const {
        cart,
        total,
        totalQuantity,
        onProductCountChange
    } = useShoppingCart();
    
    return (
        <div>
            <h1> {SHOPPING_PAGE.TITLE} </h1>

            <main className={styles.shoppingPageMain}>

                {/* PRODUCTS LIST */}
                {products.length && !loading ? (
                    <ProductList
                        products={products}
                        onProductCountChange={onProductCountChange}
                        value={cart} />
                ) : <h2>{PRODUCT_LIST.LOADING}</h2> }

                {/* CART */}
                <ShoppingCart
                    cart={cart}
                    total={total}
                    totalQuantity={totalQuantity}
                    onProductCountChange={onProductCountChange}
                />

            </main>
        </div>
    );
}
export default ShoppingPage;
