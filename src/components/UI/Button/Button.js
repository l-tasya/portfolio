import React from 'react';
import './styles.scss'
import resume from '../../../helpers/Resume.pdf';

const Button = ({variant = 'primary', children, link, download}) => {

    return (
        <a
            href={download?resume:link}
            target={download?'':'_blank'}
            className={variant === 'primary' ? 'btn primary' : 'btn outlined '}
            download={download?'Resume.pdf':''}
        >
            {children}
        </a>
    );
};

export default Button;
