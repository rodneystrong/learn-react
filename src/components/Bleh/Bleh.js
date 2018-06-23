import React from 'react';
import './Bleh.css';

const Bleh = () => {
  const testVar = 'this is from the variable';
  let strVar = `
  let's see if this is any different or if ${testVar}
  `;
  return (
    <div>
      <h2 className="Bleh-top-heading">I'm just testing shit</h2>
      <h2 className="Bleh-mid-heading">{testVar}</h2>
      <h2 className="Bleh-mid-heading">{strVar}</h2>
    </div>
  );
};

export default Bleh;
