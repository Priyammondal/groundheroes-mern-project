import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.svg";
import { CgProfile } from "react-icons/cg";
import { IoPersonCircle } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginState } from "../../redux/reducers";
import "./index.scss";

import {
  HeaderWrapper,
  LogoWrapper,
  NameWrapper,
  FlexContainer,
} from "./Style";

const Header = () => {
  const [profileExpand, setprofileExpand] = useState(false);
  const loginRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.globalState);
  console.log("profileExpand-->", profileExpand);

  useEffect(() => {
    const handleClick = (e) => {
      if (loginRef.current && !loginRef.current.contains(e.target)) {
        setprofileExpand(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [loginRef]);

  const handleLogout = () => {
    dispatch(loginState(false));
    navigate("/");
  };
  return (
    <HeaderWrapper>
      <FlexContainer spaceBetween>
        <FlexContainer alignItemsEnd>
          <LogoWrapper to="/">
            <img src={logo} alt="logo" height={50} width={50} />
          </LogoWrapper>
          <NameWrapper>
            <b>G</b>round <b>H</b>eroes
          </NameWrapper>
        </FlexContainer>
        {globalState.login ? (
          <div className="login" ref={loginRef}>
            <Link
              className="d-flex align-items-center gap-2 h-100 text-decoration-none"
              onClick={() => setprofileExpand(true)}
            >
              <IoPersonCircle size={30} color="black" />
              <span className="d-none d-md-block text-dark">
                Welcome, Priyam
              </span>
            </Link>
            {profileExpand && (
              <section
                className="profile-dropdown"
                onClick={() => setprofileExpand(false)}
              >
                <ul className="list-group">
                  <li
                    className="list-group-item list-group-item-action"
                    onClick={() => {
                      navigate("/profile");
                    }}
                  >
                    My Profile
                  </li>
                  <li className="list-group-item list-group-item-action">
                    Help
                  </li>
                  <li className="list-group-item list-group-item-action">
                    About Us
                  </li>
                  <li
                    className="list-group-item list-group-item-action"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </section>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="d-flex align-items-center gap-2 h-100 text-decoration-none"
          >
            <CgProfile size={30} color="black" />
            <span className="d-none d-md-block text-dark">Login / Signup</span>
          </Link>
        )}
      </FlexContainer>
    </HeaderWrapper>
  );
};

export default Header;
