import React from "react";
import google from "./google.jpg";
import facebook from "./facebook.png";
import twitter from "./twitter.png";
import user from "./user.png";
import pass from "./pass.png";
import "./app.css";

function App() {
    return (<div div className = "body">
                <div className = "container">
                    <div className = "box">
                        <h2> Login </h2>
                        <p>Don 't have an account?<a className = "link" href = "#"> create your account </a>, it takes <br></br>less than a minute. </p><br></br>
                        <input type = "text" className = "username" placeholder="User Name"></input>
                        <img src={user} className="img1"></img><br></br><br></br>
                        <input type = "text" className = "password" placeholder="Password"></input>
                        <img src={pass} className="img1"></img>
                        <br></br><br></br><br></br>
                        
                        <div className="sub-div">
                        <div><input type="checkbox" className="checkbox"></input>
                        <label className="remember_me">Remember Me</label></div>
                        <div><label className="forgot_password">Forgot Password?</label></div>
                        </div><br></br>
                        <button type = "button" className = "button"> Log in </button><br></br>
                        <p className="or_login">Or log in with
                        <img src={facebook} className="img"></img>
                        <img src={twitter} className="img"></img>
                        <img src={google} className="img"></img>
                        </p> 
                    </div>

                    <div className = "box1">
                        <h2> Welcome </h2>  
                        <p> Sed do euisedmoud tempour et doloure magna aliqua.your perfect place to buy and sell! </p>
                    </div>  
                </div> 
            </div>
    );
}

export default App;