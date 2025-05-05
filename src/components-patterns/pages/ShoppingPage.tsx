//Components:
import { ProductList } from '../components';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';
//Hooks:
import { useProducts } from '../hooks/useProducts';
import { Product } from '../hooks/useProduct';
import { useShoppingCart } from '../hooks/useShoppingCart';
//Utils:
import { SHOPPING_PAGE } from '../../utils/const';
//Styles:
import styles from '../styles/styles.module.css';
import '../../styles/variables.css'

export interface ProductInCart extends Product { 
    quantity: number;
}

export interface ShoppingCartState {
    [key: string]: ProductInCart;
}

export const ShoppingPage: React.FC = () => {
    const { products } = useProducts();
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
                <ProductList
                    products={products}
                    onProductCountChange={onProductCountChange}
                    value={cart} />

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
