import styled from "styled-components";
const EventsView = () => {
  return (
    <CalendarView>
      <Event>
        <div className="info">test</div>
        <div className="event-status">111111</div>
        <div className="time">222222</div>
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
  border-color: #d6d6d6;
  border-left-color: #496fa4;
  background-color: #ffffff;
  position: absolute;
  box-sizing: border-box;
`;
export default EventsView;
