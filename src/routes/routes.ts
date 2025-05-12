//Pages:
import {
    FormikAbstract,
    FormikBasic,
    FormikComponents,
    FormikYup,
    RegisterPage,
    RegisterFormikPage,
    DynamicForm,
} from '../forms/pages';
import {
    AboutPage,
    HomePage,
    UsersPage
} from '../components';
//Utils:
import { ROUTES_APP } from '../utils/const';

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
    {
        path: ROUTES_APP.FORMIK.PATH,
        Component: FormikBasic,
        name: ROUTES_APP.FORMIK.NAME,
        to: ROUTES_APP.FORMIK.TO,
    },
    {
        path: ROUTES_APP.FORMIK_YUP.PATH,
        Component: FormikYup,
        name: ROUTES_APP.FORMIK_YUP.NAME,
        to: ROUTES_APP.FORMIK_YUP.TO,
    },
    {
        path: ROUTES_APP.FORMIK_COMPONENTS.PATH,
        Component: FormikComponents,
        name: ROUTES_APP.FORMIK_COMPONENTS.NAME,
        to: ROUTES_APP.FORMIK_COMPONENTS.TO,
    },
    {
        path: ROUTES_APP.FORMIK_ABSTRACT.PATH,
        Component: FormikAbstract,
        name: ROUTES_APP.FORMIK_ABSTRACT.NAME,
        to: ROUTES_APP.FORMIK_ABSTRACT.TO,
    },
    {
        path: ROUTES_APP.REGISTER_FORMIK.PATH,
        Component: RegisterFormikPage,
        name: ROUTES_APP.REGISTER_FORMIK.NAME,
        to: ROUTES_APP.REGISTER_FORMIK.TO,
    },
    {
        path: ROUTES_APP.DYNAMIC_FORM.PATH,
        Component: DynamicForm,
        name: ROUTES_APP.DYNAMIC_FORM.NAME,
        to: ROUTES_APP.DYNAMIC_FORM.TO,
    }
];