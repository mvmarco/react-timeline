import EventsView from "./EventsView";
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

      <TimeLineContainer>
        <Wrapper>
          {HOURS.map((hour, key) => (
            <HoursComponent hour={hour} key={key} />
          ))}
        </Wrapper>

        <EventsView />
      </TimeLineContainer>
    </>
  );
}
// STYLES
const Nav = styled.div`
  color: #20b295;
  width: 100%;
  background-color: #196262;
  color: white;
  padding: 20px;
`;
const TimeLineContainer = styled.div`
  float: left;
  background-color: #196262;
  display: flex;
`;
const Wrapper = styled.div`

`;