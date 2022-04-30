import React from 'react';
import Card from '../card/card';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './edit.module.css'

const Edit = ({cards}) => {
    return(
       <div className={styles.edit}>
        <h2 className={styles.title}>Card Maker</h2>
        { cards.map( card => 
            <CardEditForm card={card} />)
        }
       </div>
    )
};

export default Edit;