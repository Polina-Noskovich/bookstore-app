import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './authSlice';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
const [username, setUsername] = useState('');
const dispatch = useDispatch();
const navigate = useNavigate();
const handleSubmit = (e) => {
e.preventDefault();
const fakeToken = 'fake-jwt-token';
dispatch(loginSuccess({ user: { name: username }, token: fakeToken }));
localStorage.setItem('token', fakeToken);
localStorage.setItem('user', JSON.stringify({ name: username }));
navigate('/'); 
};
return (
<form onSubmit={handleSubmit}>
<h2>Вход</h2>
<input placeholder="Имя пользователя" value={username}
onChange={e => setUsername(e.target.value)} required />
<button type="submit">Войти</button>
</form>
);
}
export default LoginPage;

