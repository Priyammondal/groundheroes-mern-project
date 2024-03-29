import React from "react";
import "./index.scss";
import registrationImg from "../../assets/registration-login/registration.svg";
import Logo from "../../assets/logo/logo.svg";
import { Link, useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <div className="signup vh-100 vw-100 d-flex row p-0 m-0 container mx-auto">
      <aside className="image-section col-12 col-lg-6">
        <img src={registrationImg} alt="registrationImg" />
      </aside>
      <section className="form-section col-12 col-lg-6">
        <Link to="/" className="logo">
          <img className="logo-img" src={Logo} alt="Ground Heroes logo" />
          <h5 className="m-0 logo-txt pb-1">Ground Heroes</h5>
        </Link>
        <form
          className="registration-form px-3 px-md-5 py-4"
          onSubmit={handleSubmit}
        >
          <h2>Signup</h2>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your firstname"
          />

          <input
            type="text"
            class="form-control"
            placeholder="Enter your lastname"
          />

          <input
            type="email"
            class="form-control"
            placeholder="Enter your email id"
          />

          <input
            type="password"
            class="form-control"
            placeholder="Enter your password"
          />
          <button className="btn registration-btn">Signup</button>
          <p className="text-center">
            Have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Index;
