import EventsView from "./EventsView";
import HoursComponent from "./HoursComponent";
import styled from "styled-components";
import { HOURS } from "./utils/constantsHours";

export default function TimeLineIndex() {
  return (
    <TimeLineContainer>
      {HOURS.map((hour, key) => (
        <HoursComponent hour={hour} key={key} />
      ))}
      <EventsView />
    </TimeLineContainer>
  );
}

const TimeLineContainer = styled.div`
  width: 80px;
  background-color: black;
  display: flex;
`;