import { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../../assets/styles/theme";
import { useMyContext } from "../../context/MyContext";
import { rupiah } from "../../helpers/globalFunction";

const Content = styled.div`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  z-index: ${(props) => (props.visible ? 0 : -1)};
  transition: opacity 0.3s;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: ${theme.spacing.md};
  background: ${theme.backgroundTransparent};
`;

const Wrapper = styled.div`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background: ${theme.colors.stiletto};
  color: ${theme.colors.iron};
  display: flex;
  border-radius: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
`;
const Total = styled.div`
  width: 70%;
  & div:first-child {
    font-size: ${theme.fontSizes.xl};
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
const Checkout = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
  & span {
    cursor: pointer;
    &:first-child {
      margin-right: ${theme.spacing.md};
    }
  }
`;

const Cart = ({ visible }) => {
  const { data } = useMyContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    for (let i of data) {
      setTotal(total + i);
    }
  }, [data]);

  return (
    <>
      <Content visible={visible}>
        <Wrapper>
          <Total>
            <div>
              {data.length} {data.length === 1 ? "Item" : "Items"} |{" "}
              {rupiah(total)}
            </div>
            <div>Termasuk ongkos kirim</div>
          </Total>
          <Checkout>
            <span className="material-icons">shopping_cart</span>
            <span className="material-icons">keyboard_arrow_right</span>
          </Checkout>
        </Wrapper>
      </Content>
    </>
  );
};

export default Cart;
