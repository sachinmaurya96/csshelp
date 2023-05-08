import React from 'react'
import styled from 'styled-components'

function Shadow() {
  return (
    <>
     <Wrapper>
      <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 pt-5 pb-5 mt-5">
                Example
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 pt-5 pb-5 mt-5">
                Example
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 pt-5 pb-5 mt-5">
                Example
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 pt-5 pb-5 mt-5">
                Example
            </div>
          </div>
      </div>
     </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
.row{
  grid-gap: 30px;
}
.row div{
  height: 200px;
  display: flex;
  align-items:center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
  
    
`
export default Shadow
