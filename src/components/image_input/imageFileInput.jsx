import React from 'react';
import styles from './imageFileInput.module.css'

const ImageFileInput = ({ FileInput, name, onFileChange}) => {
    return (
        <button className={styles.imgButton} >image</button>
    );
};

export default ImageFileInput;