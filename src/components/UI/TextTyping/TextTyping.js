import React from 'react';
import styled from "styled-components";


const Wrapper = styled.div`
  --fz: ${props => props.size};
  --length: ${props =>props.itemLength};
  --lh: calc(var(--fz) * 1.4);
  --slide: calc(var(--lh) * var(--length)*-1);
  --duration: calc(3s * var(--length));
  display: flex;
  
  font-size: var(--fz);
  font-weight: 700;

  line-height: var(--lh);
  height: var(--lh);
  overflow: hidden;
  

  .dynamic-txts {
    line-height: var(--lh);
    height: var(--lh);
    overflow: hidden;
    
    li {
      font-weight: 900;
      list-style: none;
      font-size: var(--fz);
      top: 0;
      position: relative;
      animation: slide var(--duration) steps(var(--length)) infinite;

      &:after {
        content: "";
        position: absolute;
        left: 0;
        height: 100%;
        width: 100%;
        border-left: 2px solid var(--header-text);
        animation: typing 3s steps(19) infinite;
        background: var(--header-bg);
      }

      @keyframes typing {
        40%,
        60% {
          left: calc(100%)
        }
        100% {
          left: 0;
        }
      }
    }
  }

  @keyframes slide {
    100% {
      top: var(--slide);
    }
  }


`


const TextTyping = ({fontSize, items}) => {
    let itemsLength = items.length
    return (
        <Wrapper size={`${fontSize}px`} itemLength={itemsLength} >

            <ul className="dynamic-txts">
                {
                    items.map((t,index) => {
                        return <li key={index}><span>{t}</span></li>
                        }
                    )
                }
            </ul>
        </Wrapper>
    );
};

export default TextTyping;
