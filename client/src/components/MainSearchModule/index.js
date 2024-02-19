import React, { useContext, useEffect, useState, useRef } from "react";
import {
  SearchModuleWrapper,
  SearchButton,
  SearchInputWrapper,
  SearchInput,
} from "./Style";
import SearchIcon from "../../assets/icons/Search.svg";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import GHLoader from "../GroundHeroLoader";

// api
import groundHeroes from "../../api";

const MainSearchModule = () => {
  const [pinCode, setPinCode] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const navigate = useNavigate();
  const searchRef = useRef();
  let regexPincode = new RegExp(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const fetchDataByPincode = async (pincode) => {
    try {
      if (pincode.length > 0) {
        if (!regexPincode.test(pincode)) {
          setTimeout(() => {
            setIsLoading(false);
            toast.error("Please Enter a Valid Pincode", {
              position: "bottom-center",
              duration: 2000,
            });
          }, 3000);
        } else {
          const response = await groundHeroes.get(`/getusers/${pinCode}`);
          setTimeout(() => {
            setIsLoading(false);
            if (response.data.length > 0) {
              navigate(`/category/?pin=${pinCode}`);
            } else {
              toast.error("No service found at your location", {
                position: "bottom-center",
                duration: 2000,
              });
            }
          }, 3000);
        }
      }
    } catch (err) {
      console.log("error-->", err);
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (pinCode.length > 0) {
      setIsLoading(true);
      fetchDataByPincode(pinCode);
    } else {
      toast.error("Please Enter a Pincode!", {
        position: "bottom-center",
        duration: 2000,
      });
    }
  };
  return (
    <SearchModuleWrapper onSubmit={handleSearch}>
      <SearchInputWrapper>
        <SearchInput
          type="text"
          placeholder="Enter Your Pincode"
          value={pinCode}
          onChange={(e) => setPinCode(e.target.value)}
          ref={searchRef}
        />
      </SearchInputWrapper>
      <SearchButton>
        <img src={SearchIcon} alt="SearchIcon" />
      </SearchButton>

      {isLoading && <GHLoader />}
    </SearchModuleWrapper>
  );
};

export default MainSearchModule;
