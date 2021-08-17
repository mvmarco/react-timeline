import styled from "styled-components";
const EventsView = () => {
  return (
    <CalendarView>
      <Event>
        <div className="info"></div>
        <div className="event-status"></div>
        <div className="time"></div>
      </Event>
    </CalendarView>
  );
};
const CalendarView = styled.div`
  width: 600px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 8px;
  background-color: #ececec;
  height: 720px;
  float: left;
  position: relative;
`;

const Event = styled.div`
  border-style: solid;
  border-radius: 20px;
  position: absolute;
  box-sizing: border-box;
`;
export default EventsView;
