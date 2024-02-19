import React, { useContext, useEffect, useState } from "react";
import {
  CategoryListingWrapper,
  CategoryCardWrapper,
  FeedBack,
  NoService,
  CategoryHeading,
} from "./Style";
import CategoryCard from "../../components/CategoryCard";
import { useNavigate, useLocation } from "react-router-dom";
import search from "../../assets/search2.gif";

// api
import groundHeroes from "../../api";
import toast from "react-hot-toast";

const CategoryListing = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [pincodeData, setPincodeData] = useState([]);
  const [catagoryList, setCatagoryList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(
    "Currently No services available at your location."
  );
  let regexPincode = new RegExp(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/);
  const categoryHeadingText = (
    <>
      <p>Following categories are available in your location.</p>
      <b>Choose one to get Professional's Details.</b>
    </>
  );
  const feedbackText =
    "Keep Visiting Us. We're working actively to add more Categories and Professional's Details.";

  useEffect(() => {
    const fetchDataByPincode = async (pincode) => {
      if (!regexPincode.test(pincode)) {
        setErrorMessage("Invalid Pincode");
      } else {
        const response = await groundHeroes.get(`/getusers/${pincode}`);
        setPincodeData(response.data);
        const uniqueCategories = new Set();
        response.data.forEach((item) => {
          uniqueCategories.add(item.service);
        });
        setCatagoryList([...uniqueCategories]);
      }
    };
    if (location.search.length === 0) {
      navigate("/");
    } else {
      fetchDataByPincode(location.search.split("=").at(-1));
    }
  }, []);

  return (
    <CategoryListingWrapper>
      {catagoryList.length !== 0 ? (
        <>
          <CategoryHeading>{categoryHeadingText}</CategoryHeading>
          <CategoryCardWrapper>
            {catagoryList.map((item, index) => (
              <CategoryCard
                key={index}
                category={item}
                contacts={pincodeData.filter((each) => each.service === item)}
              />
            ))}
          </CategoryCardWrapper>
          <FeedBack>{feedbackText}</FeedBack>
        </>
      ) : (
        <NoService>
          {errorMessage}
          <div>Please try another pincode!</div>
          <img
            src={search}
            onClick={() => {
              navigate("/");
            }}
          />
        </NoService>
      )}
    </CategoryListingWrapper>
  );
};

export default CategoryListing;
