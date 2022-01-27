import React from "react";
import Header from "../components/Header";
import { Content, Text, Wrapper, Instagram } from "./ContactStyle";

const Contact = () => {
  return (
    <div>
      <Header />
      <Wrapper>
        <Content>
          <Text>For work enquiries please contact mgmt@lumianocito.com</Text>
          <a href="http://instagram.com/lumia.nocito" targert="_blank"> <Instagram src="" alt="hllo"/> </a>
        </Content>
      </Wrapper>
    </div>
  );
};

export default Contact;
