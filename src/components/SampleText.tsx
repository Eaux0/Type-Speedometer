import React from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
  rightText: string;
  wrongText: string;
  text: string;
}

const SampleText = ({ text, rightText, wrongText }: Props) => {
  return (
    <div className="lorem-ipsum">
      <span className="text-success">{rightText}</span>
      <span className="text-danger">{wrongText}</span>
      <span>{text}</span>
    </div>
  );
};

export default SampleText;
