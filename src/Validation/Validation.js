import React from 'react';

const validation = (props) => {

  let validationMessage = 'text long enough';
  if (props.inputLength <=5) {
    validationMessage = 'text too short';

  }

  return (
    <div>
      {/* {
        props.inputLength > 5 ? 
        <p>Text long enough</p> :
        <p>Text too short</p>
      } */}
      <p>{validationMessage}</p>
      
    </div>
    
  );

}

export default validation;