import React, { useContext, useEffect } from "react";
import MainSearchModule from "../../components/MainSearchModule";
import { HomePageWrapper, MainHeading, Features } from "./Style";
import { v4 as uuidv4 } from "uuid";

// api
import groundHeroes from "../../api";
import { GlobatContext } from "../../routes/AppRouting";

const HomePage = () => {
  const { setContactData } = useContext(GlobatContext);

  useEffect(() => {
    setContactData({});
  }, []);

  const mainHeadingText = (
    <>
      Search for <br></br> <b>services</b> by <br></br> entering your
      <br></br> location <b>Pin Code</b>
    </>
  );
  const FeatureItems = [
    "Contact Professionals Directly at your own ease",
    "Get Professional's Contact Details FREE. We don't charge any hidden cost",
    "One stop platform for expert local services",
    "Simpler than ever. We just need your Pin Code to show available services & professionals in your area",
  ];
  useEffect(() => {
    const sessionId = uuidv4();
    const fetchData = async () => {
      try {
        const response = await groundHeroes.post("/", {
          sessionId,
        });
        localStorage.setItem("tokenType", response.data.type);
        localStorage.setItem("token", response.data.token);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <HomePageWrapper>
      <MainHeading>{mainHeadingText}</MainHeading>
      <MainSearchModule />
      <Features>
        {FeatureItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </Features>
    </HomePageWrapper>
  );
};

export default HomePage;
