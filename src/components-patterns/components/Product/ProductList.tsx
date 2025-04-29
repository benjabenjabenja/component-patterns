//Hooks:
import useProducts from "../../hooks/useProducts";
//Components:
import { ProductCard } from "../index";
//Utils:
import { PRODUCT_LIST } from "../../../utils/const";
import { ProductTitleProps } from "./ProductTitle";
import { ProductImageProps } from "./ProductImage";
import { ProductCardProps } from "./ProductCard";

export interface ProductCardHOCProps { 
    ({ children, product}: ProductCardProps): JSX.Element;
    Title: React.FC<ProductTitleProps>;
    Image: React.FC<ProductImageProps>;
    Price: React.FC;
    Buttons: React.FC;
}

const ProductList: React.FC = () => {
    const { products, loading } = useProducts();

    return (
        <>
            {loading && <h2>{PRODUCT_LIST.LOADING}</h2>}

            {products.length && products.map(product => (
                <ProductCard key={product.id} product={product}>
                    <ProductCard.Image img={product.img} />
                    <ProductCard.Title title={product.title} />
                    <ProductCard.Price />
                    <ProductCard.Buttons />
                </ProductCard>))}
            
            {products.length && products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
            
            
            {!products.length && <h2>{PRODUCT_LIST.NO_PRODUCTS}</h2>}
        </>
    )
}

export default ProductList;