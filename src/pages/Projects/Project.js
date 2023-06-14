import React from 'react';
import {projects} from "../../helpers/projectList";
import GithubButton from "../../components/UI/GithubButton/GithubButton";
import {useParams} from "react-router-dom";
import muiIMG from "../../img/icons/skills/material-ui-svgrepo-com.svg";
import styled from "styled-components";

const Image = styled.div`
  img {
    border: 1px solid #ddd;
    padding: 10px;
    border-bottom: 4px solid #ddd;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 20px;
  article{
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    ul{
      li{
        position: relative;
        padding-left: 10px;
        font-size: 20px;
        display: flex;
        color: var(--text-color);
        align-items: center;
        &:before{
          position: absolute;
          content: '';
          width: 5px;
          height: 5px;
          background: var(--text-color);
          border-radius: 50%;
          left: 0;
        }
      }
    }
  }
  @media(max-width: 955px){
    flex-direction: column;
    justify-content: center;
  }
`
const Project = () => {
    const {projectID} = useParams()
    let project = projects.find(t => t.id === Number(projectID));
    console.log(project.ghLink)
    return (
        <main className="main">
            <aside>
                <img src={muiIMG} alt=""/>
            </aside>
            <section className={'about'}>
                <header>
                    <h6 className={'title1'}>Project</h6>
                    <h2 className={'title2'}>{project.title}</h2>
                </header>
                <Wrapper>
                    <Image>
                        <img src={project.img.big} alt="project"/>
                    </Image>
                    <article>
                        <GithubButton link={project.ghLink}/>
                        <ul>
                        {
                            project.skills.map(t=><li>{t}</li>)
                        }
                        </ul>
                    </article>
                </Wrapper>
            </section>


        </main>
    );
};

export default Project;
