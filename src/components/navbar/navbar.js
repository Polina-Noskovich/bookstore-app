import  { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <h1>Книжный дом</h1>
            <ul>
                <li><NavLink exact to="/">Главная</NavLink></li>
                <li><NavLink to="/catalog">Каталог</NavLink></li>
                <li><NavLink to={{
                            pathname: "/favorites/percybolmer"
                        }}
                    >
                        Избранное
                    </NavLink></li>
                <li><NavLink to="/cart">Корзина</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;