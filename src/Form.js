import React, { useState } from 'react';
import Output from './Output';
import Submit from './Submit';

const Form = ()=>{

  const [final, setFinal] = useState(false);
  const [error, setError] = useState(false);

  const [cname,setCname] = useState('');
  const [cage,setCage] = useState('');
  const [cemail,setCemail] = useState('');

  const [values, setValues] = useState({name:"", age:"", email:"", password:"", cpassword:""});
  const [name,setName] = useState(false);
  const [age,setAge] = useState(false);
  const [email,setEmail] = useState(false);
  const [password,setPassword] = useState(false);
  const [cpassword,setCpassword] = useState(false);

  const [nMessage,setnMessage] = useState('');
  const [aMessage, setaMessage] = useState('');
  const [eMessage, seteMessage] = useState('');
  const [pMessage, setpMessage] = useState('');
  const [cpMessage, setcpMessage] = useState('');

  const [nSuccess, setnSuccess] = useState(false);
  const [aSuccess, setaSuccess] = useState(false);
  const [eSuccess, seteSuccess] = useState(false);
  const [pSuccess, setpSuccess] = useState(false);
  const [cpSuccess, setcpSuccess] = useState(false);

  const [check, setCheck] = useState('');


  const handleChange= (e)=>{

    // for name validation 
    if(e.target.name === "name" && e.target.value !== ''){
      const n_re = /^[a-zA-Z ]{2,30}$/;
      if(n_re.test(e.target.value)){
        setnMessage( prev => ("Name entered is valid"));
        setName(true);
        setnSuccess(true);
        setCname(e.target.value);
      }else{
        setnMessage("Name entered is invalid");
        setName(true);
        setnSuccess(false);
      }
    }

    // for age validation
    if(e.target.name === "age" && e.target.value !== ''){
      const a_re=/^[0-9]{1,2}$/;
      if(a_re.test(e.target.value)){
        setaMessage("Age entered is valid");
        setAge(true);
        setaSuccess(true);
        setCage(e.target.value);
      }else{
        setaMessage("Age entered is invalid");
        setAge(true);
        setaSuccess(false);
      }
    }
    
    // for email validation
    if(e.target.name === "email" && e.target.value !== ''){
      const e_re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
      if(e_re.test(e.target.value)){
        seteMessage("Email entered is valid");
        setEmail(true);
        seteSuccess(true);
        setCemail(e.target.value);
      }else{
        seteMessage("Email entered is invalid");
        setEmail(true);
        seteSuccess(false);
      }
    }

    //for password validation
    if(e.target.name === "password" && e.target.value !== ''){
      const p_re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      if(p_re.test(e.target.value)){
        setpMessage("Password entered is valid");
        setPassword(true);
        setpSuccess(true);
        setCheck(e.target.value);
      }else{
        setpMessage("Password must have atleast one special character, one number and have a minimum length of 6");
        setPassword(true);
        setpSuccess(false);
      }
    }

    // to confirm password
    if(e.target.name === "cpassword" && e.target.value !== ''){

      if(check === e.target.value){
        setcpMessage("Password entered is valid");
        setCpassword(true);
        setcpSuccess(true);
      }else{
        setcpMessage("Does not match password");
        setCpassword(true);
        setcpSuccess(false);
      }
    }

    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e)=>{

    if(name && age && password && email && cpassword){
      setFinal(true);
    }else{
      setError(true);
    }


    e.preventDefault();
  }

  return(
    <div className="text-center">
      {!final ? <form onSubmit={handleSubmit}>
        <h1 className="mb-4">Sign up</h1>
        <div className="form-group text-center">
          <label>Name</label>
          <div>
            <input placeholder="Name" name="name" className="form-control" type="text" value={values.name} onChange={handleChange}/>
            {name ? <Output
              Message={nMessage}
              Success={nSuccess}
            /> : null}
          </div>
        </div>

        <div className="form-group text-center">
          <label>Age</label>
          <div>
            <input placeholder="Age" name="age" className="form-control" type="text" value={values.age} onChange={handleChange}/>
            {age ? <Output
              Message={aMessage}
              Success={aSuccess}
            /> : null}
          </div>
        </div>

        <div className="form-group text-center">
          <label>Email</label>
          <div>
            <input placeholder="Email" name="email" className="form-control" type="email" value={values.email} onChange={handleChange}/>
            {email ? <Output
              Message={eMessage}
              Success={eSuccess}
            /> : null}
          </div>
        </div>

        <div className="form-group text-center">
          <label>Password</label>
          <div>
            <input placeholder="Password" name="password" className="form-control" type="password" value={values.password} onChange={handleChange}/>
            {password ? <Output
              Message={pMessage}
              Success={pSuccess}
            /> : null}
          </div>
        </div>

        <div className="form-group text-center">
          <label>Confirm Password</label>
          <div>
            <input placeholder="Confirm Password" name="cpassword" className="form-control" type="password" value={values.cpassword} onChange={handleChange}/>
            {cpassword ? <Output
              Message={cpMessage}
              Success={cpSuccess}
            /> : null}
          </div>
        </div>
        
        {error ? <div className="bg-danger text-white text-center mb-3 rounded p-1">Please check all the fields are filled correctly</div> : null}
        
        <button className="btn btn-dark btn-block mt-3">Submit</button>
      </form> : 
      <Submit
        cname={cname}
        cage={cage}
        cemail={cemail}
      />}
      
    </div>
  )
}

export default Form;