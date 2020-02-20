import React from 'react'
import classes from './Search.module.css'
import Form from "../../components/Form/Form";

class Search extends React.Component{
    render(){
        return(
        <>
            <h1 className={classes.Text}>Библиотека</h1>
            <Form/>
        </>
        )
    }
}

export default Search