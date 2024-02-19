import React from "react";
import {
  ContactCardWrapper,
  ContactNumber,
  ContactButton,
  Initials,
} from "./Style";
import phone from "../../assets/images/phone.svg";

const ContactCard = (props) => {
  const { name, number, pincode } = props.item;
  const initials = name.split(" ");
  return (
    <ContactCardWrapper href={`tel:${number}`}>
      <ContactNumber>
        <Initials>{initials[0][0] + initials.at(-1)[0]}</Initials>
        <div>
          <p>{name}</p>
          <p>{number}</p>
        </div>
      </ContactNumber>
      <ContactButton>
        <img src={phone} alt="phone" />
        <p>Contact Now</p>
      </ContactButton>
    </ContactCardWrapper>
  );
};

export default ContactCard;
