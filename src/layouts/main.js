import Navbar from '../components/navbar/navbar'
import { Routes, Route } from "react-router-dom";
import Home from '../components/home/Home'
import Catalog from '../components/catalog/Catalog'
import Favorites from '../components/favorites/Favorites'
import Cart from '../components/cart/Cart'

function Main() {
    return (
        <div>

                <Navbar></Navbar>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="catalog" element={<Catalog />} />
                        <Route path="/favorites/:username" element={<Favorites />} />
                        <Route path="cart" element={<Cart />} />
                    </Routes>
                </div>

        </div>
    )
}

export default Main;