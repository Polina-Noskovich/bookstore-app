import React, { useState } from 'react';
import styles from './AuthModal.module.css';

export default function AuthModal({ isOpen, onClose, onLogin }) {
  const [tab, setTab] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = e => {
    e.preventDefault();
    onLogin({ username, password, remember });
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>
        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${tab === 'login' ? styles.active : ''}`}
            onClick={() => setTab('login')}
          >
            Log in
          </div>
          <div
            className={`${styles.tab} ${tab === 'signup' ? styles.active : ''}`}
            onClick={() => setTab('signup')}
          >
            Sign up
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username or email"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className={styles.input}
          />

          <label className={styles.remember}>
            <input
              type="checkbox"
              checked={remember}
              onChange={e => setRemember(e.target.checked)}
            />
            Remember me
          </label>

          <button type="submit" className={styles.submit}>
            Continue
          </button>

          <div className={styles.or}>or</div>

          <button type="button" className={styles.socialBtn}>
            Continue with Google
            <span className={styles.googleIcon}>G</span>
          </button>
          <button type="button" className={styles.socialBtn}>
            Continue with Facebook
            <span className={styles.facebookIcon}>f</span>
          </button>

          {tab === 'login' && (
            <div className={styles.forgot}>
              Forget your password? <a href="#">Click here</a>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}


