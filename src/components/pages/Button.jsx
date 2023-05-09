import React from 'react'
import styled from 'styled-components'
import { button } from '../reuseble/btns';
import Head from '../reuseble/Head';

function Button() {

  const copyBtn = async (id)=> {
    let code = button.filter((elem)=>{
      return elem.id===id
    });

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
          <Head title="Beautifull CSS button examples"/>
        <div className="row">
          {
            button.map((elem)=>{
                return(
                    <div className="col-lg-3 col-md-4 col-sm-12 p-2 text-center mt-5 btn-container" id={elem.id} key={elem.id}>
                    <button className={elem.class} onClick={(e)=>copyBtn(elem.id)}>{elem.name}</button>
                </div>
                )
            })
          }
        </div>
      </div>
     </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
${button.map((elem)=>{
    return elem.style
})}
  .icon{
    color:#fff;
  }
  .btn-container{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export default Button



