import React from "react";

function NavigationDots({ active }) {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "contact"].map(
        (item) => (
          <a href={`#${item}`} key={item}
          className="app__navigation-dot"
          style={active === item ? {backgroundColor: '#313BAC'} :{}}
           onClick={() => setToggle(false)}/>
        )
      )}
    </div>
  );
}

export default NavigationDots;
