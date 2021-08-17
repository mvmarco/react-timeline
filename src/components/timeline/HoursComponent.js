import styled from "styled-components";
const HoursComponent = (props) => {
  return (
    <TimeBlock>
      <Times>{props.hours}</Times>
    </TimeBlock>
  );
};

const TimeBlock = styled.div`
  width: 100px;
  height: 50px;
  float: left;
  padding-left: 10px;
  padding-right: 10px;

`;

const Times = styled.div`
  width: 100px;
  height: 50px;
  float: left;
  padding-left: 10px;
  padding-right: 10px;
  color: black;
`;

export default HoursComponent;
