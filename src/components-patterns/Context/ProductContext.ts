import { createContext } from 'react';
//Hooks:
import { Product } from '../hooks/useProduct';

export interface ProductContextProps {
    count: number;
    increaseBy: (value: number) => void;
    product: Product;
    maxCount?: number;
}

export const ProductContext = createContext({} as ProductContextProps);

export const { Provider } = ProductContext;