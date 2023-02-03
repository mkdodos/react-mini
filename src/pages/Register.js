import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

export default function Register() {
  return (
    <div className="auth">
      <h1>註冊表單</h1>
      <form>
        <input placeholder="使用者帳號" />
        <input type="email" placeholder="Email" />
        <input placeholder="密碼" />
        <button>註冊</button>
        <p>this is an error</p>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}
