import React from 'react';
import Card from '../card';
import styles from './preview.module.css'

const Preview = ({cards}) => (
        <div className={styles.preview}>
            <h2 className={styles.title}>Card Preview</h2>
            <ul className={styles.cards}>
                { Object.keys(cards).map( key => 
                    <Card key={key} card={cards[key]} />)
                }
            </ul>
        </div>
    );

export default Preview;