import React from "react";
import "../styles/Home.css";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  
  const handleStudent = () => {
    navigate("/students");
  }
  
  const handleParents = () => {
    navigate("/parents");
  }
  
  const handleWarden = () => {
    navigate("/warden");
  }
  
  const handleSecurity = () => {
    navigate("/security");
  }

  return (
    <>
      <div className="bg-light">
        {/* Jumbotron */}
        <div className="jumbotron d-flex align-items-center justify-content-center text-center bg-warning text-light mb-5">
          <div className="container">
            <div className="row">
              <div className="d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-center justify-content-center flex-wrap">
                  <h1 className="display-4">Welcome to Hostel Outpass</h1>
                  <p className="lead">
                    Your central hub for hassle-free hostel outpasses at NMIT!
                  </p>
                </div>
                <div className="col-md-6 w-25">
                  <Link to="/login">
                    <button
                      type="button"
                      className="btn btn-success h-25 ms-lg-5 loginsignupbtnhover"
                    >
                      Login
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button
                      type="button"
                      className="btn btn-success h-25 ms-lg-5 loginsignupbtnhover"
                    >
                      SignUp
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Components for different user groups */}
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-6 hoveringContainer">
              <div className="card mb-4 hoveringCard">
                <div className="card-body" style={{cursor: "pointer"}} onClick={handleStudent}>
                  <h2 className="card-title">For Students</h2>
                  <Link to="/students">Apply</Link>
                  <p className="card-text">
                    Say goodbye to traditional outpass paperwork. Submit your
                    leave or outing requests with just a few clicks.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 hoveringContainer">
              <div className="card mb-4 hoveringCard">
              <div className="card-body" style={{cursor: "pointer"}} onClick={handleParents}>
                  <h2 className="card-title">For Parents</h2>
                  <p className="card-text">
                    Say goodbye to traditional outpass paperwork. Submit your
                    leave or outing requests with just a few clicks.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 hoveringContainer">
              <div className="card mb-4 hoveringCard">
              <div className="card-body" style={{cursor: "pointer"}} onClick={handleWarden}>
                  <h2 className="card-title">For Warden</h2>
                  <p className="card-text">
                    Say goodbye to traditional outpass paperwork. Submit your
                    leave or outing requests with just a few clicks.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 hoveringContainer">
              <div className="card mb-4 hoveringCard">
              <div className="card-body" style={{cursor: "pointer"}} onClick={handleSecurity}>
                  <h2 className="card-title">For Security</h2>
                  <p className="card-text">
                    Say goodbye to traditional outpass paperwork. Submit your
                    leave or outing requests with just a few clicks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="container hoveringContainer text-center mb-5">
          <h2 className="mb-4">Key Features</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card border-warning mb-3 hoveringCard">
                <div className="card-body text-warning">
                  <h5 className="card-title">User-Friendly Interface</h5>
                  <p className="card-text">
                    Intuitive and easy-to-use design for a seamless experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-warning mb-3 hoveringCard">
                <div className="card-body text-warning">
                  <h5 className="card-title">Real-Time Notifications</h5>
                  <p className="card-text">
                    Instant alerts to keep you informed about your outpass
                    status.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-warning mb-3 hoveringCard">
                <div className="card-body text-warning">
                  <h5 className="card-title">Transparent Approval Chain</h5>
                  <p className="card-text">
                    Clear and efficient process from application to approval.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;
