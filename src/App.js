import React, { useState } from "react";
//import ReactDOM from "react-dom";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header"

const items = [
  {
    title: "what is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is Fast",
  },
  {
    title: "What will happen in 2020",
    content: "I will work for AMAZON",
  },
];

const options=[
  {
      label:'The color Red',
      value:'red'
  },
  {
      label:'The color Green',
      value:'green```'

  },
  {
      label:'Ashade of Blue',
      value:'blue'

  }
];
// const App = () => {
//   return (
//     <div>
//         <Dropdown options={options}/>
//     </div>
//   );
// };

export default ()=>{
   const [selected,setSelected]=useState(options[0]);
   //

   return (
    //  <div>
    //    <button onClick={()=>{setShowDropDown(!showDropDown)}}> Toggle</button>
    //    {
    //      showDropDown?
    //      <Dropdown 
    //    label={'Select a Color'}
    //    onSelectedChange={setSelected}
    //    selected = {selected} 
    //    options={options}/>:
    //    null
    //    }
    //  </div>

    <div>
      <Header/>
      <Route path={"/"}>
        <Accordion items={items}/>
      </Route>
      <Route path={"/list"}>
        <Search/>
      </Route>
      <Route path={"/dropdown"}>
        <Dropdown
        label="Select Color"
        options={options}
        selected={selected}
        onSelectedChange={setSelected}

        
        />
      </Route>
      <Route path={"/translate"}>
        <Translate/>
      </Route>
    </div>


   );
};
