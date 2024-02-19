import React from "react";
import IconUserProfile from "../../assets/icons/IconUserProfile";
import logo from "../../assets/images/logo.svg";

import {
  HeaderWrapper,
  LogoWrapper,
  NameWrapper,
  FlexContainer,
} from "./Style";

const Header = () => {
  const title = (
    <>
      <b>G</b>round <b>H</b>eroes
    </>
  );
  return (
    <HeaderWrapper>
      <FlexContainer spaceBetween>
        <FlexContainer alignItemsEnd>
          <LogoWrapper to="/">
            <img src={logo} alt="logo" height={50} width={50} />
          </LogoWrapper>
          <NameWrapper>{title}</NameWrapper>
        </FlexContainer>
        {/* <IconUserProfile /> */}
      </FlexContainer>
    </HeaderWrapper>
  );
};

export default Header;
