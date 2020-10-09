import React from 'react'
import { API } from "../backend"
import Base from './Base'



const test = () => {
  return fetch(`http://localhost:5000/api/user/5f592628f59537229cee614a`, {
    method: "GET",
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

const Home = () => {
  console.log(`API is , ${test()}` )
  
  return (
    <Base title="Home Page">
      <div className="row">
        <div className="col-4"> <button className="btn btn-success">Test</button> </div>
        <div className="col-4"> <button className="btn btn-success">Test</button> </div>
        <div className="col-4"> <button className="btn btn-success">Test</button> </div>
      </div>
    </Base>
  )
}


export default Home