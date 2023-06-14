import React from 'react';
import ProjectCard from "../../components/UI/ProjectCard/ProjectCard";
import {projects} from "../../helpers/projectList";

const Projects = () => {
    return (
        <main className="main">
            <aside>
                <div className={'aside__title'}>
                    <span>Projects</span>
                </div>
            </aside>
            <section>
                <header>
                    <h6 className={'title1'}>Latest work</h6>
                    <h2 className={'title2'}>My Projects</h2>
                </header>
                <ul className="projects">
                    {
                        projects.map(t => <ProjectCard id={t.id} key={t.id} img={t.img.small} title={t.title}
                                                       subTitle={t.description}/>)
                    }
                </ul>
            </section>
        </main>
    );
};

export default Projects;
