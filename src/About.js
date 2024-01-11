import React from "react";
// import ReactDOM from 'react-dom/client';
// import './index.css';

import "./style.css";
// import styles from './style.css';

import { Link, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";


export default function About() {
  // console.log("from practice" + this.props.state);

  let location = useLocation();
  useEffect(() => {
    console.log("testing if this thang works", location)
  },[])
    // console.log(`${key}: ${location.state[key]}`);
let results = [];
    for (const key in location.state) {
      results.push(
    <h3>
      {key} : {location.state[key]}
    </h3>
      )
    
}

  return (
    <div id="container1">
      <header>
        <h2 style={{ textAlign: "center", color: "white" }}>
          <Link to="/"> Math Learning</Link>
        </h2>
        <nav>
        <Link to="/"> Home</Link>
          <Link to="/about"> About</Link>
          {/* <Link to="/practice"> Practice</Link> */}
          <Link to="/contact"> Contact</Link>
          <Link to="/Sign-in"> Sign-in/Create Account</Link>

          <img
            style={{
              height: "30px",
              paddingLeft: "3%",
              paddingRight: "1%",
              cursor: "pointer",
            }}
            src={require("./kindpng_790382.png")}
            alt=""
          />
        </nav>
      </header>

      <div id="intro3">
       <div></div>
          <div id="header1">
            <div>
              {" "}
              <button style={{ height: "100%", borderRight: "solid 2px black"}}> Mission </button>{" "}
            </div>
           
            <div>
              {" "}
              <button style={{ height: "100%", borderRight: "solid 2px black"}}> Vission </button>{" "}
            </div>
           
            <div>
              {" "}
              <button style={{ height: "100%", borderRight: "solid 2px black"}}> Goals </button>{" "}
            </div>
         
            <div>
              {" "}
              <button style={{ height: "100%", borderRight: "solid 2px black"}}> How To Use Learning App </button>{" "}
            </div>

            <div>
              {" "}
              <button style={{ height: "100%", borderRight: "solid 2px black"}}> FAQ</button>{" "}
            </div>

            <div>
              {" "}
              <button style={{ height: "100%", borderRight: "solid 2px black"}}> Meet the staff!</button>{" "}
            </div>
          </div>

          <div id="header2"> 
         <div>

         </div>

         <div>
            <h1 style={{paddingTop:"20px"}}>Mission</h1>
            <br/>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus laoreet scelerisque.
             Mauris in est eget erat ultricies volutpat. Aliquam id pulvinar erat, et varius nibh. 
             Maecenas enim diam, sollicitudin vel accumsan at, vehicula vel est. 
             Ut turpis sem, euismod et odio sed, tempus egestas massa. </p>
            <br/>

            <h1>Vission</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus laoreet scelerisque.
             Mauris in est eget erat ultricies volutpat. Aliquam id pulvinar erat, et varius nibh. 
             Maecenas enim diam, sollicitudin vel accumsan at, vehicula vel est. 
             Ut turpis sem, euismod et odio sed, tempus egestas massa. 
            </p>
            <br/>

            <h1>How To Use Learning App</h1>
            <p>
            Create an account or go to Home page and submit starter information. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus laoreet scelerisque.
             Mauris in est eget erat ultricies volutpat. Aliquam id pulvinar erat, et varius nibh. 
             Maecenas enim diam, sollicitudin vel accumsan at, vehicula vel est. 
             Ut turpis sem, euismod et odio sed, tempus egestas massa. 
            </p>
         </div>

         <div>

         </div>
          </div>
      </div>
      <footer>footer info</footer>
    </div>
  );

}



    
