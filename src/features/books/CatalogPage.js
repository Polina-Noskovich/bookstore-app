import React, { useState } from 'react';
import { useSearchBooksQuery } from './bookApi';
import BookCard from '../../components/BookCard';
import styles from './CatalogPage.module.css';
import { ChevronRight} from 'lucide-react';
function CatalogPage() {
const [query, setQuery] = useState('react');
const [page, setPage] = useState(1);
const { data, error, isLoading } = useSearchBooksQuery({ query, page });

return (
<div>
    
    <span classname={styles.headMain} >Main</span><span classname={styles.headChevron}> <ChevronRight /> </span><span classname={styles.headMain}>Shop</span>
<h1>Shop</h1>
<input value={query} onChange={e => setQuery(e.target.value)}
placeholder="Поиск..." />
{isLoading && <p>Загрузка...</p>}
{error && <p>Ошибка загрузки</p>}
<div className="books-grid">
{data?.books.map(book => (
<BookCard key={book.isbn13} book={book} />
))}
</div>
<button className={styles.backButton} disabled={page <= 1} onClick={() => setPage(prev => prev -
1)}>Назад</button>
<button onClick={() => setPage(prev => prev + 1)}>Вперед</button>
</div>
);
}


  
export default CatalogPage;
