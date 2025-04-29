import { Product } from "../components-patterns/hooks/useProduct";

// GET PRODUCT LIST
const getProductsList = async (): Promise<Product[]> => {
    const response = await fetch('src/services/products.json', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log({ response});
    const data = await response.json();
    return data || [];
}

export {
    getProductsList
}


