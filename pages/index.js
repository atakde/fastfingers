import React, { useEffect, useRef, useState } from "react";
import WordsArea from "@/components/WordsArea";
import { generate } from "random-words";
import { CHALLANGE_TIME, GENERATE_COUNT } from "@/constants";
import TypingArea from "@/components/TypingArea";
import Container from "@/components/Container";
import Results from "@/components/Results";
import Title from "@/components/Title";

const Home = () => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [wordRefs, setWordRefs] = useState([]);
  const [words, setWords] = useState([]);
  const [intervalId, setIntervalId] = useState(null);
  const [wrongWords, setWrongWords] = useState([]);
  const [correctWords, setCorrectWords] = useState([]);
  const [keyStrokes, setKeyStrokes] = useState([]);

  const [time, setTime] = useState(CHALLANGE_TIME);
  const isTimerStarted = useRef(false);

  useEffect(() => {
    const randomWords = generate(GENERATE_COUNT);
    setWordRefs(randomWords.map(() => React.createRef()));
    setWords(randomWords);
  }, []);

  useEffect(() => {
    if (time === 0) {
      clearInterval(intervalId);
      setIntervalId(null);
      isTimerStarted.current = false;
    }
  }, [time]);

  const onTyping = e => {
    setKeyStrokes([...keyStrokes, e.key]);
    if (isTimerStarted.current === false) {
      isTimerStarted.current = true;
      const intervalID = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
      setIntervalId(intervalID);
    }
    const value = e.target.value;

    if (value.endsWith(" ")) {
      const currentWord = words[currentWordIndex];

      if (currentWord !== value.trim()) {
        wordRefs[currentWordIndex].current.style.backgroundColor = "red";
        setWrongWords([...wrongWords, currentWord]);
      } else {
        wordRefs[currentWordIndex].current.style.backgroundColor = "green";
        setCorrectWords([...correctWords, currentWord]);
      }

      if (currentWordIndex + 1 === words.length) {
        return;
      }

      setInputValue("");
      setCurrentWordIndex(currentWordIndex + 1);

    } else {
      const currentWord = words[currentWordIndex];

      if (!currentWord.startsWith(value)) {
        wordRefs[currentWordIndex].current.style.backgroundColor = "red";
      } else {
        wordRefs[currentWordIndex].current.style.backgroundColor = "yellow";
      }

      setInputValue(value);
    }
  };

  const handleResetButton = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setTime(CHALLANGE_TIME);
    isTimerStarted.current = false;
    setInputValue("");
    setCurrentWordIndex(0);

    // generate new words
    const randomWords = generate(GENERATE_COUNT);
    setWords(randomWords);

    // clear word colors
    wordRefs.forEach(ref => {
      ref.current.style.backgroundColor = "";
    });
  };

  return (
    <Container>
      <Title
        align="center"
        title="Typing Challange"
      />
      <WordsArea
        words={words}
        currentWordIndex={currentWordIndex}
        wordRefs={wordRefs}
      />
      <TypingArea
        inputValue={inputValue}
        onTyping={onTyping}
        inputRef={inputRef}
        time={time}
        handleResetButton={handleResetButton}
      />
      {time === 0 && (
        <Results
          wrongWords={wrongWords}
          correctWords={correctWords}
          keyStrokes={keyStrokes}
        />
      )}
    </Container>
  );
};

export default Home;