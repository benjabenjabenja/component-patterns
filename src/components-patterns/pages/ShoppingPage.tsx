//Components:
import { ProductButtons, ProductCard, ProductImage, ProductPrice, ProductTitle } from '../components';
//Hooks:
import { useProducts } from '../hooks/useProducts';
import { Product } from '../hooks/useProduct';
//Utils:
import { PRODUCT_CARD, SHOPPING_PAGE, SIMBOLOS } from '../../utils/const';
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
    const product = products[0];
    
    return (
        <div>
            <h1> {SHOPPING_PAGE.TITLE} </h1>

            <main className={styles.shoppingPageMain}>

                <ProductCard
                    key={product?.id}
                    product={product && product}
                    className='text-dark'
                    style={{ backgroundColor: 'var(--color-react-blue)', color: 'var(--color-black)' }}
                    initialValues={{
                        count: PRODUCT_CARD.DEFAULT_COUNT_PRODUCT,
                        maxCount: PRODUCT_CARD.MAX_COUNT_PRODUCT
                    }}
                >
                    {({ count, isMaxCountReached, isMinCountReached, maxCount, product, increaseBy, reset }) => (
                        <>
                            <ProductImage className='custom-image' />

                            <ProductTitle className='text-dark text-bold' title={product?.title} />
                            
                            <ProductPrice className='text-dark text-bold' />

                            <ProductButtons className='custom-buttons-dark' /> 

                            <button onClick={reset}>{ PRODUCT_CARD.RESET}</button>

                            <button onClick={() => increaseBy(PRODUCT_CARD.VALUE_DISCOUNT_TWO)}>{ PRODUCT_CARD.VALUE_DISCOUNT_TWO}</button>

                            {!isMaxCountReached && <button onClick={() => increaseBy(PRODUCT_CARD.VALUE_INCREASE_TWO)}>{SIMBOLOS.PLUS} {PRODUCT_CARD.VALUE_INCREASE_TWO}</button>}

                            {SIMBOLOS.SPACE + count}
                        </>
                    )}
                </ProductCard>


            </main>
        </div>
    );
}
export default ShoppingPage;
