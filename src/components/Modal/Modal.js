import { useState } from "react";
import styled from "styled-components";
import theme from "../../assets/styles/theme";
import { useMyContext } from "../../context/MyContext";
import items from "../../assets/data/location.json";

const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  z-index: ${(props) => (props.visible ? 1 : -1)};
  transition: opacity 0.3s;
`;

const Content = styled(Backdrop)`
  background: ${theme.colors.white};
  top: 100px;
  padding: ${theme.spacing.md};
  border-radius: ${theme.spacing.md} ${theme.spacing.md} 0 0;
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  & span {
    cursor: pointer;
  }
`;

const Label = styled.div`
  font-size: ${theme.fontSizes.xl};
  font-weight: bold;
  margin-top: ${theme.spacing.md};
`;

const Input = styled.div`
  margin-top: ${theme.spacing.md};
  position: relative;
  & span {
    position: absolute;
    color: ${theme.colors.sunsetOrange};
    top: ${theme.spacing.xs};
    left: ${theme.spacing.xs};
  }
  & input {
    width: 100%;
    padding-left: ${theme.spacing.xl};
  }
`;

const Location = styled.div`
  display: flex;
  margin-top: ${theme.spacing.md};
  align-items: center;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.3s;
`;
const Marker = styled.div`
  color: ${theme.colors.rollingStone};
  margin-right: ${theme.spacing.sm};
  margin-top: -${theme.spacing.sm};
  padding: ${theme.spacing.xs};
  background: ${theme.colors.iron};
  border-radius: 50%;
  display: flex;
};
`;
const Title = styled.div`
  border-bottom: 1px solid ${theme.colors.iron};
  padding-bottom: ${theme.spacing.sm};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  & div:last-child {
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.rollingStone};
  }
`;

const Modal = () => {
  const { modalVisible, handleModalVisible } = useMyContext();
  const [keyword, setKeyword] = useState("");

  return (
    <>
      <Backdrop visible={modalVisible}>
        <Content visible={modalVisible}>
          <CloseButton>
            <span className="material-icons" onClick={handleModalVisible}>
              close
            </span>
          </CloseButton>
          <Label>Cek makanan yang tersedia di lokasi kamu!</Label>
          <Input>
            <span className="material-icons">location_on</span>
            <input type="text" onChange={(e) => setKeyword(e.target.value)} />
          </Input>
          {items.map((item, index) => {
            return (
              <Location key={index} visible={keyword.length > 3 ? true : false}>
                <Marker>
                  <span className="material-icons">location_on</span>
                </Marker>
                <Title>
                  <div>{item.title}</div>
                  <div>{item.address}</div>
                </Title>
              </Location>
            );
          })}
        </Content>
      </Backdrop>
    </>
  );
};

export default Modal;
