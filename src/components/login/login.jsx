import {React, useEffect} from 'react';
import styles from './login.module.css'
import Footer from '../footer/footer';
import Header from '../header/header';
import { useNavigate } from 'react-router-dom';

const Login = ({authService}) => {
    const navigator = useNavigate();
    const goToMaker = (userId) => {
        navigator(
            {pathname: '/maker'},
            {state: { id: userId }}
        )
    }
    const onLogin = (event) => {
        authService.login(event.currentTarget.textContent)
        .then(data => goToMaker(data.user.uid));
    }

    useEffect(()=>{
        authService.onAuthChange(user => {
            user && goToMaker(user.uid);
        });
    });
    
    return (
        <div className={styles.login}>
            <Header></Header>
            <section>
                <h1 className={styles.title}>Login</h1>
                <ul className={styles.lists}>
                    <li className={styles.list}>
                        <button className={styles.button} onClick={onLogin}>Google</button>
                    </li>
                    <li className={styles.list}>
                        <button className={styles.button} onClick={onLogin}>Github</button>
                    </li>
                </ul>
            </section>
            <Footer></Footer>
           </div>
       )
    };

export default Login;