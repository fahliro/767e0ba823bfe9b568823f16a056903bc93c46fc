import styled from "styled-components";
import theme from "../../assets/styles/theme";
import { useMyContext } from "../../context/MyContext";

const Content = styled.div`
  display: flex;
  justify-content: center;
  background: ${theme.colors.white};
  padding: ${theme.spacing.md};
  position: fixed;
  width: 100%;
  top: 159px;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  z-index: ${(props) => (props.visible ? 0 : -1)};
  transition: opacity 0.3s;
  box-shadow: ${theme.boxShadow};
`;

const LunchSection = styled.div`
  border: 1px solid
    ${(props) => (props.active ? theme.colors.capeCod : theme.colors.iron)};
  color: ${theme.colors.iron};
  padding: ${theme.spacing.sm};
  text-align: center;
  width: 100%;
  border-radius: ${theme.spacing.sm} 0 0 ${theme.spacing.sm};
  cursor: pointer;
  background: ${(props) =>
    props.active ? theme.colors.capeCod : theme.colors.white};
`;

const DinnerSection = styled(LunchSection)`
  border-radius: 0 ${theme.spacing.sm} ${theme.spacing.sm} 0;
`;

const Tab = ({ visible }) => {
  const { activeTab, handleActiveTab } = useMyContext();

  return (
    <>
      <Content visible={visible}>
        <LunchSection
          active={activeTab === 0 ? true : false}
          onClick={() => handleActiveTab(0)}
        >
          Lunch
        </LunchSection>
        <DinnerSection
          active={activeTab === 1 ? true : false}
          onClick={() => handleActiveTab(1)}
        >
          Dinner
        </DinnerSection>
      </Content>
    </>
  );
};

export default Tab;
