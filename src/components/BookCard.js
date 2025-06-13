import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../features/favorites/favoritesSlice';
import { addToCart } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';
import styles from './BookCard.module.css'; 
function BookCard({ book }) {
const dispatch = useDispatch();
const isAuth = useSelector(state => state.auth.token);
const handleFavorite = () => {
if (isAuth) {
dispatch(addFavorite(book));
} else {
alert('Нужно войти, чтобы добавлять в избранное');
}
};
const handleCart = () => {
if (isAuth) {
dispatch(addToCart(book));
} else {
alert('Нужно войти, чтобы добавить в корзину');
}
};
return (
<div className={styles.card}>
<img src={book.image} alt={book.title} />
<h3><Link to={`/book/${book.isbn13}`}>{book.title}</Link></h3>
<p>{book.subtitle}</p>
<p>{book.price}</p>
<button onClick={handleFavorite}>Избранное</button>
<button onClick={handleCart}>В корзину</button>
</div>
);
}
export default BookCard;
