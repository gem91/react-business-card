import {React, useRef} from 'react';
import { addNewCard } from '../../service/firebase';
import styles from './card_add_form.module.css'

import Button from '../button';
import ImageFileInput from '../image_input/imageFileInput';

const CardAddForm = ({FileInput}) => {
    const formRef = useRef(); //초기화
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();
    const messageRef = useRef();


    const onSubmit = (e) => {
        e.preventDefault();
        const card = {
            // id: Date.now(),
            name : nameRef.current.value || '',
            company : companyRef.current.value || '',
            theme : themeRef.current.value,
            title : titleRef.current.value || '',
            email : emailRef.current.value || '',
            mobile : mobileRef.current.value || '',
            message : messageRef.current.value || '',
            fileName: '',
            fileURL: ''
        }
        formRef.current.reset();
        addNewCard(card)
    }

    return (
        <form ref={formRef} className={styles.form}>
            <div className={styles.formFrame}>
                <input ref={nameRef} className={styles.input} type="text" name="name" placeholder='name' />
                <input ref={companyRef} className={styles.input} type="text" name="company" placeholder='company' />
                <select ref={themeRef} className={styles.select} name="theme" placeholder='theme' >
                    <option placeholder='light'>light</option>
                    <option placeholder='dark'>dark</option>
                    <option placeholder='colorful'>colorful</option>
                </select>
                <input ref={titleRef} className={styles.input} type="text" name="title" placeholder='title' />
                <input ref={emailRef} className={styles.input} type="text" name="email" placeholder='email' />
                <input ref={mobileRef} className={styles.input} type="text" name="mobile" placeholder='mobile' />
                <textarea ref={messageRef} className={styles.textarea} name="message" placeholder='message'></textarea>
                <div className={styles.fileInput}>
                    <ImageFileInput />
                    <Button name='add' onClick={onSubmit}></Button>
                </div>
            </div>
        </form>
    )
};

export default CardAddForm;