import React, { useState } from "react";
import SampleText from "./SampleText";
import InputText from "./InputText";
import Timer from "./Timer";
import UpdateText from "./UpdateText";

import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import WordsPerMiniute from "./WordsPerMiniute";

const ClassicPage = () => {
  let [originaltext, setOriginalText] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida ligula at lorem iaculis, in volutpat odio tincidunt. Curabitur condimentum dolor eu ante accumsan interdum."
  );
  let [startTime, updateStartTime] = useState(0);
  let [text, updateText] = useState(originaltext);
  let [rightText, updaterightText] = useState("");
  let [wrongText, updatewrongText] = useState("");
  let [disabledInputArea, updateInputAreaStatus] = useState(false);
  let [numberOfWords, updateNumberOfWords] = useState(0);
  let [numberOfChars, updateNumberOfChars] = useState(0);
  let [clearText, updateClearTextStatus] = useState(false);

  function replaceOriginalText(newOriginalText: string) {
    if (newOriginalText == "") return;
    setOriginalText(newOriginalText);
    updateText(newOriginalText);
    updaterightText("");
    updatewrongText("");
    updateNumberOfWords(0);
    updateClearTextStatus(true);
    updateInputAreaStatus(false);
    updateStartTime(0);
  }

  function unsetclearText() {
    updateClearTextStatus(false);
  }

  function checkText(inputedValue: String) {
    if (startTime === 0 && inputedValue !== "") {
      updateStartTime(Date.now());
    }
    if (inputedValue == "") {
      updateText(originaltext);
      updaterightText("");
      updatewrongText("");
      updateNumberOfWords(0);
      return;
    }
    let i = 0;
    for (; i < Math.min(inputedValue.length, originaltext.length); i++) {
      if (inputedValue.charAt(i) != originaltext.charAt(i)) {
        break;
      }
      if (inputedValue.charAt(i) == " ") updateNumberOfWords(numberOfWords + 1);
    }
    updateText(
      originaltext.substring(Math.min(inputedValue.length, originaltext.length))
    );
    updateNumberOfChars(i);
    updaterightText(originaltext.substring(0, i));
    updatewrongText(
      originaltext.substring(
        i,
        Math.min(inputedValue.length, originaltext.length)
      )
    );
    if (i == originaltext.length) {
      updateInputAreaStatus(true);
    }

    return;
  }

  return (
    <>
      <div className="gridContainer">
        <div></div>
        <div className="cell">
          <div className="lorem-ipsum">
            <SampleText
              text={text}
              rightText={rightText}
              wrongText={wrongText}
            ></SampleText>
          </div>
          <div className="textarea-container">
            <InputText
              disabledInputArea={disabledInputArea}
              enteredText={checkText}
              clearText={clearText}
              unsetclearText={unsetclearText}
            ></InputText>
          </div>
          <div className="action-buttons">
            <button
              onClick={() => {
                updateClearTextStatus(true);
                replaceOriginalText(originaltext);
              }}
            >
              Retry
            </button>
            <UpdateText replaceOriginalText={replaceOriginalText}></UpdateText>
          </div>
          <div className="info-container">
            <span className="timer">
              <Timer
                disabledInputArea={disabledInputArea}
                startTime={startTime}
                numberOfWords={numberOfWords}
              ></Timer>
            </span>
            <span className="wpm">
              <WordsPerMiniute
                disabledInputArea={disabledInputArea}
                startTime={startTime}
                numberOfChars={numberOfWords}
              ></WordsPerMiniute>
            </span>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default ClassicPage;
