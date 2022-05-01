import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './edit.module.css'

const Edit = ({cards, addCard}) => {
    return(
       <div className={styles.edit}>
        <h2 className={styles.title}>Card Maker</h2>
        { cards.map( card => 
            <CardEditForm key={card.id} card={card} />)
        }
        <CardAddForm onAdd={addCard} />
       </div>
    )
};

export default Edit;