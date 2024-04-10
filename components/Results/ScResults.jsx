import styled from "styled-components";

export const ResultsWrapper = styled.div`
padding: 20px;
margin-top: 20px;
background: #f1f1f1;
border-radius: 5px;
border: 1px solid #ccc;
margin: 20px auto;

& > div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;

  &:last-child {
    border-bottom: none;
  }

  span {
    font-size: 1.2em;
  }

  .wpm {
    font-size: 1.5em;
    font-weight: bold;
  }
}
`;