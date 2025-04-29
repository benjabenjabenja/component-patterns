import { Navigate, Route, Routes} from 'react-router';
//Components:
import ShoppingPage from '../../components-patterns/pages/ShoppingPage';
//Interfaces:
import { IRoute } from '../routes';

const WrapperRoutes: React.FC<{ routes: IRoute[] }> = ({ routes }) => (
    <Routes>
        <Route index element={<ShoppingPage />} />
        {routes && routes.length > 0 && routes.map(
            ({ path, Component, name }) => (
                <Route
                    key={name}
                    path={path}
                    element={<Component />}
                />)
            )}
        <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
);

export default WrapperRoutes;