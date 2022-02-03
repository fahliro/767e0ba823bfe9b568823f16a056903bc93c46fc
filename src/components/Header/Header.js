import styled from "styled-components";
import theme from "../../assets/styles/theme";
import { useMyContext } from "../../context/MyContext";

const Content = styled.div`
  padding: ${theme.spacing.md};
  display: flex;
  align-items: center;
  background: ${theme.colors.white};
`;

const BackIcon = styled.div`
  padding-right: ${theme.spacing.md};
  display: flex;
  align-items: center;
  & span {
    cursor: pointer;
  }
`;
const LabelAddress = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.rollingStone};
`;

const Location = styled.div`
  font-weight: bold;
  font-size: ${theme.fontSizes.md};
  display: flex;
  align-items: center;
  cursor: pointer;
  & span {
    color: ${theme.colors.sunsetOrange};
  }
`;

const Header = () => {
  const { handleModalVisible } = useMyContext();

  return (
    <>
      <Content>
        <BackIcon>
          <span className="material-icons">west</span>
        </BackIcon>
        <div>
          <LabelAddress>ALAMAT PENGANTARAN</LabelAddress>
          <Location onClick={handleModalVisible}>
            Tokopedia Tower <span className="material-icons">expand_more</span>
          </Location>
        </div>
      </Content>
    </>
  );
};

export default Header;
