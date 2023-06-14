import React from 'react';
import './style.scss';
import Button from "../../components/UI/Button/Button";
import Skill from "./Skill/Skill";
import image from '../../img/my-pic.jpg';
import {skills} from "../../helpers/skillsList";

const About = () => {

    return (
        <main className="main">
            <aside>
                <div className={'aside__title'}>
                    <span>About</span>
                </div>
            </aside>
            <section className={'about'}>
                <header>
                    <h6 className={'title1'}>WHO I AM</h6>
                    <h2 className={'title2'}>About</h2>
                </header>
                <div className="about__content content">
                    <div className={'content__avatar'}>
                        <img src={image} alt="person"/>
                    </div>
                    <div className={'content__info'}>
                        <h3>I'm Nursain Temirtas</h3>
                        <p>A highly-engaged Product Developer with a background in information
                            technology, the arts, and industrial design. Forward-thinking and not afraid to
                            combine traditional and modern aesthetics to create functional yet appealing
                            products.</p>
                        <h4 className='divider'>Skills</h4>
                        <div className={'skills'}>
                            {skills.map(t => <Skill img={t.img} title={t.title}/>
                            )}
                        </div>
                        <br/>
                        <Button variant={'primary'}>Download CV</Button>
                    </div>
                </div>
            </section>
        </main>
    );
};


export default About;
