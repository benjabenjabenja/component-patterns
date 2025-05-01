import { useCallback, useEffect, useState } from 'react';
//Utils:
import { PRODUCT_COUNT } from '../../utils/const';

export interface Product {
    id: string;
    title: string;
    price: number;
    img?: string;
}

interface UseProductProps {
    product: Product;
    onProductCountChange?: (product: Product, newCount: number) => void;
    value?: number;
}

const useProduct = (props: UseProductProps) => {
    const { product, onProductCountChange, value = PRODUCT_COUNT.MIN_VALUE } = props;

    const [count, setCount] = useState<number>(value);

    const increaseBy = useCallback((value: number) => {
     
        const newCount = Math.max(count + value, PRODUCT_COUNT.MIN_VALUE);
        setCount(newCount);

        onProductCountChange && onProductCountChange(product, newCount);

    }, [count, onProductCountChange, product]);

    useEffect(() => {
        setCount(value);
    }, [value]);

    return {
        count,
        increaseBy
    };
}

export default useProduct