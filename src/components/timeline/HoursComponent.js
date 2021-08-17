import styled from "styled-components";
const HoursComponent = (props) => {
  return (
    <TimeBlock>
      <Times>{props.hours}</Times>
    </TimeBlock>
  );
};

const TimeBlock = styled.div`
  float: left;
  background-color: red;
`;

const Times = styled.div`
  text-align: right;
  color: blue;
  font-size: 12px;
`;

export default HoursComponent;
