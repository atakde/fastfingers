import { Input } from 'antd';
import {
  TypingAreaWrapper,
  RemainingTimeWrapper,
  ResetButtonWrapper,
} from './ScTypingArea';

const TypingArea = ({
  onTyping,
  inputRef,
  inputValue,
  time,
  handleResetButton
}) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <TypingAreaWrapper>
      <Input
        size="large"
        value={inputValue}
        onChange={onTyping}
        ref={inputRef}
        disabled={time === 0}
      />
      <RemainingTimeWrapper>
        <span>{formatTime(time)}</span>
      </RemainingTimeWrapper>
      <ResetButtonWrapper>
        <button onClick={handleResetButton}>Reset</button>
      </ResetButtonWrapper>
    </TypingAreaWrapper>
  );
};

export default TypingArea;