import React from 'react';
import classes from '../assets/covid.module.css';
import arrow from '../assets/arrow.png';

const Infobox = (props) => {
  return (
   <div onClick = {props.showhandler} className={classes.cont}>
     <p className={classes.text}>{props.text}</p>
     <button className = {classes.btn}>
       <img src = {arrow} alt = "btn"></img>
     </button>
   </div>

    )
}

export default Infobox;