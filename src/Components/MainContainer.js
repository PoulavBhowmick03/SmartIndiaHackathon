import React from "react";
import "./MainContainer.css";
import logo from "../img/logo.png";

function MainContainer() {
  return (
    <div className="maincontainer">
      <div className="left">
      <div className="cards">
            <div className="details">
                <div className="det-left">
                  <img className="logo" src={logo} alt="logo" width={70} />
                </div>
                <div className="det-cen">
                  Academic Bank of Credits <br></br>
                  Mon 28 Aug 2023 <br></br> 12:37:59 IST
                  </div>
                <div className="det-right">
                  <button type="button" className="btn3">Verify</button> <br></br>
                  <button type="button" className="btn3">View</button>
                </div>
             </div>
          </div>
          <div className="cards">
            <div className="details">
                <div className="det-left">
                  <img className="logo" src={logo} alt="logo" width={70} />
                </div>
                <div className="det-cen">
                  Academic Bank of Credits <br></br>
                  Mon 28 Aug 2023 <br></br> 12:37:59 IST
                  </div>
                <div className="det-right">
                  <button type="button" className="btn3">Verify</button> <br></br>
                  <button type="button" className="btn3">View</button>
                </div>
             </div>
          </div>
          <div className="cards">
            <div className="details">
                <div className="det-left">
                  <img className="logo" src={logo} alt="logo" width={70} />
                </div>
                <div className="det-cen">
                  Academic Bank of Credits <br></br>
                  Mon 28 Aug 2023 <br></br> 12:37:59 IST
                  </div>
                <div className="det-right">
                  <button type="button" className="btn3">Verify</button> <br></br>
                  <button type="button" className="btn3">View</button>
                </div>
             </div>
          </div>
          <div className="cards">
            <div className="details">
                <div className="det-left">
                  <img className="logo" src={logo} alt="logo" width={70} />
                </div>
                <div className="det-cen">
                  Academic Bank of Credits <br></br>
                  Mon 28 Aug 2023 <br></br> 12:37:59 IST
                  </div>
                <div className="det-right">
                  <button type="button" className="btn3">Verify</button> <br></br>
                  <button type="button" className="btn3">View</button>
                </div>
             </div>
          </div>
      </div>
    </div>
  );
}

export default MainContainer;
