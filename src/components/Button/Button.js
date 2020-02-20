import React from 'react'
import classes from './Button.module.css'
import {connect} from 'react-redux'
import {thunkCreator} from "../../store/actions/action";

class Button extends React.Component{
    render(){
        return(
            <>
           <button className={classes.Button} onClick={() => this.props.req(this.props.value)}>Search</button>
            </>
        )
    }
}

function mapStateToProps(state) {
    return{
        value : state.bookValues.book
    }
}

function mapDispatchToProps(dispatch) {
    return{
        req : value => dispatch(thunkCreator(value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Button)