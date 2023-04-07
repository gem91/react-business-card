import {React, useRef} from 'react';
import styles from './card_edit_form.module.css'
import Button from '../button';
import ImageFileInput from '../image_input/imageFileInput';

const CardEditForm = ({FileInput, card, updateCard, deleteCard}) => {
    const {name, company, theme, title, email, mobile, fileName, fileURL,message} = card;
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();
    const messageRef = useRef();
    
    const onSubmit = () => {
        deleteCard(card)
    }

    const onChange = (e) => {
        if(e.currentTarget == null ) {
            return null;
        }
        e.preventDefault();
        updateCard( {
            ...card, 
            [e.currentTarget.name] :  e.currentTarget.value
        });
    }
    return (
        <form className={styles.form}>
            <div className={styles.formFrame}>
                <input ref={nameRef} className={styles.input} type="text" name="name" value={name} onChange={onChange} />
                <input ref={companyRef} className={styles.input} type="text" name="company" value={company} onChange={onChange} />
                <select ref={themeRef} className={styles.select} name="theme" value={theme} onChange={onChange}>
                    <option value="light">light</option>
                    <option value="dark">dark</option>
                    <option value="colorful">colorful</option>
                </select>
                <input ref={titleRef} className={styles.input} type="text" name="title" value={title} onChange={onChange} />
                <input ref={emailRef} className={styles.input} type="text" name="email" value={email} onChange={onChange} />
                <input ref={mobileRef} className={styles.input} type="text" name="mobile" value={mobile} onChange={onChange} />
                <textarea ref={messageRef} className={styles.textarea} name="message" value={message} onChange={onChange}></textarea>
                <div className={styles.fileInput}>
                    <ImageFileInput />
                    <Button className={styles.button} name='delete' onClick={onSubmit}></Button>
                </div>
            </div>
        </form>
    )
};

export default CardEditForm;