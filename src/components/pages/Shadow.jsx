import React from 'react'
import styled from 'styled-components'
import { shad } from '../reuseble/shad'

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
      <div className="container">
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

.row div{
  height: 200px;
  display: flex;
  align-items:center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
  .grid{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 50px;
    padding-top: 30px;

    .item{
    cursor: pointer;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    }
  }

  ${
    shad.map((elem)=>{
      return elem.style
    })
  }
  @media (max-width: 768px){
    .grid{
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 321px){
    .grid{
      grid-template-columns: repeat(1, 1fr);
    }
  }
    
`
export default Shadow
