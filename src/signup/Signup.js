import   '../signup/Signup.css';
import React ,{useState } from 'react';

function Signup(){ 
  
  const [User,setUser]= useState({
    name:"",email:"",phoneno:"",password:"",cpassword:""
  });
  let name , value; 
  const handInput = (e)=>{ 
    console.log(e)
    name = e.target.name;
    value =e.target.value;
    setUser({...User, [name]:value})
  } 
const postData = async(e)=>{
e.preventDefault();
const {name,email,phoneno,password,cpassword} = User;
const res = await fetch ("/signup",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    name,email,phoneno,password,cpassword
  })
});
const  data =  res.json();

if(res.status === 402 || !data){
  window.alert("Mail Id You Entered is Already Exist");
}else
if (res.status === 442|| !data) 
{
  window.alert("Account Created")
  
} else
if (res.status === 421 || !data)
{
  window.alert("Fill every Data");   
  

  
}else{
  window.alert("Password and Confirm pasword Missmatch");
}
}

const [email,setEmail] = useState('');
const [password , setPassword] = useState('');
const loginUser =async (e)=>{
e.preventDefault();

const res =await fetch('/signin',{
  method : "POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    email,password 
  })

});
const data =res.json();
if(res.status === 400 || !data)
{
  window.alert("invalid");
}else{
  window.alert("valid");
}
}


  const [isClass,setclass]=useState(false);

       const signup=()=>{
         
         setclass(!isClass);

       }
    
    return(
       
       
        <div>
         <div className={`container ${isClass?'sign-up-mode':''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form method='POST' className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" 
              value={email} onChange={(e)=>setEmail(e.target.value)}
              placeholder="Username" />
            </div> 
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" 
              value={password} onChange={(e)=>setPassword(e.target.value)}
              placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" onClick={loginUser} />
            
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" name='name'
              value={User.name}
              onChange={handInput} />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" name='email'
              value={User.email}
              onChange={handInput} required/>
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="number" placeholder="Phone No" name='phoneno'
              value={User.phoneno}
              onChange={handInput}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" name='password' 
              value={User.password}
              onChange={handInput}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Confirm Password" name='cpassword' 
              value={User.cpassword}
              onChange={handInput}/>
            </div>
            <input type="submit" className="btn1" value="Sign up" 
            onClick={postData} />
            
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={signup}  >
              Sign up
            </button>
          </div>
          <img src="./img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          
          <div className="content">
            
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={signup}  >
              Sign in
            </button>
          </div>
          <img src='./img/sig.svg' className="image" alt="cbfb" />
        </div>
      </div>
    </div>
      
      </div>
        

       
    );

}
export default Signup;