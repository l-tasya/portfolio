import React from 'react';
import './styles.scss'


const Button = ({variant = 'primary', children, link}) => {

    return (
        <a
            className={variant === 'primary' ? 'btn primary' : 'btn outlined '}
            target={"_blank"}
            href={`${link}`}
        >
            {children}
        </a>
    );
};

export default Button;
