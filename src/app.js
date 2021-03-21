import React,{useState} from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
// import Dropdown from './components/Dropdown'
import Translate from './components/Translate'

// const items = [
//     {
//         title:'* what is react ?',
//         content:'React is js framework'
//     },
//     {
//         title:'* why is react?',
//         content:'have many advantages'
//     },
//     {
//         title:'* from where the react hooks',
//         content:'its a new addition to reuse the code'
//     }
// ]

  // const options = [
  //   {
  //       label:"The color is Red",
  //       value:'red'
  //   },
  //   {
  //       label:"The color is Green",
  //       value:'green'
  //   },
  //   {
  //       label:"A Shade of Blue",
  //       value:'blue'
  //   }
  // ]; 
const App = ()=>{
    // const [selected,setSelected]= useState(options[0]);

  return (
      <div>
          <br/>
       
      {/* <Accordion items={items}/> */}
      {/* <Search/> */}
      
      
      {/* <Dropdown 
      selected={selected}
      onSelectedChange={setSelected}
      options={options} 
      />  */}
      <Translate />
      </div>
      );
}

export default App;