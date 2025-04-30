//Hooks:
import useProducts from "../../hooks/useProducts";
//Components:
//import { ProductCard } from '../Product/ProductCard'
import { ProductCard } from '../index';
//Utils:
import { PRODUCT_LIST } from "../../../utils/const";
//Interface:
import { ProductTitleProps } from "./ProductTitle";
import { ProductImageProps } from "./ProductImage";
import { ProductCardProps } from "./ProductCard";
import { ProductButtonsProps } from "./ProductButtons";
import { ProductPriceProps } from "./ProductPrice";
//Styles:
import '../../styles/custom-styles.css';
import '../../../styles/variables.css';


export interface ProductCardHOCProps { 
    (props: ProductCardProps): JSX.Element;
    Title: React.FC<ProductTitleProps>;
    Image: React.FC<ProductImageProps>;
    Price: React.FC<ProductPriceProps>;
    Buttons: React.FC<ProductButtonsProps>;
}

const ProductList: React.FC = () => {
    const { products, loading } = useProducts();

    return (
        <>
            {loading && <h2>{PRODUCT_LIST.LOADING}</h2>}

            {products.length && products.map(product => (
                <ProductCard className='bg-dark text-white' key={product.id} product={product}>
                    <ProductCard.Image className='custom-image' img={product.img} />
                    <ProductCard.Title className='text-white text-bold' title={product.title} />
                    <ProductCard.Price className='text-white text-bold' />
                    <ProductCard.Buttons className='custom-buttons' />
                </ProductCard>)) 
           }
            
            {products.length && products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    className='text-dark'
                    style={{ backgroundColor: 'var(--color-react-blue)', color: 'var(--color-black)' }}
                />
            ))}
            
            
            {!products.length && <h2>{PRODUCT_LIST.NO_PRODUCTS}</h2>}
        </>
    )
}

export default ProductList;