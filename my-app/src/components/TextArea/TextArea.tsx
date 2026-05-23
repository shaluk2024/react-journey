import { useState, type ChangeEvent } from "react";
import "./TextArea.css";

function TextArea() {
  const [text, setText] = useState("");

  const handleUpperCase = () => {
    const upperCase = text.toUpperCase();
    setText(upperCase);
  };

  const handleLowerCase = () => {
    const lowerCase = text.toLowerCase();
    setText(lowerCase);
  };

  const handleClear = () => {
    setText("");
  };

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="textarea">
      <h1 className="heading">Enter your text here...</h1>
      <textarea
        name="txt"
        id="txt"
        value={text}
        onChange={handleOnChange}
        rows={30}
        cols={150}
      />
      <div className="buttons">
        <button className="btn-primary" onClick={handleUpperCase}>
          Upper Case
        </button>
        <button className="btn-primary" onClick={handleLowerCase}>
          Lower Case
        </button>
        <button className="btn-primary" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default TextArea;
