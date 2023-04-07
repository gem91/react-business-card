import {React, useState} from 'react';
import styles from './maker.module.css'
import Header from '../header';
import Footer from '../footer';
import Edit from '../edit';
import Preview from '../preview';


const Maker = ({user, setUser,FileInput}) => {
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
            fileURL: '/assets/images/jay.jpg',
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
            fileURL: '/assets/images/KangJun.jpg',
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
            fileURL: '/assets/images/MinYoung.jpg',
            message: 'happy'
        },
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
          <Header user={user} setUser={setUser}></Header>
          <div className={styles.container}>
            <Edit FileInput={FileInput} cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard}></Edit>
            <Preview cards={cards}></Preview>
          </div>
          <Footer></Footer>
      </section>
    )
};

export default Maker;