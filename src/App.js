import { useState } from "react";
import styled from "styled-components";
import theme from "./assets/styles/theme";

import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Tab from "./components/Tab/Tab";
import Card from "./components/Card/Card";

import items from "./assets/data/data.json";

const Content = styled.div`
  padding-top: 150px;
`;

const Today = styled.div`
  padding: ${theme.spacing.md};
  font-weight: bold;
`;

function App() {
  const [scrollDown, setScrollDown] = useState(false);
  const [oldScroll, setOldScroll] = useState(0);

  window.onscroll = () => {
    setScrollDown(oldScroll < window.pageYOffset);
    setOldScroll(window.pageYOffset);
  };

  return (
    <>
      <Header />
      <Modal />
      <Tab visible={!scrollDown ? true : false} />
      <Content>
        <Today>Kamis. 13 Maret 2019</Today>
        {items.map((item, index) => {
          return (
            <Card
              key={index}
              image_url={item.image_url}
              title={item.title}
              price={item.price}
              rating={item.rating}
              store={item.store}
              type={item.type}
            ></Card>
          );
        })}
      </Content>
    </>
  );
}

export default App;
