import React from "react";
import ReactDOM from "react-dom";
import ImageTile from "../tile/imageTile";
import Main from '../../images/main.jpg';
import Single from '../../images/single.jpg';
import Honeymoon from '../../images/honeymoon.jpg';
import Group from '../../images/group.jpg'; 
import Logo from '../../images/logo.png';

export default class HomePage extends React.Component {

  constructor() {

    super();
  }
 
  gotoTours() {
    document.getElementById("root").scrollTop = (window.innerHeight - 70);
  }

  render() {

      return <div className="home_div">
        <div className="imageConatiner">

          <div className="bannerText">
            <span className="discover"> discover the beauty</span>
            <span className="of"> of </span>
            <span className="bali"> bali </span>
            <div className="bookTourBtn">
              <button type="button" class="btn btn-secondary btn-lg" onClick={this.gotoTours.bind(this)}>Book a Tour</button>
            </div>
          </div>
          <img src={Main} width="100%" height="100%" />

        </div>

        <div className="pakagesContainer">
          <div className="ourtours">
            <span className="heading">our tours</span>
            <span className="tiles">
              <ImageTile src={Single} info="individual" />
              <ImageTile src={Honeymoon} info="honeymoon" />
              <ImageTile src={Group} info="group" />
            </span>
          </div>
          <div className="attractions">
            <span className="heading">attractions in bali</span>
            <span className="tiles">
              <ImageTile src={Single} info="individual" />
              <ImageTile src={Honeymoon} info="honeymoon" />
              <ImageTile src={Group} info="group" />
            </span>
          </div>
        </div>
      </div>
  }
}
