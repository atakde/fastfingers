import { WordsAreaWrapper } from "./ScWordsArea";

const WordsArea = ({
  words,
  currentWordIndex,
  wordRefs
}) => {

  return (
    <WordsAreaWrapper>
      {words.map((word, index) => (
        <span
          key={index}
          ref={wordRefs[index]}
          className={(index === currentWordIndex) ? "active" : ""}
        >{word}
        </span>
      ))}
    </WordsAreaWrapper>
  );
};

export default WordsArea;