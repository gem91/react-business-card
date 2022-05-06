import {React, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './maker.module.css'
import Header from '../header/header';
import Footer from '../footer/footer';
import Edit from '../edit/edit';
import Preview from '../preview/preview';


const Maker = ({FileInput, authService}) => {
    const [cards, setCards] = useState({
        '1' : {
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
        '2' : {
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
        '3' : {
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
    });

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

  
    const createOrUpdateCard = (card) => {
        setCards( cards => {
            const updated = {...cards};
            updated[card.id] = card; // 업데이트 된 id값 cards 배열에 'card'로 덮는것.
            return updated
        });
       
    };

    const deleteCard = card => {
        setCards( cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
    };
  
    return(
      <section className={styles.maker}>
          <Header onLogout={onLogout}></Header>
          <div className={styles.container}>
          <Edit FileInput={FileInput} cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard}></Edit>
          <Preview cards={cards}></Preview>
          </div>
          <Footer></Footer>
      </section>
    )
};

export default Maker;