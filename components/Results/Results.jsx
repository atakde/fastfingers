import { ResultsWrapper } from "./ScResults"

export const Results = ({
  wrongWords,
  correctWords,
  keyStrokes
}) => {
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
    </ResultsWrapper>
  );
};
