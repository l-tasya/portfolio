import React from 'react';
import Header from "../components/Header/Header";
import {styled} from "styled-components";
import userIMG from './../img/user.png';


const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
`
const Avatar = styled.div`
  background: var(--accent1);
  order: -1;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 1200px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;

  }
  @media (min-width: 992px){
    flex: 0 0 25%;
    max-width: 25%;
  }
  

`
const Home = () => {
    return (
        <Container >
            <Header/>
            <Avatar>
                <img src={userIMG} alt='user'/>
            </Avatar>
        </Container>
    );
};

export default Home;
