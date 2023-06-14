import React, {useEffect, useRef} from 'react';
import './style.css';
import sun from "../../../img/icons/sun.svg";
import moon from "../../../img/icons/moon.svg";
import {useLocalStorage} from "../../../utils/localstorage";
import {detectDarkMode} from "../../../utils/detectDarkMode";

const DarkModeButton = React.memo(() => {
        const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

        const buttonRef = useRef(null)
        useEffect(() => {
            if (darkMode === 'dark') {
                document.body.classList.add('dark')
                buttonRef.current.classList.add('dark-mode-btn--active')
            } else {
                document.body.classList.remove('dark')
                buttonRef.current.classList.remove('dark-mode-btn--active')
            }
        }, [darkMode])

        function clickHandler() {
            setDarkMode(prevState => prevState === 'light' ? 'dark' : 'light')
        }

        return (
            <button className="dark-mode-btn" ref={buttonRef} onClick={clickHandler}>
                <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
                <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
            </button>
        );
    }
)

export default DarkModeButton;
