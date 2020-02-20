import React from 'react'
import classes from './Form.module.css'
import {connect} from 'react-redux'
import {findBook} from "../../store/actions/action";
import Button from '../Button/Button'

class Form extends React.Component{
    render(){
        return(
            <div>
           
                <input className={classes.Input} onChange={event => this.props.addValue(event.target.value)} type="text"/>
                <Button/>
            
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        
    }
}

function mapDispatchToProps(dispatch) {
    return{
        addValue : value => dispatch(findBook(value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form)