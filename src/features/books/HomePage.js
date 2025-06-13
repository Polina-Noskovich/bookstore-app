import React, { useEffect, useState } from 'react';
import { useGetNewBooksQuery } from './bookApi';
import styles from './HomePage.module.css';
import book1 from'../../assets/book1.png';
import book2 from'../../assets/book2.png';
import book3 from'../../assets/book3.png';
import book4 from'../../assets/book4.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { data, isLoading, isError } = useGetNewBooksQuery();
  const [bookDetails, setBookDetails] = useState({}); 
  const [email, setEmail] = useState('');
  const handleSubmit = () => {
    setEmail('');
    toast.success('Done!'); 
  };


    useEffect(() => {
    if (data && data.books) {
      data.books.slice(1, 9).forEach(book => {
        fetch(`https://api.itbook.store/1.0/books/${book.isbn13}`)
          .then(res => res.json())
          .then(details => {
            setBookDetails(prev => ({ ...prev, [book.isbn13]: details }));
          });
      });
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.circleGrad}>
          <svg
            className={styles.circleText}
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path
                id="text-circle-path"
                d="
                  M250,250
                  m-220,0
                  a220,220 0 1,1 440,0
                  a220,220 0 1,1 -440,0
                "
              />
            </defs>
            <text fill="#ffffff" >
              <textPath
                href="#text-circle-path"
                startOffset="0%"
              >
                WELCOME TO IT BOOKSTORE WELCOME TO IT BOOKSTORE WELCOME TO BOOK ST
              </textPath>
            </text>
          </svg>
        </div>
        <div className={styles.booksRow}>
          <img className={styles.booksRowFirst} src={book4} alt="Computer Science Book" />
          <img className={styles.booksRowElse} src={book3} alt="CS Book" />
          <img className={styles.booksRowElse} src={book1} alt="CS Book" />
          <img className={styles.booksRowElse} src={book2} alt="CS Book" />
        </div>
        <h1 className={styles.h1Hero}><span className={styles.yellow}>It</span><br></br>  <span className={styles.white}>Programming</span><br></br> <span className={styles.yellow}>Computer Science Books</span></h1>
      </section>

      <section className={styles.newReleases}>
        <h2 className={styles.newRelease}>New release</h2>
          <div className={styles.bookGrid}>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Loading new release error</p>}
            {data && data.books.slice(1, 9).map(book => {
              const details = bookDetails[book.isbn13];
              return (
                <div key={book.isbn13} className={styles.bookCard}>
                  <Link  className={styles.linkNew} to={`/book/${book.isbn13}`}>
                  <img src={book.image} alt={book.title} />
                  <p className={styles.bookTitle}>{book.title}</p>
                  <p className={styles.bookDetails}>{details ? `${details.publisher}, ${details.year}` : 'Loading...'}</p>
                  <p className={styles.bookCard_price}>{book.price}</p>
                  </Link>
                </div>
                
              );
            })}
          </div>
      </section>
      <div className={styles.contact}>
        <h2 className={styles.beFirst}>.</h2>
            <div className={styles.contactBox}>
              <div className={styles.contactRow}>
                <p className={styles.beFirstText}>Be First</p>
                <p className={styles.beFirstText2}>to know about new IT books, upcoming releases,<br></br>  exclusive offers and more</p>
              </div>
              <div className={styles.contactRow}>
                <input type="text" placeholder="email" className={styles.contactEmail} value={email}
                  onChange={(e) => setEmail(e.target.value)} /> <br />
                <button className={styles.contactButton} onClick={handleSubmit}>Contact me</button>
                <ToastContainer position="bottom-right" />
                <div className={styles.contactButtonDecorated}></div>
              </div>
            <a href="https://www.instagram.com/polllinanoskovich?igsh=dWdyZ3NtdWhhOHdi&utm_source=qr" target="_blank" rel="noopener noreferrer" 
              className={styles.contactRow}
         style={{textDecoration: 'none'}}
            >
              <span className={styles.whiteContact}>Subscribe</span><br />  
              <span className={styles.yellowContact}>Subscribe</span><br /> 
              <span className={styles.whiteContact}>Subscribe</span>
            </a>
            </div>
      </div>

      <div className={styles.heroDecorated}></div>
    </div>
  );
};

export default HomePage;
