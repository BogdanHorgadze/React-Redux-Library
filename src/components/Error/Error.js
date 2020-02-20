import React from 'react'
import classes from './Error.module.css'

class Error extends React.Component{
    render(){
        return(
            <>
                <div className={classes.Text}>Простите , такой книги нет</div>
            </>
        )
    }
}


export default Error