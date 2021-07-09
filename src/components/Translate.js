import React, { useState } from 'react';
import Dropdown from "./Dropdown";
import Convert from './Convert';

//const ApiKey = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const options = [ 
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  }
]


const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text}  onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown label="Select A Language" selected={language} onSelectedChange={setLanguage} options={options} />
    <hr></hr>
    <h3 className="ui header">Output</h3>
    <Convert />
    </div>
  )
}
export default Translate;