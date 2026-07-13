import './Signup.css';
// import { Checkbox } from 'primereact/checkbox';
// import './component/index';
function Signup(){
    return(
        
        <form action="#">
            <h1>Signup</h1>
            <a href="#"><button id="x">X</button></a>
            <div className="credential">     
            <input type="text" placeholder='Enter Full Name'/>
            <input type="text" placeholder='Enter E-mail'/>
            </div>
            <checkbox>I agree to terms and  service, Privacy Policy and  Content Policies</checkbox>       
            <button className='sign-up'>Create account</button>
            <fieldset><legend>Or</legend>
            <button>Continue with Google</button>
            </fieldset>   <br/><br/>
            <p className="foot-line">Already have an account?<span>Log in</span></p>
        </form>
        
        
    );
}
export default Signup;