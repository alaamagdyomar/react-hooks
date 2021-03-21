import React ,{useState}from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert'

const options = [
    {
        label:'Afrikaams',
        value:'af'
    },
    {
        label:'Arabic',
        value:'ar'
    },
    {
        label:'Hindi',
        value:'hi'
    },
    {
        label:'Dutch',
        value:'nl'
    }
];



const Translate = ()=>{

    const [language ,setLanguage] = useState(options[0])
    const [text,setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                  <h1>Enter Text :-</h1>
                  <input 
                   value={text}
                   onChange={(e)=>setText(e.target.value)} /> 
                </div>
            </div>
      <Dropdown 
       label="Select A Language"
       selected={language}
       onSelectedChange={setLanguage}
       options={options}
      />
      <hr />
      <h1 className='ui Header'> Output Result :-</h1>
      <Convert 
        text={text}
        language={language}
      />
      </div>
  );
};

export default Translate;