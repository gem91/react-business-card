import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout, onUserStateChange } from '../../service/firebase';
import { onAuthStateChanged } from 'firebase/auth';

import styles from './header.module.css'
import Button from '../button';

  
const Header = (user, setUser) => {

  const navigator = useNavigate();
    const hadnleLogout = () => {
        logout().then( user => {
          onUserStateChange(user => {
            if(!user){
              navigator({pathname: '/'})
            }
          });
        })
       
    }
 
      return (
          <header className={styles.header}>
            <h1 className={styles.title}>Business Card Maker</h1>
            {user && <Button name={'logout'} onClick={hadnleLogout} />}
          </header>
      )
    };

export default Header;