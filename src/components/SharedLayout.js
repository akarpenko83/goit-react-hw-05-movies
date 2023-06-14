import { NavLink, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">HomePage</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies">
                            Movies
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
};
