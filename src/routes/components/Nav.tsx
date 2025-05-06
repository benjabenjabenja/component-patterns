import { useState } from "react";
import { NavLink } from 'react-router-dom';
//Components:
import NoContent from './NoContent';
//Interfaces:
import { IRoute } from "../routes";

const Nav: React.FC<{routes: IRoute[]}> = ({routes}) => {
    const [messageNoContent,] = useState<string | null>('No routes found');
    
    return (
        <ul>
            {routes?.length > 0 ?
                routes.map(({ to, name }) => (
                    <li key={name}>
                        <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>
                            {name}
                        </NavLink>
                    </li>)
                ) : <NoContent message={messageNoContent} />}
        </ul>
    );
}
export default Nav;