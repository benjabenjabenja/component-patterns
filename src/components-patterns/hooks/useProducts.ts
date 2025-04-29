import { useEffect, useState } from "react"
import { Product } from "./useProduct"
//Services:
// import * as api from '../../services/api'
import { FAKE_API } from "../../utils/const";

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    const getProducts = async () => {
        // const products = await api.getProductsList();
        // console.log({products});
        setProducts(FAKE_API.PRODUCTS_LIST);
    }

    useEffect(() => {
        setLoading(true);
        getProducts().finally(() => setLoading(false));
    }, []);

    return {
        products,
        loading
    }
}
export default useProducts;