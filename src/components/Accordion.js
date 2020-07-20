import React, { useState } from "react";
//import ReactDOM from "react-dom";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const renderedItems = items.map((item, index) => {
    const onTitleClicked = (index) => {
      
      setActiveIndex(index);
    };
const active=index===activeIndex? 'active':'';

    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => {
            onTitleClicked(index);
          }}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p> {item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderedItems}
      
    </div>
  );
};

export default Accordion;
