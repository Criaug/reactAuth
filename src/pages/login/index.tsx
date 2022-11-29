import React from 'react';
import styles from './login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <label>Username</label>
        <input></input>
        <label>Password</label>
        <input></input>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
