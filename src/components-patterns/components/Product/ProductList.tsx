// import { ProductCard } from '../index';
//Utils:
import { PRODUCT_LIST } from "../../../utils/const";
//Interface:
import { ProductTitleProps } from "./ProductTitle";
import { ProductImageProps } from "./ProductImage";
import { ProductCardProps } from "./ProductCard";
import { ProductButtonsProps } from "./ProductButtons";
import { ProductPriceProps } from "./ProductPrice";
import { ShoppingCartState } from '../../pages/ShoppingPage';
//Hooks:
import { Product } from "../../hooks/useProduct";
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

interface ProductListProps {
    products: Product[];
    onProductCountChange?: (product: Product, newCount: number) => void;
    value?: ShoppingCartState;
}

const ProductList: React.FC<ProductListProps> = ({ products, onProductCountChange, value }) => {

    return (
        <>     
            {products.length && products.map(product => (
                <>
                    {/* <ProductCard
                        key={product.id}
                        product={product}
                        className='text-dark'
                        style={{ backgroundColor: 'var(--color-react-blue)', color: 'var(--color-black)' }}
                        onProductCountChange={onProductCountChange}
                        value={value?.[product.id]?.quantity || 0}
                    /> */}
                    <h1>Descomentar</h1>
                </>
            ))}
            
            {!products.length && <h2>{PRODUCT_LIST.NO_PRODUCTS}</h2>}
        </>
    )
}

export default ProductList;