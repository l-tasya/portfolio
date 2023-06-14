import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-bottom: 4px solid #ddd;
  transition: transform 250ms;
  background: white;
  img {
    max-width: 100%;
  }

  h5 {
    margin: 0;
    padding: 0 0 2px;
    color: #151515;
    font-weight: 600;
    font-size: 16px;
    display: block;
  }

  span {
    font-size: 14px;
    color: #666;
    font-weight: 400;
  }

  &:hover {
    position: relative;
    transform: translateY(-10px);
  }

  &:active {
    transform: translateY(5px);
  }
`

const ProjectCard = ({title, img, id, subTitle}) => {
    return (
        <li>
            <NavLink to={`/project/${id}`}>
                <Card>
                    <img src={img} alt="ProjectCard img"/>
                    <h5>{title}</h5>
                    <span>{subTitle}</span>
                </Card>
            </NavLink>
        </li>
    );
};

export default ProjectCard;
