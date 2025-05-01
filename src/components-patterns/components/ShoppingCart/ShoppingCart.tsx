import React from 'react'
//Utils:
import { CART_STYLE, SHOPPING_PAGE, SIMBOLOS } from '../../../utils/const'
//Components:
import { ProductCard } from '../index';
//Hooks:
import { Product } from '../../hooks/useProduct';
import { ShoppingCartState } from '../../pages/ShoppingPage';

interface ShoppingCartProps {
    cart: ShoppingCartState;
    total: number;
    totalQuantity: number;
    onProductCountChange: (product: Product, count: number) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = (props: ShoppingCartProps) => {
    const { cart, total, totalQuantity, onProductCountChange } = props;

    return (
        <div style={{ ...CART_STYLE.shoppingCart }}>
            {Object.entries(cart).map(([key, product]) => (
                <ProductCard
                    className='bg-dark text-white'
                    key={key}
                    product={product as Product}
                    style={CART_STYLE.productCardCart}
                    onProductCountChange={onProductCountChange}
                    value={product?.quantity}
                >
                
                    <ProductCard.Image className='custom-image' img={product.img} />
                    <ProductCard.Buttons className='custom-buttons' />
                
                </ProductCard>
            ))}

            <div style={{ ...CART_STYLE.totalContainer }}>
                <h3>{SHOPPING_PAGE.TOTAL}</h3>
                <p>{SIMBOLOS.DOLLAR} {total}</p>
                <p>{SHOPPING_PAGE.TOTAL_QUANTITY}: {totalQuantity}</p>
            </div>
        </div>
    )
}

export default ShoppingCart
