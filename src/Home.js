import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';

import "./style.css";
// import styles from './style.css';

import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Grade: "test",
      Age: 0,
      redirect: false,
    };
    this.continueClick = this.continueClick.bind(this);
  }

  continueClick(event) {
    // let navigate = useNavigate();
    event.preventDefault();
    console.log("hello");

    // e.preventDefault();
    let gradeInput = document.getElementById("grade");
    gradeInput = gradeInput.value;
    let ageInput = document.getElementById("age");
    ageInput = ageInput.value;

    // this.setState({ Grade: gradeInput, Age: ageInput, redirect: true});

    this.setState({ Grade: gradeInput, Age: ageInput, redirect: true}, () => {
      console.log(this.state.grade, this.state.age, 'test');
    }); 

    // if (this.state.redirect.valueOf) {
    //   console.log("navigate");
    // }
  }

  render() {
    return (
      <div id="container1">
        <header>
          <h2 style={{ textAlign: "center", color: "white" }}>
            <Link to="/"> Math Learning</Link>{" "}
          </h2>
          <nav>
          <Link to="/"> Home</Link>
            <Link to="/about"> About</Link>
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
        <main>
          <div id="photo">photo and other info can go here if needed</div>

          <div id="intro">
            <div className="divCenter">
              <h1> Math Learning</h1>
              <br />
              <h2> Welcome to Math Learning!</h2>
              <h2> Lets Get Started!</h2>
              <br />
              <label>What Grade Are you in?</label>
              <select name="Grade" id="grade">
                <option value=""></option>
                <option value="KG">KG</option>
                <option value="Grade 1">Grade 1</option>
                <option value="Grade 2">Grade 2</option>
                <option value="Grade 3">Grade 3</option>
                <option value="Grade 4">Grade 4</option>
                <option value="Grade 5">Grade 5</option>
                <option value="Grade 6">Grade 6</option>
                <option value="Grade 7">Grade 7</option>
                <option value="Grade 8">Grade 8</option>
                <option value="Grade 9">Grade 9</option>
                <option value="Grade 10">Grade 10</option>
                <option value="Grade 11">Grade 11</option>
                <option value="Grade 12">Grade 12</option>
                <option value="No Grade Info">No Grade</option>
              </select>

              <div>
                <label>What is your age range?</label>
                <select name="age" id="age">
                  <option value=""></option>
                  <option value="3 - 6">3 - 6</option>
                  <option value="7 - 12">7 - 12</option>
                  <option value="13 - 18">13 - 18 </option>
                  <option value="18 or above">18 or above</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
              <button
                className="homeButton"
                type="button"
                onClick={(event) => this.continueClick(event)}
              >
                Continue
              </button>
            </div>
          </div>
        </main>
        <footer>footer info</footer>
        {this.state.redirect && <Navigate to="/practice" state={this.state} />}

        {/* {this.state.redirect && <Navigate to={{pathname: '/practice', state: {grade: 7}}} />} */}
        
      </div>
    );
  }

  //    click = continueClick(){
  // console.log();
  //   }
}
export default Home;
