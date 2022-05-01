import React from 'react';
import styles from './img_input.module.css'

const ImgInput = ({onClick}) => {
    return (
        <button className={styles.imgButton} onClick={onClick}>image</button>
    );
};

export default ImgInput;