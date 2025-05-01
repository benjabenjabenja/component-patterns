import { useEffect, useMemo, useState } from 'react';
//Interfaces:
import { ProductInCart, ShoppingCartState } from '../pages/ShoppingPage';
//Hooks:
import { Product } from './useProduct';
//Utils:
import { PRODUCT_COUNT } from '../../utils/const';

export const useShoppingCart = () => {
    const [cart, setCart] = useState<ShoppingCartState>({});	
    const [total, setTotal] = useState(0);

    const onProductCountChange = (product: Product, count: number) => {
        setCart(prev => {
            const productInCart: ProductInCart = prev[product.id] || { ...product, quantity: PRODUCT_COUNT.MIN_VALUE };
            
            if (count === 0) {
                const { [product.id]: _, ...rest } = prev;
                return rest;
            }

            return {
                ...prev, [product.id]: {
                    ...productInCart,
                    quantity: count
                }
            };
        });
    }

    const totalQuantity = useMemo(() => {
        return Object.values(cart).reduce((acc, product) => acc + product.quantity, 0);
    }, [cart]);

    useEffect(() => {
        setTotal(Object.values(cart).reduce(
            (acc, product) => acc + product.quantity * product.price, 0));
    }, [cart]);

    return {
        cart,
        total,
        totalQuantity,
        onProductCountChange
    }
}
