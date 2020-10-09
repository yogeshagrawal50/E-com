import React from 'react'
import Menu from './Menu'

const Base = ({
  title = "My Title",
  description = "My description",
  className = "bg-dark text-white p-4",
  children
}) => (
    <div>
        <Menu />
    <div className="container-fluid">
      <div className="jumbotron bg-dark text-white text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
      </div>
        <div className={className}>{children}</div>
    </div>
    <footer className="footer bg-dark mt-auto py-3">
      <div className="container-fluid bg-sucess text-white text-center py-3">
        <h4>If you have got any question feel free to reach us </h4>
        <button className="btn btn-warning btn-sm">Contact us</button>
      </div>
      <div className="container">
        <span className="text-muted">
          An Amazing place to find your best t shirt
        </span>
      </div>
    </footer>
  </div>
)
export default Base
 