import React from 'react';

function TextError (props){
  return <small style={{color: '#e53935', marginBottom: 15}}>{props.children}</small>
} 

export default TextError;