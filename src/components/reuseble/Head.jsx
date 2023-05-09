import React from 'react'
import { FaBookmark} from 'react-icons/fa';

function Head(props) {
  return (
    <>
     <div className="top text-center mt-5">
        <h2 style={{color:"black"}}>{props.title}</h2>
        <p>If you want to use any component then simply click on component and code will be automatically  copy in you clipbord. </p>
        <p>Press <span className='text-danger fs-5'><FaBookmark/> ctrl + d</span> for bookmark this page.</p>
        <div className="buttons mt-5 mb-3">
          <a href='https://www.linkedin.com/in/sachin-maurya-826111267/' className='btn btn-outline-primary mx-3'  target='_blank' rel="noreferrer"> Linkedin</a>
          <a href='https://github.com/sachinmaurya96' className='btn btn-outline-dark mx-3' target='_blank' rel="noreferrer"> Github</a>
        </div>
      </div> 
    </>
  )
}

export default Head
