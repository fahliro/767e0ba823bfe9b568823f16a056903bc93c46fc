import { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "./assets/styles/theme";

import Header from "./components/Header/Header";
import Calendar from "./components/Calendar/Calendar";
import Modal from "./components/Modal/Modal";
import Tab from "./components/Tab/Tab";
import Card from "./components/Card/Card";
import Cart from "./components/Cart/Cart";

import menu from "./assets/data/menu.json";

import { useMyContext } from "./context/MyContext";

const Content = styled.div`
  padding: 210px 0
    ${(props) => (props.cartVisible ? "120px" : theme.spacing.xs)} 0;
`;

const Today = styled.div`
  padding: ${theme.spacing.md};
  font-weight: bold;
`;

function App() {
  const { activeTab } = useMyContext();
  const { data } = useMyContext();
  const { date } = useMyContext();

  const [scrollDown, setScrollDown] = useState(false);
  const [oldScroll, setOldScroll] = useState(0);
  const [items, setItems] = useState(menu);

  const handleFilter = (type) => {
    return menu.filter((x) => x.type.toLowerCase() === type);
  };

  useEffect(() => {
    setItems(activeTab === 0 ? handleFilter("lunch") : handleFilter("dinner"));
  }, [activeTab]);

  window.onscroll = () => {
    setScrollDown(oldScroll < window.pageYOffset);
    setOldScroll(window.pageYOffset);
  };

  const cartVisible = data.length > 0 ? true : false;

  const handleDate = () => {
    let d = new Date();
    let month = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    return (
      date.day +
      ". " +
      date.date +
      " " +
      month[d.getMonth()] +
      " " +
      d.getFullYear()
    );
  };

  return (
    <>
      <Header />
      <Calendar />
      <Modal />
      <Tab visible={!scrollDown ? true : false} />
      <Content cartVisible={cartVisible}>
        <Today>{handleDate()}</Today>
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
            />
          );
        })}
      </Content>
      <Cart visible={cartVisible} />
    </>
  );
}

export default App;
