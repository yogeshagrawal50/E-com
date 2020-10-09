import React, { useState } from "react";
import Base from "../core/Base";
import { Link, Redirect } from "react-router-dom";

import { signin, authenticate, isAutheticated } from "../auth/helper";

const Signin = () => {

  const[values, setValues] = useState({
      email: "",
      password: "",
      errors: "",
      loading: false,
      didRedirect: false
  });

  const {email, password, errors, loading, didRedirect} = values;
  const {user} = isAutheticated();


  const handleChange = name => event => {
      setValues({...values, errors: false, [name]: event.target.value});       
  };


  const onSubmit = event => {
      event.preventDefault();
      setValues({...values, error: false, loading: true});
      signin({email, password})
      .then(data => {
          if (data.errors) {
              setValues({...values, errors: data.errors, loading: false})
          }
          else {
              authenticate(data, () => {
                  setValues({
                      ...values, didRedirect: true
                  });
              });
          }
      })
      .catch(console.log("singin request failed"));
  };


  const performRedirect = () => {
      if(didRedirect) {
          if(user && user.role === 1) {
              return <p>Redirect to admin</p>;
          }
          else {
              return <p>Redirect to user dashboard</p>;
          }
      }
      if(isAutheticated) {
          return <Redirect to="/" />;
      }
  };



  const loadingMessage = () => {
      return (
          loading && (
              <div className="alert alert-info"><h2>Loading...</h2></div>
          )
      );
  };


  const errorsMessage = () => {
      return (
          <div className="row">
              <div className="col-md-6 offset-sm-3 text-left">
                  <div className="alert alert-danger" style={{display: errors ? "" : "none"}}>
                      {errors}
                  </div>
              </div>
          </div>
      )
  };



  const signInForm = () => {
      return (
           <div className="row">
               <div className="col-md-6 offset-sm-3 text-left">
                   <form>
                       <div className="from-group">
                          <label className="text-light">Email</label>
                          <input onChange={handleChange("email")} 
                              className="form-control" 
                              type="email" 
                              value={email} 
                          />
                       </div>
                       <div className="from-group">
                          <label className="text-light">Password</label>
                          <input onChange={handleChange("password")} 
                              className="form-control" 
                              type="password" 
                              value={password} 
                          /><br />
                       </div>
                       <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
                   </form>
               </div>
           </div>
      );
  };


  return (
      <Base title="Sign In page" description="A page for user to sign In!">
      {loadingMessage()}
      {errorsMessage()}
      {signInForm()}
      {performRedirect()}
      <p className="text-white text-center">{JSON.stringify(values)}</p>
      </Base>
  );
};

export default Signin;