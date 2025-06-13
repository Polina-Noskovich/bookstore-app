import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './features/books/HomePage';
import CatalogPage from './features/books/CatalogPage';
import BookPage from './features/books/BookPage';
import FavoritesPage from './features/favorites/FavoritesPage';
import CartPage from './features/cart/CartPage';
import LoginPage from './features/auth/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import styles from './App.css'; 

function App() {
  return (
    <>
      <Header />
      <main className={styles.mainContent}> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/book/:isbn" element={<BookPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/favorites" element={
          <PrivateRoute><FavoritesPage /></PrivateRoute>
        } />
        <Route path="/cart" element={
          <PrivateRoute><CartPage /></PrivateRoute>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </main>
    </>
  );
}

export default App;
