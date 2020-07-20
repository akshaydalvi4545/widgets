//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
      label:"Malayalam",
      value:"ml",
  },
  {
      label:"Marathi",
      value:"mr",
  }
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState(`Hello Sample`);
  return (
    <div className="ui segment container">
      <div className="ui form  ">
        <div className="field">
          <label>Enter Text</label>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </div>

      <Dropdown
        label={"Select a Language"}
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />

      <h4 className="ui horizontal  divider">Output</h4>
      <div className="ui inverted segment">
        <Convert language={language} text={text}/>
      </div>
    </div>
  );
};

export default Translate;
