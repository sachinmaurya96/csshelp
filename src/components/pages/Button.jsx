import React from 'react'
import styled from 'styled-components'
import { button } from '../reuseble/btns';
import { FaGithub , FaLinkedin,FaBookmark} from 'react-icons/fa';

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
     <div className="container">
      <div className="top text-center mt-5">
        <h2>Beautifull CSS button examples</h2>
        <p>If you want to use any button then click on the button for copy button's code.</p>
        <p>Press <span className='text-danger fs-5'><FaBookmark/> ctrl + d</span> for bookmark this page.</p>
        <div className="buttons mt-5 mb-3">
          <a href='/' className='btn btn-outline-dark mx-3'><FaLinkedin className='icon'/> Linkedin</a>
          <a href='/' className='btn btn-outline-dark mx-3'> <FaGithub className='icon'/> Github</a>
        </div>
      </div>
        <div className="row">
          {
            button.map((elem)=>{
                return(
                    <div className="col-lg-3 col-md-4 col-sm-12 p-2 text-center mt-5" id={elem.id} key={elem.id}>
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
  h2{
    color: black;
    font-weight: 600;
  }
  .icon{
    color:#fff;
  }
`
export default Button



