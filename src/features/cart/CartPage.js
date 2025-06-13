import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from './cartSlice';

function CartPage() {
const cartItems = useSelector(state => state.cart.items);
const dispatch = useDispatch();
const total = cartItems.reduce((sum, item) => sum +
parseFloat(item.price.slice(1)), 0);

return (
<div>
<h1>Корзина</h1>
{cartItems.length === 0 ? <p>Корзина пуста</p> : cartItems.map(book => (
<div key={book.isbn13}>
<span>{book.title} — {book.price}</span>
<button onClick={() => dispatch(removeFromCart(book.isbn13))}>Удалить</button>
</div>
))
}
<p>Итого: ${total.toFixed(2)}</p>
<button onClick={() => dispatch(clearCart())}>Очистить корзину</button>
</div>
);
}

export default CartPage;