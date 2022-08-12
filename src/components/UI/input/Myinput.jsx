import React from 'react';
import classes from './MyInput.module.css'
const Myinput = React.forwardRef((props) => {
 return (
    <input  className={classes.myInput} {...props}/>
  );
})
 

export default Myinput;