import React from 'react';
import classes from './Loader.module.css'

const Loader = props => {
    return(
         <div className={classes.center}><div className={classes.ring}><div></div><div></div><div></div><div></div></div></div>
    )
}

export default Loader