import React, { useState, useEffect } from 'react';

import geo2zip from 'geo2zip';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useAuth0 } from "../contexts/react-auth0-spa";
import banner from "../static/banner.svg";
import { PrimaryButton, SecondaryButton } from "../shared/ButtonComponents";
import vec from "../static/Vector.svg";
import people from "../static/people.png";
import mun from "../static/money.png";
import food from "../static/food.png";
import flow from "../static/flow.png";
import big from "../static/value.png";
import MediaQuery from 'react-responsive';
import { ButtonToolbar, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';


const header = {
  display: "flex",
  flexWrap: "wrap",
  marginLeft: "5%",
  marginRight: "5%",
}
const header2 = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20%"
}
const root = {
  position: "relative",
  marginTop: "10%",
  // left: "20%",
  // width: "70%"
  marginLeft: "40px",
  marginRight: "40px"
}

const support = {
  color: "#828282",
  fontFamily: "sans-serif"
}

const whyTheseAmountsText = {
  fontFamily: "sans-serif",
  fontStyle: "normal",
  fontWeight: "300",
  fontSize: "18px",
  lineHeight: "21px",
  paddingBottom: "10px",
  textDecoration: "underline",
}

class Q extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }
  }


  render() {
    let line = {
      borderLeft: "3px solid #1136FC",
      height: "100%",
      marginRight: "1%"
    }
    return (
      <div style={{ display: "flex", align: "center", alignItems: "center", background: "#ededed" }}>
        <div style={line} >
          <div style={{ display: "flex", alignItems: "baseline"}}>
            <span style={{ fontSize: "2.75em", marginLeft: "1%", color: "#1136FC", fontStyle: "bold", marginLeft: "5px", marginRight: "5px"}}>Q.  </span>
            <h2 align="left" style={{ whiteSpace: "nowrap" }}>{this.props.children}</h2>
          </div>
        </div>
      </div>
    )
  }
}
class A extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }
  }

  render() {
    let line = {
      borderLeft: "3px solid #919191",
      height: "100%",
      marginRight: "1%"
    }
    return (
      <div style={{ display: "flex", align: "center", alignItems: "center" }}>
        <div style={line} >
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span style={{ fontSize: "2.75em", marginLeft: "1%", color: "#919191", fontStyle: "bold", marginLeft: "5px", marginRight: "5px" }}>A.  </span>
            <h2 align="left" style={{ whiteSpace: "nowrap" }}>{this.props.children}</h2>
          </div>
        </div>
      </div>
    )
  }
}

function FAQ () {



  return (
    <div className="container-fluid" style={{marginTop: "15%"}}>
      <div className="row mx-5"  >
        <div className="col-12" style={{ display: "flex", alignItems: "baseline"}}>
        <Q> Question</Q>
        </div>
        <div className="col-12" style={{ display: "flex", alignItems: "baseline" }}>
          <A> Answer</A>


        </div>
      </div>

    </div>
  );

}
const money = {
  width: "30%",
  height: "auto",
  marginTop: "0%",
}
const peep = {
  width: "40%",
  height: "auto",
  marginTop: "0%",
}

const them = {
  width: "70%",
  height: "auto",
  marginTop: "0%"
}

const lines = {
  display: "flex",
  justifyContent: "center",
  align: "center",
  marginTop: "5%"
}

const headed = {
  display: "flex",
  justifyContent: "center",
  align: "center",
  marginLeft: "40px",
  marginRight: "40px",
  marginTop: "15%"
}
const ro = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "15%"
}

const who = {
  display: "flex",
  justifyContent: "center",
  marginTop: "15%"
}

const cap = {
  fontFamily: "Abril Titling",
  fontStyle: "italic",
  fontWeight: "bold",
  width: "400px",
  fontSize: "30px",
  textAlign: "center",
  marginTop: "10px"
}

