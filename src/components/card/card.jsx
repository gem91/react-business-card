import React from 'react';
import styles from './card.module.css'

const Card = ({card}) => {
    const {name, company, theme, title, email, mobile, fileName, fileURL} = card;
    const DEFAULT_IMAGE = '/images/default_logo.png'
    const url = fileURL || DEFAULT_IMAGE;

    function pickStyles(theme){
        switch(theme){
            case 'light':
            return styles.light;
            case 'dark':
            return styles.dark;
            case 'colorful':
            return styles.colorful;
            default:
                throw new Error(`UnKnown Theme ${theme}`);
            
        }
    }

    return (
        <li className={`${styles.card} ${pickStyles(theme)}`}>
            <img className={styles.picture} src={url} alt="profile" />
            <div className={styles.info}>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.company}>{company}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.email}>{email}</p>
                <p className={styles.mobile}>{mobile}</p>
            </div>
        </li>
    );
};

export default Card;