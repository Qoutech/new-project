import React from 'react'
import Logo from '../assets/logo.png'
function Headers() {
  return (
    <>
    <nav className="navbar navbar-expand-lg ">
  <div className="container">
  <a class="navbar-brand" href="/"><img src={Logo} alt="logo" srcSet="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav mx-auto">
        <a className="nav-link active text-danger" aria-current="page" href="/">Home</a>
        <a className="nav-link" href="/Services">Services</a>
        <a className="nav-link" href="/Tracking">Tracking</a>
        <a className="nav-link" href="/Contact">Contact</a>
      </div>
      <a className="btn btn-danger">Request Quote</a>
    </div>
  </div>
</nav>
    </>
  )
}

export default Headers