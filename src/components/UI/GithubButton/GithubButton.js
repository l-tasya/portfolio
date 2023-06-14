import React from 'react';
import Button from "../Button/Button";
import GhSvh from "./GhSvh";

const GithubButton = ({link}) => {
    return (
        <Button link={link} variant={'outlined'}>
            <GhSvh fill={'black'}/>
            GitHub repo
        </Button>
    );
};

export default GithubButton;
