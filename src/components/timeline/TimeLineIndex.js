import HoursComponent from "./HoursComponent";
import styled from "styled-components";
import { HOURS } from "./utils/constantsHours";
import GlobalStyle from "../../styles/GlobalStyle";

export default function TimeLineIndex() {
  const DATE = new Date();

  return (
    <>
      <GlobalStyle />
      <Nav>
        <DateAndIcons>
          <h1>{`${"18 August"} ${DATE.getFullYear()}`}</h1>
          <h1>icon // icon {" | "} icon</h1>
        </DateAndIcons>
        <Test>
          <hr></hr>
        </Test>
      </Nav>
      <Cards>
        <TimeEntry>
          <div className="title">
            <h4 style={{ color: "black", fontWeight: "normal" }}>Time Entry</h4>
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
        {HOURS.map((hour, key) => (
          <HoursComponent hour={hour} key={key} />
        ))}
      </TimeLineContainer>
    </>
  );
}
// STYLES
const Nav = styled.div`
  width: 100%;
  color: #20b295;
  /* background-color: #196262; */
  color: black;
  padding: 20px 20px 0px 20px;
`;
const DateAndIcons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TimeLineContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

///////////////////////////////////////
const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-left: 0px;
`;
const TimeEntry = styled.div`
  display: flex;
  justify-content: space-between;
  width: 49%;
  padding: 20px;
  background-color: #e9e9e9;
  border-radius: 16px;
  color: #20b295;
`;
const Calendar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 48%;
  padding: 20px;
  background-color: #e9e9e9;
  border-radius: 16px;
  color: #20b295;
`;
const Test = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
  color: #939393;
  padding: 26px 20px 0px 0px;
  font-size: 12px;
  &.hr {
    border: -1.9px solid;
  }
`;
