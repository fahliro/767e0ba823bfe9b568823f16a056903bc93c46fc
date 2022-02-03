import styled from "styled-components";
import theme from "../../assets/styles/theme";
import { useMyContext } from "../../context/MyContext";

const Content = styled.div`
  padding: ${theme.spacing.md};
`;

const Image = styled.div`
  & img {
    width: 100%;
    display: block;
    height: 250px;
    border-radius: ${theme.spacing.sm} ${theme.spacing.sm} 0 0;
    object-fit: cover;
  }
`;

const Description = styled.div`
  background: ${theme.colors.white};
  padding: ${theme.spacing.md};
  border-radius: 0 0 ${theme.spacing.sm} ${theme.spacing.sm};
  box-shadow: ${theme.boxShadow};
  color: ${theme.colors.rollingStone};
  & div:last-child {
    display: flex;
    align-items: center;
  }
`;
const Rating = styled.div`
  display: flex;
  align-items: center;
  & span:first-child {
    margin-right: ${theme.spacing.sm};
  }
  & span:last-child {
    font-size: ${theme.fontSizes.md};
    color: ${theme.colors.sunsetOrange};
  }
`;
const Title = styled.div`
  font-weight: bold;
`;
const Store = styled.div`
  font-size: ${theme.fontSizes.sm};
`;
const Price = styled.div`
  width: 50%;
  font-weight: bold;
`;
const AddButton = styled.div`
  width: 50%;
  justify-content: flex-end;
  & button {
    display: flex;
    align-items: center;
  }
`;

const Card = ({ ...item }) => {
  const { handleData } = useMyContext();

  return (
    <>
      <Content>
        <Image>
          <img src={item.image_url} alt={item.title} />
        </Image>
        <Description>
          <Rating>
            <span>{item.rating}</span>
            <span className="material-icons">star</span>
          </Rating>
          <Title>{item.title}</Title>
          <Store>
            by {item.store} &bull; {item.type}
          </Store>
          <div>
            <Price>Rp {item.price}</Price>
            <AddButton>
              <button onClick={() => handleData(item.price)}>
                ADD&nbsp;
                <span className="material-icons">add</span>
              </button>
            </AddButton>
          </div>
        </Description>
      </Content>
    </>
  );
};

export default Card;
