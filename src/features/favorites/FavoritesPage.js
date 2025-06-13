import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from './favoritesSlice';
function FavoritesPage() {
const favItems = useSelector(state => state.favorites.items);
const dispatch = useDispatch();
return (
<div>
<h1>Избранное</h1>
{favItems.length === 0 ? <p>Список избранного пуст</p> : favItems.map(book => (
<div key={book.isbn13}>
<span>{book.title}</span>
<button onClick={() => dispatch(removeFavorite(book.isbn13))}>Удалить</button>
</div>
))
}
</div>
);
}
export default FavoritesPage;
