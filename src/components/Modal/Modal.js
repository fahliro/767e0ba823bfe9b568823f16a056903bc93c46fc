import styled from "styled-components";
import theme from "../../assets/styles/theme";
import { useMyContext } from "../../context/MyContext";

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

const Modal = () => {
  const { modalVisible, handleModalVisible } = useMyContext();

  return (
    <>
      <Backdrop visible={modalVisible}>
        <Content visible={modalVisible}>
          <CloseButton onClick={handleModalVisible}>
            <span className="material-icons">close</span>
          </CloseButton>
          <Label>Cek makanan yang tersedia di lokasi kamu!</Label>
          <Input>
            <span className="material-icons">location_on</span>
            <input type="text" />
          </Input>
        </Content>
      </Backdrop>
    </>
  );
};

export default Modal;
