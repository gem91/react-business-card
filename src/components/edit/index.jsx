import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './edit.module.css'

const Edit = ({FileInput, cards, addCard, updateCard, deleteCard}) => {
    console.log(cards);
    return(
       <div className={styles.edit}>
        <h2 className={styles.title}>Card Maker</h2>
        { Object.keys(cards).map( key => 
            <CardEditForm key={key} FileInput={FileInput} addCard={addCard} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard} />)
        }
        <CardAddForm FileInput={FileInput} />
       </div>
    )
};

export default Edit;