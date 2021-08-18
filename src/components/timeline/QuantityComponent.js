import styled from "styled-components";
const QuantityComponent = (props) => {
  return (
    <div>
      <Test>
        <hr></hr>
      </Test>
    </div>
  );
};


const Test = styled.div`
  width: 800px;
  margin: auto;
  text-align: center;
  color: #939393;
  padding: 26px 20px 26px 0px;
  font-size: 12px;
  &.hr {
    border: -1.9px solid ;
  }
`;

export default QuantityComponent;
