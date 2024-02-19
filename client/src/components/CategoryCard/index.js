import React, { useContext, useEffect } from "react";
import { CategoryCardWrapper, ImageWrapper, CategoryWrapper } from "./Style";
import houseCleaning from "../../assets/images/houseCleaning.svg";
import dishWash from "../../assets/images/dishWash.svg";
import cooking from "../../assets/images/cooking.svg";
import realEstate from "../../assets/images/realEstate.svg";
import { GlobatContext } from "../../routes/AppRouting";

const CategoryCard = ({ category, contacts }) => {
  const { setContactData } = useContext(GlobatContext);

  useEffect(() => {
    setContactData({});
  }, []);

  const imgSrc =
    category === "Daily House Cleaning"
      ? houseCleaning
      : category === "Daily Dish Washing"
      ? dishWash
      : category === "Daily Cooking"
      ? cooking
      : category === "Real Estate Broker Info"
      ? realEstate
      : null;
  return (
    <CategoryCardWrapper
      to="/contact"
      onClick={() =>
        setContactData({
          imgSrc,
          category,
          contacts,
        })
      }
    >
      <ImageWrapper>
        <img src={imgSrc} />
      </ImageWrapper>
      <CategoryWrapper>
        <p>{category}</p>
      </CategoryWrapper>
    </CategoryCardWrapper>
  );
};

export default CategoryCard;
