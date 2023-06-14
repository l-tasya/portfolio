import React from 'react';
import styled from "styled-components";
import Button from "../components/UI/Button/Button";

const Content = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 30px;
border-bottom: 4px solid #d4d4d4;
  min-width: 250px;
  h4 {
    font-size: 16px;
    margin-bottom: 20px;
  }
  form{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    
    input{
      flex-grow: 1;

    }
    textarea{
      width: 100%;
      min-width: 100%;
      min-height: 100px;

  }
  .form_control{
    font-size: 14px;
    border: 1px solid #d4d4d4;
    background: #f7fafc;
    color: var(--black);
    padding: 6px 12px;
    height: 50px;

  }
  
`
const Contacts = () => {
    return (
        <>
            <main className="main">
                <aside>
                    <div className={'aside__title'}>
                        <span>Contact Me</span>
                    </div>
                </aside>
                <section>
                    <header>
                        <h6 className={'title1'}>Get in touch</h6>
                        <h2 className={'title2'}>Contact me</h2>
                    </header>
                    <Content>
                        <h4>SAY SOMETHING</h4>
                        <form action="">
                            <input type="text" placeholder={'Name'} className={'form_control'}/><input type="text" placeholder={'Email'} className={'form_control'}/>
                            <textarea name="" id="" cols="30" rows="10" placeholder={'Your Comment'} className={'form_control'}/>
                            <Button>SEND MESSAGE</Button>
                        </form>
                    </Content>
                </section>
            </main>
        </>
    );
};

export default Contacts;
