import {React, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './maker.module.css'
import Header from '../header/header';
import Footer from '../footer/footer';
import Edit from '../edit/edit';
import Preview from '../preview/preview';


const Maker = ({authService}) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'Minjeong',
            company: 'Ipartners',
            theme: 'colorful',
            title: 'Frontend Developer',
            email: 'mg@ipartners.co.kr',
            mobile: '000-000-0000',
            fileName: 'minjeong',
            fileURL: null,
            message: 'hello'
        },
        {
            id: '2',
            name: 'Jay',
            company: 'Ipartners',
            theme: 'light',
            title: 'Backend Developer',
            email: 'Jay@ipartners.co.kr',
            mobile: '000-222-0000',
            fileName: 'Jay',
            fileURL: 'Jay.png',
            message: 'good'
        },
        {
            id: '3',
            name: 'Park',
            company: 'Ipartners',
            theme: 'dark',
            title: 'UX Designer',
            email: 'Park@ipartners.co.kr',
            mobile: '000-111-0000',
            fileName: 'Park',
            fileURL: null,
            message: 'happy'
        },
    ]);
    const navigator = useNavigate();

    const onLogout = () => {
        authService.logout()
    }
    useEffect(()=>{
        authService.onAuthChange(user => {
            if(!user){
                navigator('/')
            }
        });
    });
    return(
      <section className={styles.maker}>
          <Header onLogout={onLogout}></Header>
          <div className={styles.container}>
          <Edit cards={cards}></Edit>
          <Preview cards={cards}></Preview>
          </div>
          <Footer></Footer>
      </section>
    )
};

export default Maker;