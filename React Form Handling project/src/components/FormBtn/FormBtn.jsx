import React from 'react';
import styles from './FormBtn.module.css';


const FormBtn = ({text, icon, isWidth, isSubmit, ...rest}) => {
    // clickHandler = () => {
    //     console.log('clicked');
    // }
    return (
        <div className={isWidth ? styles.formBtn2 : (isSubmit ? styles.formBtn3 : styles.formBtn)}>
            <button {...rest}>
                {icon}
                {text}
            </button>
        </div>
    );
}

export default FormBtn;
