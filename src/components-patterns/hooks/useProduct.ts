import { useCallback, useState } from 'react';
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
}

const useProduct = ({ product, onProductCountChange }: UseProductProps) => {
    const [count, setCount] = useState<number>(PRODUCT_COUNT.MIN_VALUE);

    const increaseBy = useCallback((value: number) => {
        const newCount = Math.max(count + value, PRODUCT_COUNT.MIN_VALUE);
        setCount(newCount);
        onProductCountChange && onProductCountChange(product, newCount);
    }, [count, onProductCountChange, product]);

    return {
        count,
        increaseBy
    };
}

export default useProduct