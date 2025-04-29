import { Suspense } from 'react';
import { BrowserRouter } from 'react-router'
//Assets:
import Logo from '../logo.svg';
//Components:
import Nav from './components/Nav';
import WrapperRoutes from './components/WrapperRoutes';
//Routes:
import { routes } from './routes';

const Loading: React.FC = () => (<h2>Loading pages ...</h2>);

const Navigation = () => (
    <Suspense fallback={<Loading />}>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={Logo} alt="React-Logo" />
                    <Nav routes={routes} />
                </nav>
                <WrapperRoutes routes={routes} />
            </div>
        </BrowserRouter>
    </Suspense>);

export default Navigation;