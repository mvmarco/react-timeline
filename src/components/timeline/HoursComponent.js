import styled from "styled-components";
const HoursComponent = (props) => {
  return (
    <TimeBlock>
      <Times>{props.hour}</Times>
    </TimeBlock>
  );
};

const TimeBlock = styled.div``;

const Times = styled.div`
  text-align: center;
  color: #939393;
  padding: 20px;
  font-size: 12px;
`;

export default HoursComponent;
