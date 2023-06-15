import React from 'react';
import './style.css'
import TextTyping from "../UI/TextTyping/TextTyping";
import Button from "../UI/Button/Button";

const Header = () => {
    let items = ['web-deveopler', 'front-end developer', 'software-engineer']
    return (
        <header className="header">
            <div className="header__wrapper">
                <h6 className="header__text ellipse1">HELLO, THERE</h6>
                <h1 className="header__title ellipse2">i'm Nursain Temirtas</h1>
                <h6 className="header__text skills">
                    <TextTyping fontSize={15} items={items}/></h6>
               <Button variant={'primary'} download={true}>Download CV</Button>
            </div>
        </header>
    );
};

export default Header;
