import styled from "styled-components";
import CalendarViewComponent from "./CalendarViewComponent";
import QuantityComponent from "./QuantityComponent";
const HoursComponent = (props) => {
  return (
    <TimeBlock>
      <Times>{props.hour}</Times>
        <QuantityComponent />
        <CalendarViewComponent />
    </TimeBlock>
  );
};

const TimeBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Times = styled.div`
  text-align: center;
  color: #939393;
  padding: 20px;
  font-size: 12px;
`;


export default HoursComponent;
