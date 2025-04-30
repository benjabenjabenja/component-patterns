//Components:
import ShoppingPage from '../components-patterns/pages/ShoppingPage';

export interface IRoute {
    path: string;
    Component: React.FC;
    name: string;
    to: string;
    children?: IRoute[]
}

export const routes: IRoute[] = [
    {
        path: '/',
        Component: ShoppingPage,
        name: 'Shopping',
        to: '',
    }
];

