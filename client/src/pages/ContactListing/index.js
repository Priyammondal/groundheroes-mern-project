import React, { useContext, useEffect, useState } from "react";
import ContactCard from "../../components/ContactCard";
import {
  ContactListingWrapper,
  ContactInfo,
  ContactType,
  ContactCardWrapper,
  ViewButton,
  ReviewWrapper
} from "./Style";
import { useLocation, useNavigate } from "react-router-dom";
import houseCleaning from "../../assets/images/houseCleaning.svg";
import dishWash from "../../assets/images/dishWash.svg";
import cooking from "../../assets/images/cooking.svg";
import realEstate from "../../assets/images/realEstate.svg";
import { GlobatContext } from "../../routes/AppRouting";

const ContactListing = () => {
  const { contactData } = useContext(GlobatContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [img, setImg] = useState(null);
  const [category, setCategory] = useState(null);
  const [initialView, setInitialView] = useState([]);
  const [viewMoreView, setViewMoreView] = useState([]);
  const [showViewMore, setShowViewMore] = useState(true);
  const [showViewLess, setShowViewLess] = useState(false);

  useEffect(() => {
    if (Object.keys(contactData).length === 0) {
      navigate("/");
    } else {
      setImg(contactData.img);
      setCategory(contactData.category);

      if (contactData.contacts?.length <= 4) {
        setInitialView(contactData.contacts);
      } else {
        setInitialView(contactData.contacts?.slice(0, 4));
      }
    }
  }, [location]);

  const getViewMoreData = () => {
    setViewMoreView(contactData.contacts?.slice(4));
    setShowViewMore(false);
    setShowViewLess(true);
  };

  return (
    <ContactListingWrapper>
      <ContactInfo>
        <ContactType>
          <div>
            <img
              src={
                category === "Daily House Cleaning"
                  ? houseCleaning
                  : category === "Daily Dish Washing"
                  ? dishWash
                  : category === "Daily Cooking"
                  ? cooking
                  : category === "Real Estate Broker Info"
                  ? realEstate
                  : null
              }
              alt={category}
            />
          </div>
          <p>{category}</p>
        </ContactType>
        <ContactCardWrapper>
          {initialView?.map((item) => (
            <ContactCard item={item} />
          ))}
          {viewMoreView?.map((item) => (
            <ContactCard item={item} />
          ))}
        </ContactCardWrapper>
        {contactData?.contacts?.length > 4 && showViewMore ? (
          <ViewButton onClick={getViewMoreData}>View More</ViewButton>
        ) : showViewLess ? (
          <ViewButton
            onClick={() => {
              setViewMoreView([]);
              setShowViewMore(true);
              setShowViewLess(false);
            }}
          >
            View less
          </ViewButton>
        ) : null}
      </ContactInfo>
      <ReviewWrapper>
        How We're Doing? Please <a href="#">Review Us</a>
      </ReviewWrapper>
    </ContactListingWrapper>
  );
};

export default ContactListing;
