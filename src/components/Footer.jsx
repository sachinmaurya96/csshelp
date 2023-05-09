import React from 'react'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <>
     <Wrapper>
      <div className="footer">
        created by <a href="https://github.com/sachinmaurya96" target='_blank' rel="noreferrer">Sachin Maurya <FaGithub/></a>
      </div>
      </Wrapper> 
    </>
  )
}

const Wrapper = styled.footer`
position: fixed;
bottom: 0;
width: 100%;
background: black;
.footer{
  text-align: center
}

`
export default Footer
