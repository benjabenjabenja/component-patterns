import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES_APP } from '../utils/const';

const HOME_PAGE = {
    TITLE: 'Welcome to Home page',
    LINK: {
        TO: ROUTES_APP.REGISTER.PATH,
        TEXT: 'Register',
    },
    STYLE: {
        main: {
            display: 'flex',
            flexDirection: 'column' as const,
            alignItems: 'center' as const,
            justifyContent: 'center' as const,
            height: '100vh' as const,
        }
    }
}

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>{HOME_PAGE.TITLE}</h1>

            <main style={HOME_PAGE.STYLE.main}>
                <Link className='register-link' to={HOME_PAGE.LINK.TO}>{HOME_PAGE.LINK.TEXT}</Link>
            </main>
        </div>
    );
}

export default HomePage;