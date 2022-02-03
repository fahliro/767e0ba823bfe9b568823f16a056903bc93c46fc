import styled from "styled-components";
import theme from "../../assets/styles/theme";
import { useMyContext } from "../../context/MyContext";
import { rupiah } from "../../helpers/globalFunction";

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
  & span {
    font-size: ${theme.fontSizes.md};
    color: ${theme.colors.sunsetOrange};
    &:first-child {
      margin-right: ${theme.spacing.sm};
      color: ${theme.colors.rollingStone};
    }
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

  const Star = () => {
    const items = [];
    for (let i = 0; i < item.rating; i++) {
      items.push(
        <span className="material-icons" key={i}>
          star
        </span>
      );
    }
    return items;
  };

  return (
    <>
      <Content>
        <Image>
          <img src={item.image_url} alt={item.title} />
        </Image>
        <Description>
          <Rating>
            <span>{item.rating}</span>
            {Star()}
          </Rating>
          <Title>{item.title}</Title>
          <Store>
            by {item.store} &bull; {item.type}
          </Store>
          <div>
            <Price>{rupiah(item.price)}</Price>
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
