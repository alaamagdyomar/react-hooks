import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title:'* what is react ?',
        content:'React is js framework'
    },
    {
        title:'* why is react?',
        content:'have many advantages'
    },
    {
        title:'* from where the react hooks',
        content:'its a new addition to reuse the code'
    }
]

const App = ()=>{
  return (
      <div>
          <br/>
      {/* <Accordion items={items}/> */}
      <Search/>
      </div>
      );
}

export default App;