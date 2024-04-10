import styled from "styled-components";

export const TypingAreaWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 8px;
  justify-content: center;
`;

export const RemainingTimeWrapper = styled.div`
  font-size: 24px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const ResetButtonWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  gap: 8px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  & > button {
    padding: 8px;
    font-size: 24px;
    cursor: pointer;
    border: none;
    background-color: #fff;
  }
`;