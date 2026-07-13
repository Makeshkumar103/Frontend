// import { clear } from "@testing-library/user-event/dist/clear";
import './Login.css';
// import './component/index';
function Login(){
    return(
        
        
        <form action="#">
            <h1>Login</h1>
            <a href="#"><button id="x">X</button></a>
            <div className="credential">     
            <input type="text" placeholder='Enter User Id'/>
            <input type="text" placeholder='Enter Password'/>
            </div>
            <button className="log-in">Log In</button>
            <fieldset><legend>Or</legend>
            <button>Continue with Email</button>
            <button>Continue with Google</button>
            </fieldset>   <br/><br/>
            <p className="foot-line">New to this site?<span>Create account</span></p>
        </form>
        
        
    );
}
export default Login;