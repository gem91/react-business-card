import { React, useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, onUserStateChange } from '../../service/firebase';
import styles from './login.module.css'
import Footer from '../footer';
// import { AuthContextProvider } from '../../context/AuthContext';

const Login = ({user, setUser}) => {
    
    const navigator = useNavigate();
    const goToMaker = (userId) => {
        navigator(
            {pathname: '/maker'},
            // {state: { id: userId }}
        )
    }

    useEffect(()=>{
        onUserStateChange(user => {
            user && goToMaker(user.uid);
            setUser(user)
        });
    });

    const handleLogin = () => {
        login().then( user => {
            setUser(user)
        })
    }
    
    return (
        <div className={styles.popup}>
            <header className={styles.header}>Business Card Maker</header>
            <section>
                <h1 className={styles.title}>Login</h1>
                <div className={styles.btnbox}>
                    <button className={styles.btnLogin} onClick={handleLogin}>Google</button>
                </div>
            </section>
            <Footer></Footer>
           </div>
       )
    };

export default Login;