import { useContext } from "react";
//Assets:
import NoImage from '../../assets/no-image.jpg';
//Context:
import { ProductContext } from "./ProductCard";
//Utils:
import { PRODUCT_CARD } from "../../../utils/const";
//Styles:
import styles from '../../styles/styles.module.css';


export interface ProductImageProps {
    img?: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ img = '' }) => {
    const { product } = useContext(ProductContext);

    let imgToShow: string;
    if (img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img;
    } else {
        imgToShow = NoImage;
    }

    return (
        <img
            className={styles.productImg}
            src={imgToShow}
            width={PRODUCT_CARD.IMAGE_WIDTH}
            alt={(img || product?.img) ? PRODUCT_CARD.IMAGE_ALT : PRODUCT_CARD.NO_IMAGE_CONTENT} />
    )
}

export default ProductImage;