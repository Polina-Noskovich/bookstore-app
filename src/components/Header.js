import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import styles from './Header.module.css';
import { ReactComponent as UserIcon } from '../assets/User.svg'; 
import { ReactComponent as HeartIcon } from '../assets/Bookmark.svg';
import { ReactComponent as CartIcon } from '../assets/Cart.svg';
import { ReactComponent as LogoutIcon } from '../assets/SignOut.svg';
import { ReactComponent as SearchIcon } from '../assets/Search.svg';
import { useSearchBooksQuery } from '../features/books/bookApi';

const Header = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const { data: searchResults, isFetching } = useSearchBooksQuery({ query: searchQuery, page: 1 }, {
    skip: searchQuery.length < 3,
  });

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowResults(e.target.value.length >= 3);
  };

  const handleBookSelect = () => {
    setSearchQuery('');
    setShowResults(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(`.${styles.search_div}`)) {
        setShowResults(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.logo}>.</Link>
        
        <div className={styles.search_div}>
          <SearchIcon className={styles.iconSmall} />
          <input 
            type="text" 
            placeholder="Search in library..." 
            className={styles.search}
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => searchQuery.length >= 3 && setShowResults(true)}
          />
          {showResults && (
            <div className={styles.search_results}>
              {isFetching ? (
                <div className={styles.search_loading}>Loading...</div>
              ) : (
                <>
                  {searchResults?.books?.slice(0, 3).map(book => (
                    <Link 
                      key={book.isbn13} 
                      to={`/book/${book.isbn13}`} 
                      className={styles.search_result_item}
                      onClick={handleBookSelect}
                    >
                      <img src={book.image} alt={book.title} className={styles.search_result_image} />
                      <div className={styles.search_block}>
                        <div className={styles.search_result_title}>{book.title}</div>
                        <div className={styles.search_result_price}>{book.price}</div>
                      </div>
                    </Link>
                  ))}
                  <Link 
                    to="/catalog" 
                    className={`${styles.search_result_item} ${styles.view_all_link}`}
                    onClick={handleBookSelect}
                  >
                    <div className={styles.search_result_title}>View all books in catalog →</div>
                  </Link>
                </>
              )}
              {!isFetching && searchResults?.books?.length === 0 && (
                <div className={styles.search_no_results}>
                  No books found
                </div>
              )}
            </div>
          )}
        </div>

        <Link className={styles.catalog} to="/catalog">Catalogue</Link>
        <nav className={styles.nav}>
          {user ? (
            <div className={styles.user}>
              <UserIcon className={styles.iconSmall} />
              <span className={styles.username}>{user.name}</span>
              <Link to="/favorites"><HeartIcon className={styles.iconSmall} /></Link>
              <Link to="/cart"><CartIcon className={styles.iconSmall} /></Link>
              <button onClick={handleLogout} className={styles.logout_button}>
                <LogoutIcon className={styles.iconSmall} />
              </button>
            </div>
          ) : (
            <Link to="/login" className={styles.login}>
              <UserIcon />
              <span>Log in</span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;