function How () {
  return (
    <div>
      <div className="container-fluid" style={who}>
        <div className="row" style={header} >
          <div className="col-xl-5 col-md-4 col-sm-12 mx-4 mt-3">
            <h2 align="left">Step 1</h2>
            <p align="left " >People in need sign up on our platform and we call each and every one of them by phone to verify that they are in need. We add them to the system and prioritize them by how much they've been donated to and how recently they've been donated to.</p>

          </div>
          <div className="col-xl-5 col-md-4 col-sm-12 mx-4 mt-3">
            <h2 align="left">Step 2</h2>
            <p align="left">When you donate, our system selects the highest priority recipient. We securely port your credit card data and the recipient we selected directly into Door Dash using end-to-end encryption. The recipient gets 100% of the funds you donated and can enjoy a meal in the safety of their own home!</p>

          </div>
        </div>
      </div>
      <div >
        <div className="row" align="center" style={headed}>
          <div className="col-xl-10">
            <h1>Here is how we use funds</h1>
            <br />
            <br />
            <img src={big} style={{ width: "30%", height: "auto" }} />
          </div>
        </div>
      </div>
      <MediaQuery minDeviceWidth={700} >
        <div style={lines}>
          <img style={them} src={flow} alt="line" />

        </div>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={699}>
        <div style={ro}>
          <img style={money} src={mun}></img>
          <p style = {cap}>You donate</p>          
          <img style={peep} src={people}></img>
          <p style = {cap}>Our system selects someone in need</p>
          <img style={money} src={food}></img>
          <p style={cap}> They get a DoorDash gift card so they can enjoy a meal at home!</p>
        </div>
      </MediaQuery>

    </div>

  )
}

function How2() {
  return (
    <div style={{background: "#fff"}}>
    <div className="container-fluid" style={{paddingLeft: "10%", paddingRight: "10%", textAlign: "center", marginTop: "10%"}}>
      <h2 style={{marginBottom: "50px", paddingTop: "50px"}}>Helping is easy</h2>
      <div className="row" style={{display: "flex"}}>
        <div className="col-md-4 " style={how2col}>
          <img src={mun} style={money2}></img>
          <a style={cap2}>Choose to donate either 25, 50, 100, or 200 dollars.</a>
        </div>
        <div className="col-md-4 " style={how2col}>
          <img src={people} style={peep2}></img>
          <a style={cap2}>We pair you with someone in need.</a>
          <br></br>
            <OverlayTrigger
              placement={'bottom'}
              overlay={
              <Tooltip>
                100% of your money becomes DoorDash credits for a pre-vetted recipient in our system. We speak to everyone who signs up to ensure donor money goes to the right plcaes.
              </Tooltip>
              }>
              <h1 style={whyTheseAmountsText}>Where does the money go?</h1>

            </OverlayTrigger>
        </div>
        <div className="col-md-4 " style={how2col}>
          <img src={food} style={money2}></img>
          <a style={cap2}>They get a DoorDash gift card so they can enjoy a meal at home!</a>
        </div>
      </div>
    </div>
    <div className="container-fluid" style={who}>
      <div className="row" style={{display: "flex", justifyContent: "center"}} >
        <div className="col-xl-5 col-md-4 col-sm-12 px-50">
          <h2 align="left">Step 1</h2>
          <p align="left " >People in need sign up on our platform and we call each and every one of them by phone to verify that they are in need. We add them to the system and prioritize them by how much they've been donated to and how recently they've been donated to.</p>

        </div>
        <div className="col-xl-5 col-md-4 col-sm-12 px-50">
          <h2 align="left">Step 2</h2>
          <p align="left">When you donate, our system selects the highest priority recipient. We securely port your credit card data and the recipient we selected directly into Door Dash using end-to-end encryption. The recipient gets 100% of the funds you donated and can enjoy a meal in the safety of their own home!</p>

        </div>
      </div>
    </div>
    </div>
  )
}

const how2col = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

}

const cap2 = {
  fontWeight: "bold",
  width: "200px",
  fontSize: "17px",
  textAlign: "center",
  marginTop: "10px"
}
const money2 = {
  width: "30%",
  height: "auto",
  marginTop: "0%",
}
const peep2 = {
  width: "50%",
  height: "auto",
  marginTop: ".5%",
}
export default FAQ;