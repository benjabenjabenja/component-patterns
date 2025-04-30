//Interface:
import { ProductCardHOCProps } from './Product/ProductList';
//Components:
import ProductButtons from './Product/ProductButtons';
import { ProductCard as ProductCardHOC } from './Product/ProductCard';
import ProductImage from './Product/ProductImage';
import ProductPrice from './Product/ProductPrice';
import ProductTitle from './Product/ProductTitle';

// export { default as ProductCard } from './Product/ProductCard';
export { default as ProductImage } from './Product/ProductImage';
export { default as ProductTitle } from './Product/ProductTitle';
export { default as ProductPrice } from './Product/ProductPrice';
export { default as ProductButtons } from './Product/ProductButtons';
export { default as ProductList } from './Product/ProductList';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Image: ProductImage,
    Title: ProductTitle,
    Price: ProductPrice,
    Buttons: ProductButtons
});
