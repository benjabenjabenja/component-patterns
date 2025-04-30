//Components:
import { ProductList } from '../components';
//Utils:
import { SHOPPING_PAGE } from '../../utils/const';
//Styles:
import styles from '../styles/styles.module.css';
import '../../styles/variables.css'

export const ShoppingPage: React.FC = () => {

    return (
        <div>
            <h1> {SHOPPING_PAGE.TITLE} </h1>

            <main className={styles.shoppingPageMain}>
                <ProductList />
            </main>
        </div>
    );
}
export default ShoppingPage;
