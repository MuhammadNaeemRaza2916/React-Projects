import React from 'react';
import styles from './HeroSection2.module.css'
import FormBtn from '../FormBtn/FormBtn';
import { MdOutlineMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { useState } from 'react';


const HeroSection2 = () => {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [msg, setMsg] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        setName(event.target[0].value)
        setEmail(event.target[1].value)
        setMsg(event.target[2].value)
        alert("Form has been submitted successfully")
    }
    const clickHandler = () => {
        alert("Clicked")
    }
    return (
        <>
            <div className={styles.heroSection2}>
                <div className={styles.form}>

                    <div className={styles.formBtns}>
                        <FormBtn onClick={clickHandler} text="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize='24px' />} />
                        <FormBtn onClick={clickHandler} text="VIA CALL" icon={<IoCallOutline fontSize='24px' />} width='13.75rem' />
                    </div>

                    <FormBtn onClick={clickHandler} text="VIA EMAIL FORM" icon={<FiMail fontSize='24px' />} isWidth={true} />

                    <form onSubmit={onSubmit}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' />

                        <label htmlFor="email">E-Mail</label>
                        <input type="email" id='email' />

                        <label htmlFor="textArea">Text</label>
                        <textarea name="textArea" id="textArea" cols="30" rows="6"></textarea>

                        <FormBtn text="SUBMIT" isSubmit={true} />
                    </form>

                </div>

                <div className="formImage">
                    <img src="../../../public/images/Service 24_7-pana 1.png" alt="" />
                </div>

            </div>
            <div className="output">
                {name}
                <br />
                {email}
                <br />
                {msg}
            </div>
        </>
    );
}

export default HeroSection2;
