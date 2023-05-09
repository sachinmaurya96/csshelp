import React from 'react'
import styled from 'styled-components'
import { shad } from '../reuseble/shad'
import Head from '../reuseble/Head'

function Shadow() {
  const copy = async (id) =>{
    let code = shad.filter((elem)=>{
      return elem.id===id
    })
    try {
      await navigator.clipboard.writeText(code[0].code);
      alert('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  return (
    <>
     <Wrapper>
      <div className="container mb-5">
        <Head title="Beautifull shadow effects"/>
          <div className="grid">
              {
                shad.map((elem)=>{
                  return <div key={elem.id} id={elem.id} className={`item ${elem.class}`} onClick={(e)=>copy(elem.id)}>example{elem.id}</div>
                })
              }
          </div>
      </div>
     </Wrapper>
    </>
  )
}

const Wrapper = styled.section`

  .grid{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 70px;
    padding-top: 30px;

    .item{
    cursor: pointer;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  ${
    shad.map((elem)=>{
      return elem.style;
    })
}
  @media (max-width: 768px){
    .grid{
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 426px){
    .grid{
      grid-template-columns: repeat(1, 1fr);
    }
  }
    
`
export default Shadow
