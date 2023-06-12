import { NavLink, Routes, Route } from 'react-router-dom';

export const App = () => {
    return (
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies">Movies</NavLink>
            </nav>
            <Routes>
                <Route
                    path="/"
                    element={<div>Homepage</div>}
                />
                <Route
                    path="/movies"
                    element={<div>Movies</div>}
                />
            </Routes>
        </>
    );
};
