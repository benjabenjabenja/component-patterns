//Pages:
import AboutPage from "../components/AboutPage";
import HomePage from "../components/HomePage";
import UsersPage from "../components/UsersPage";
import RegisterPage from "../forms/pages/RegisterPage";
//Utils:
import { ROUTES_APP } from "../utils/const";

export interface IRoute {
    path: string;
    Component: React.FC;
    name: string;
    to: string;
    children?: IRoute[]
}

export const routes: IRoute[] = [
    {
        path: ROUTES_APP.HOME.PATH,
        Component: HomePage,
        name: ROUTES_APP.HOME.NAME,
        to: ROUTES_APP.HOME.TO,
    },
    {
        path: ROUTES_APP.ABOUT.PATH,
        Component: AboutPage,
        name: ROUTES_APP.ABOUT.NAME,
        to: ROUTES_APP.ABOUT.TO,
    },
    {
        path: ROUTES_APP.USER.PATH,
        Component: UsersPage,
        name: ROUTES_APP.USER.NAME,
        to: ROUTES_APP.USER.TO,
    },
    {
        path: ROUTES_APP.REGISTER.PATH,
        Component: RegisterPage,
        name: ROUTES_APP.REGISTER.NAME,
        to: ROUTES_APP.REGISTER.TO,
    },
];