import React from 'react';
import { Link } from 'react-router-dom';
// import '../style.css';

export default function Login() {
  return (
    <div className="auth">
      <h1>登入表單</h1>
      <form>
        <input placeholder="使用者帳號" />
        <input placeholder="密碼" />
        <button>登入</button>
        <p>this is an error</p>
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}
