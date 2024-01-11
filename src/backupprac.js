import React from "react";
// import ReactDOM from 'react-dom/client';
// import './index.css';

import "./style.css";
// import styles from './style.css';

import { Link, useLocation} from "react-router-dom";
// import { Link} from "react-router-dom";
// import { Navigate } from 'react-router-dom';

class mractice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  // ContinueClick(event) {

  //   const Location = useLocation()

  // }
  render() {
    console.log("from practice" + this.props.state);

    return (
      <div id="container1">
      
        <header>
          <h2 style={{ textAlign: "center", color: "white" }}>
            <Link to="/"> Math Learning</Link>
          </h2>
          <nav>
            <Link to="/about"> About</Link>
            <Link to="/practice"> Practice</Link>
            <Link to="/contact"> Contact</Link>
            <Link to="/Sign-in"> Sign-in</Link>

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
            <button id="mainButton"> Chapters</button>
            <button id="mainButton"> Practice Questions</button>
            <button id="mainButton"> Step-by-step mode</button>
            <button id="mainButton"> Discussions</button>
            <button id="mainButton"> Ask a Teacher</button>
          </div>

          <div id="intro2">
            <div id="header1">
              <div>
                {" "}
                <button style={{ height: "100%" }}> Home </button>{" "}
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

            <div id="header2"> 2</div>
          </div>
        </div>
        <footer>footer info</footer>
      </div>
    );
  }
}
export default mractice;
