import React from "react";
// import ReactDOM from 'react-dom/client';
// import './index.css';

import "./style.css";
// import styles from './style.css';

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Practice() {
  // console.log("from practice" + this.props.state);

  let location = useLocation();
  useEffect(() => {
    console.log("testing if this thang works", location);
  }, []);
  // console.log(`${key}: ${location.state[key]}`);
  let results = [];
  for (const key in location.state) {
    results.push(
      <h3>
        {key} : {location.state[key]}
      </h3>
    );
  }

  function buttonOnclick(e) {
    let element = document.getElementById("homeButton");
element.style.backgroundColor = 'white';
element.style.color = 'black';

    let id = e.target.id;
    console.log("testing button" + id);


    if (id === "homeButton") {
      element = document.getElementById("header2");
      let newContent = 
      `
	    <h1>Questions will be displayed here. </h1>
	    <p>Questions</p>
      `;
      element.innerHTML = newContent;
    }

    if (id === "pracQuestion") {
      element = document.getElementById("header2");
      let newContent = 
      `
	    <h1>Questions will be displayed here. </h1>
	    <p>Questions</p>
      `;
      element.innerHTML = newContent;
    }

    if (id === "chapters") {
      let element = document.getElementById("header2");
      let newContent = 
      `
	    <h1>Chapters of books will be displayed here</h1>
	    <p>chapters</p>
      `;
      element.innerHTML = newContent;
    }

    if (id === "stepbystep") {
      let element = document.getElementById("header2");
      let newContent = 
      `
	    <h1>Step by step reading and then questions will be displayed here</h1>
	    <p>Read/Questions</p>
      `;
      element.innerHTML = newContent;
    }

    if (id === "discussion") {
      let element = document.getElementById("header2");
      let newContent = 
      `
	    <h1>Discussions by other students will be posted here</h1>
      `;
      element.innerHTML = newContent;
    }

    if (id === "askteacher") {
      let element = document.getElementById("header2");
      let newContent = 
      `
	    <h1>An online chat system here to chat with professor</h1>
      `;
      element.innerHTML = newContent;
    }
    // return ();
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

      <div id="main2">
        <div id="photo">
          <button className="mainButton" id="chapters" onClick={(event) => buttonOnclick(event)} >
            {" "}
            Chapters
          </button>
          <button
            className="mainButton"
            id="pracQuestion"
            onClick={(event) => buttonOnclick(event)}
          >
            {" "}
            Practice Questions
          </button>
          <button className="mainButton" id="stepbystep" onClick={(event) => buttonOnclick(event)}>
            {" "}
            Step-by-step mode
          </button>
          <button className="mainButton" id="discussion" onClick={(event) => buttonOnclick(event)}>
            {" "}
            Discussions
          </button>
          <button className="mainButton" id="askteacher" onClick={(event) => buttonOnclick(event)}>
            {" "}
            Ask a Teacher
          </button>
        </div>

        <div id="intro2">
          <div id="header1">
            <div>
              {" "}
              <button id="homeButton"
                style={{
                  height: "100%",
                  backgroundColor: "rgb(69, 77, 105)",
                  color: "white",
                }}
              >
                Home
              </button>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <button style={{ height: "100%" }}>
                {" "}
                <img
                  src={require("./icons8-bookmark-50 (1).png")}
                  alt=""
                />{" "}
              </button>
            </div>
            <div>
              <button style={{ height: "100%" }}>
                {" "}
                <img
                  style={{ height: "100%" }}
                  src={require("./clipart4196733.png")}
                  alt=""
                />{" "}
              </button>
            </div>
            <div>
              <button style={{ height: "100%" }}>
                {" "}
                <img
                  style={{ height: "100%" }}
                  src={require("./icons8-settings-50.png")}
                  alt=""
                />{" "}
              </button>
            </div>
          </div>

          <div id="header2">
            <h6>
              Below is the information you have provided us. <br /> We have
              formated the Math Learning Styles based on your selection below
            </h6>
            <br />
            {results[0]}
            {results[1]}
          </div>
        </div>
      </div>
      <footer>footer info</footer>
    </div>
  );
}
