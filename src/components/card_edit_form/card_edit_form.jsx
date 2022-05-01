import React from 'react';
import styles from './card_edit_form.module.css'
import Button from '../button/button';
import ImgInput from '../img_input/img_input';

const CardEditForm = ({card}) => {
    const {name, company, theme, title, email, mobile, fileName, fileURL,message} = card;

    const onSubmit = () => {
        console.log('test');
    }
    const onInputImg = () => {
        console.log('img');
    }
    return (
        <form className={styles.form}>
            <div className={styles.formFrame}>
                <input className={styles.input} type="text" name="name" value={name} />
                <input className={styles.input} type="text" name="company" value={company} />
                <select className={styles.select} name={theme} value={theme}>
                    <option value="light">light</option>
                    <option value="dark">dark</option>
                    <option value="colorful">colorful</option>
                </select>
                <input className={styles.input} type="text" name="title" value={title} />
                <input className={styles.input} type="text" name="email" value={email} />
                <input className={styles.input} type="text" name="mobile" value={mobile} />
                <textarea className={styles.textarea} name="message" value={message}></textarea>
                <div className={styles.fileInput}>
                    <ImgInput className={styles.inputImg} onClick={onInputImg} />
                    <Button className={styles.button} name='Delete' onClick={onSubmit}></Button>
                </div>
            </div>
        </form>
    )
};

export default CardEditForm;