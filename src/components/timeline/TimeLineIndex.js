import HoursComponent from "./HoursComponent";
import styled from "styled-components";
import { HOURS } from "./utils/constantsHours";
import GlobalStyle from "../../styles/GlobalStyle";

export default function TimeLineIndex() {
    const DATE = new Date();

  return (
    <>
      <GlobalStyle />
      <Nav>{DATE.getFullYear()}</Nav>
      <Cards>
        <TimeEntry>
          <div className="title">
            <h4 style={{color: "black"}}>Time Entry</h4>
          </div>
          <div className="intervalQuantity">
            <h4>Interval/Quantity</h4>
          </div>
        </TimeEntry>
        <Calendar>
          <div className="calendarOption">
            <h4>Calendar</h4>
          </div>
          <div className="suggestions">
            <h4>Mærkedagskalender</h4>
          </div>
        </Calendar>
      </Cards>
      <TimeLineContainer>
        <Wrapper>
          {HOURS.map((hour, key) => (
            <HoursComponent hour={hour} key={key} />
          ))}
        </Wrapper>
      </TimeLineContainer>
    </>
  );
}
// STYLES
const Nav = styled.div`
width: 100%;
  color: #20b295;
  background-color: #196262;
  color: white;
  padding: 20px;
`;
const TimeLineContainer = styled.div`
width: 100%;
  float: left;
  background-color: #ffffff;
  display: flex;
`;
const Wrapper = styled.div`
width: 100%;
`;
///////////////////////////////////////
const Cards = styled.div`
 display: flex;
 justify-content: space-between;
 padding: 20px;
`;
const TimeEntry = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  padding: 20px;
  background-color: #e9e9e9;
  border-radius: 16px;
  color: #20b295;
`;
const Calendar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  padding: 20px;
  background-color: #e9e9e9;
  border-radius: 16px;
  color: #20b295;
`;
