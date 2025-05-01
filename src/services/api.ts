import { Product } from "../components-patterns/hooks/useProduct";

// GET PRODUCT LIST
const getProductsList = async (): Promise<Product[]> => {

    try {
        
        const response = await fetch('src/services/products.json', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        const data = await response.json();
        return data || [];
    } catch (error: any) {
        console.error("error: ", error.message);
        throw new Error(error.message);
    }

}

export {
    getProductsList
}


