import { MAX_ERRORS } from "@/constants";
import { ResultsWrapper } from "./ScResults"

export const Results = ({
  wrongWords,
  correctWords,
  keyStrokes
}) => {
  /* 
  Example:

  WPM (Words Per Minute) is a calculation of exactly how fast someone types with no error penalties. 
  The gross typing speed is calculated by taking all words typed and dividing by the time it took to type the words in minutes. 
  A "word" is equivalent to five keystrokes (including spaces, numbers, letters, and punctuation marks).  

  Total Keys Pressed = 200
  Time Elapsed in Minutes = 1.5
  WPM = ( (200 / 5) / 1.5 ) = 26
  */
  const calculateGrossWPM = () => {
    const totalNumberOfWords = keyStrokes.length / 5;
    const wpm = totalNumberOfWords / 1; // 1 minute = 60 seconds

    return wpm;
  };

  const isErrorLimitReached = wrongWords.length > MAX_ERRORS;

  if (isErrorLimitReached) {
    return (
      <ResultsWrapper>
        You have reached the maximum error limit.
      </ResultsWrapper>
    );
  }

  return (
    <ResultsWrapper>
      <div>
        <span>Wrong Word Count</span>
        <span>{wrongWords.length}</span>
      </div>
      <div>
        <span>Correct Word Count</span>
        <span>{correctWords.length}</span>
      </div>
      <div>
        <span>Key Strokes</span>
        <span>{keyStrokes.length}</span>
      </div>
      <div className="wpm">
        <span>WPM</span>
        <span>{calculateGrossWPM()}</span>
      </div>
    </ResultsWrapper>
  );
};
