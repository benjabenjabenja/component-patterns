import { useCallback, useEffect, useRef, useState } from 'react';
//Utils:
import { PRODUCT_COUNT } from '../../utils/const';
import { ProductCardInitialValues } from '../components/Product/ProductCard';

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
    initialValues?: ProductCardInitialValues;
}

const useProduct = (props: UseProductProps) => {
    const { product, onProductCountChange, value = PRODUCT_COUNT.MIN_VALUE, initialValues } = props;

    const [count, setCount] = useState<number>(value);

    const isMounted = useRef<boolean>(false);

    const increaseBy = useCallback((value: number) => {
     
        let newCount = Math.max(count + value, PRODUCT_COUNT.MIN_VALUE);

        if (initialValues?.maxCount) {
            newCount = Math.min(newCount, initialValues.maxCount);
        }

        setCount(newCount);

        onProductCountChange && onProductCountChange(product, newCount);

    }, [count, initialValues, onProductCountChange, product]);

    useEffect(() => {
        isMounted.current = true;
    }, []);

    useEffect(() => {

        if (!isMounted.current) return;
        setCount(initialValues?.count || value);

    }, [value, initialValues]);

    return {
        count,
        increaseBy,
        maxCount: initialValues?.maxCount
    };
}

export default useProduct