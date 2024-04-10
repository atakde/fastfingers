import styled from "styled-components";

export const WordsAreaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;

  span {
    font-size: 24px;
    margin: 0 5px;
    padding: 5px;
    background-color: #fff;

    &.active {
      background-color: yellow;
    }
  }
`;
