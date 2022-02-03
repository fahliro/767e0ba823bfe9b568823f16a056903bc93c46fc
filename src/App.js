import styled from "styled-components";
import theme from "./assets/styles/theme";

import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Tab from "./components/Tab/Tab";

const Today = styled.div`
  padding: ${theme.spacing.md};
`;

function App() {
  return (
    <>
      <Header />
      <Modal />
      <Tab />
      <Today>Kamis. 13 Maret 2019</Today>
    </>
  );
}

export default App;
