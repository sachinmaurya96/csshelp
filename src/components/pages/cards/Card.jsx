import React from 'react'
import styled from 'styled-components'
import Head from '../../reuseble/Head'
import { NavLink ,Outlet} from 'react-router-dom'

function Card() {
  return (
    <>
      <Wrapper>
        <div className="cardnav">
          <div className="link">
            <NavLink to="profile">Profile card</NavLink>
          </div>
          <div className="link">
            <NavLink to="product">Product card</NavLink>
          </div>
          <div className="link">
            <NavLink to="simple">Simple card</NavLink>
          </div>
          <div className="link">
            <NavLink to="multiple">Multiple card</NavLink>
          </div>
        </div>  
        <Head title="Beautifull card examples"/>
        <div className="container pt-3 pb-3">
          <div className="content">
           <Outlet/>
          </div>
        </div>
      </Wrapper>  
    </>
  )
}

const Wrapper = styled.section`

.cardnav{
  display: flex;
  gap 10px;
  padding: 10px 10px;
  overflow-x: auto;
  justify-content: center;
 

  a{
    box-sizing: border-box;
    border: 2px solid rgba(0,0,0,0.3);
    padding: 3px 8px;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    
    
  }
}
.link{
  min-width: 125px;
}
@media (max-width: 768px){
  .cardnav{
    justify-content: start;
  }
}

`
export default Card
