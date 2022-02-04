import { useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import theme from "../../assets/styles/theme";
import { useMyContext } from "../../context/MyContext";

const Content = styled.div`
  position: fixed;
  width: 100%;
  margin-top: 70px;
  padding: ${theme.spacing.md};
  background: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.iron};
`;

const Item = styled.div`
  text-align: center;
  color: ${(props) =>
    props.isWeekend
      ? theme.colors.iron
      : props.selected
      ? theme.colors.athensGray
      : theme.colors.capeCod};
  background: ${(props) => (props.selected ? theme.colors.capeCod : "")};
  border-radius: 50%;
  padding: 3px;
  & div:first-child {
    font-size: ${theme.fontSizes.sm};
  }
  & div:last-child {
    font-weight: ${(props) => (!props.selected ? "bold" : "")};
    font-size: ${theme.fontSizes.xl};
  }
`;

const Calendar = () => {
  const { date, handleDate } = useMyContext();

  useEffect(() => {
    handleDate({ date: 4, day: "Kamis" });
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    arrows: false,
  };

  const Items = () => {
    let items = [];
    let weekends = [];
    let numOfDays = 14;
    let days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

    for (let i = 1; i <= numOfDays; i++) {
      if (i % 7 === 0) {
        weekends.push(i - 1);
        weekends.push(i);
      }
    }
    const handleSelectDate = (selected) => {
      handleDate(selected);
    };
    const handleDays = (i) => {
      let concatedDays = [];
      for (let i = 0; i <= numOfDays / 7; i++) {
        concatedDays = days.concat(days);
      }
      return concatedDays[i - 1];
    };
    for (let i = 1; i <= numOfDays; i++) {
      items.push(
        <Item
          key={i}
          isWeekend={weekends.indexOf(i) !== -1 ? true : false}
          selected={i === date.date ? true : false}
          onClick={() =>
            weekends.indexOf(i) === -1
              ? handleSelectDate({ date: i, day: handleDays(i) })
              : null
          }
        >
          <div>{handleDays(i).substr(0, 3).toUpperCase()}</div>
          <div>{i}</div>
        </Item>
      );
    }
    return items;
  };

  return (
    <>
      <Content>
        <Slider {...settings}>{Items()}</Slider>
      </Content>
      ;
    </>
  );
};

export default Calendar;
