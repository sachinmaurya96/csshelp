import { NavLink } from "react-router-dom";
import styled from "styled-components";


function Home() {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="top text-center mt-5">
            <img src="https://media.licdn.com/dms/image/D4D03AQFrBzcI92u3mQ/profile-displayphoto-shrink_800_800/0/1682862528108?e=1689206400&v=beta&t=w9G4i-1sdwcn-lwTcvySZkBgMa01oo2JmwTjXBxDSKs" alt="" />
            <div className="content text-center mt-4 mb-4">
              <h2>Hii! I am Sachin.</h2>
              <p>I am a full stack web developer</p>
              <div className="social">
                <a href="/" className="mx-2"><button className=" btn btn-outline-dark">Github</button></a>
                <a href="/" className="mx-2"><button className="btn btn-outline-primary">Linkedin</button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container mt-3">
            <div class="card mb-5">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://149842035.v2.pressablecdn.com/wp-content/uploads/2010/04/button-preview.jpg" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Beautifull CSS Buttons</h5>
                    <p class="card-text">
                      There are many beautifull css componets examples. If you want use any component then simply click on click on component for copy component's code.
                    </p>
                   <NavLink to="/button" className="btn btn-primary">Get started</NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-5">
              <div class="row g-0">
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Beautifull Shadow Effects</h5>
                    <p class="card-text">
                    There are many beautifull css componets examples. If you want use any component then simply click on click on component for copy component's code.
                    </p>
                   <NavLink to="/shadow" className="btn btn-primary">Get started</NavLink>
                  </div>
                </div>
                <div class="col-md-4">
                  <img src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2019/10/Elegant-Box-Shadows-In-Pure-CSS-Shadow.css.png?fit=933%2C541&ssl=1" class="img-fluid rounded-start" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
.top img{
  width: 150px;
  height: auto;
  border-radius: 50%;
}
h2{
  color: black;
  font-weight: 600;
}
.icon{
  font-size: 20px;
  color: black;
}
.card-title{
  color: black;
  font-weight: 600;

}
.card{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.card img{
  height: 200px;
  width: 100%
}
`;
export default Home;
