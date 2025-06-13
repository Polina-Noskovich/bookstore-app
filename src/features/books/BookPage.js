import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetBookByIsbnQuery } from './bookApi';
function BookPage() {
const { isbn } = useParams();
const { data: book, error, isLoading } = useGetBookByIsbnQuery(isbn);
if (isLoading) return <p>Загрузка...</p>;
if (error || !book) return <p>Ошибка или книга не найдена</p>;
return (
<div>
<h2>{book.title}</h2>
<p><i>{book.subtitle}</i></p>
<p>Автор(ы): {book.authors}</p>
<p>Издатель: {book.publisher}, {book.year}</p>
<p>Страницы: {book.pages}</p>
<p>Описание: {book.desc}</p>
</div>
);
}
export default BookPage;