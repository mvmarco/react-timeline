import styled from "styled-components";
const EventsView = () => {
  return (      
    <Wrapper>
      <QuantityView>
        <Event>
          <div className="info">test</div>
          <div className="event-status">111111</div>
          <div className="time">222222</div>
        </Event>
      </QuantityView>
      <CalendarView>
        <Event>
          <div className="info">test</div>
          <div className="event-status">111111</div>
          <div className="time">222222</div>
        </Event>
      </CalendarView>
    </Wrapper>
  );
};

//STYLES
const Wrapper = styled.div`
display: flex;
`;
const QuantityView = styled.div`
  width: 560px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #ececec;
  float: left;
  position: relative;
`;
const CalendarView = styled.div`
  width: 560px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #ececec;
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
