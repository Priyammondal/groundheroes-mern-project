import React from "react";
import {
  FooterWrapper,
  LogoWrapper,
  AboutUsWrapper,
  SocialWrapper,
  SocialIcons,
  PoweredBy,
} from "./Style";
import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/icons/Icon_Facebook 1.svg";
import instagram from "../../assets/icons/Icon_Instagram.svg";
import linkedin from "../../assets/icons/Icon_LinkedIn.svg";
import twitter from "../../assets/icons/Icon_Twitter.svg";
const Footer = () => {
  return (
    <FooterWrapper>
      <LogoWrapper to="/">
        <img src={logo} alt="Ground Heroes" />
      </LogoWrapper>
      <AboutUsWrapper>
        <section>
          <p>Who We Are</p>
          <p>Work With Us</p>
          <p>Contact Us</p>
          <p>Report Fraud</p>
        </section>
        <section>
          <p>Privacy</p>
          <p>Security</p>
          <p>Terms</p>
          <p>Sitemap</p>
        </section>
      </AboutUsWrapper>
      <SocialWrapper>
        <SocialIcons>
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={linkedin} alt="linkedin" />
          <img src={twitter} alt="twitter" />
        </SocialIcons>
        <PoweredBy>
          <p>All rights reserved</p>
          <p>{new Date().getFullYear()}, © The Ground Heroes™</p>
        </PoweredBy>
      </SocialWrapper>
    </FooterWrapper>
  );
};

export default Footer;
