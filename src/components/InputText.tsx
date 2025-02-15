import React, { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
  enteredText: (text: String) => void;
  disabledInputArea: boolean;
  clearText: boolean;
  unsetclearText: () => void;
}

const InputText = ({
  enteredText,
  disabledInputArea,
  clearText,
  unsetclearText,
}: Props) => {
  let [writtentext, updateWrittenText] = useState("");

  useEffect(() => {
    if (clearText) {
      updateWrittenText("");
    }
  }, [clearText]);

  return (
    <div className="input-group flex-nowrap">
      <div className="input-group">
        <textarea
          readOnly={disabledInputArea}
          //className="form-control"
          aria-label="With textarea"
          placeholder="Enter something..."
          value={writtentext}
          onChange={(e) => {
            updateWrittenText(e.target.value);
            enteredText(e.target.value);
            unsetclearText();
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default InputText;
