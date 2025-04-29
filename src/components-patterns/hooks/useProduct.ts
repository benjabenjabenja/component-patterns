import { useCallback, useState } from 'react';

export interface Product {
    id: string;
    title: string;
    price: number;
    img?: string;
}

const useProduct = () => {
    const [count, setCount] = useState<number>(0);

    const increaseBy = useCallback((by: number) => {
        setCount(prev => Math.max(prev + by, 0));
    }, []);

    return {
        count,
        increaseBy
    };
}

export default useProduct