import React from 'react'
import classes from './Content.module.css'
import {connect} from 'react-redux'
import Error from '../../components/Error/Error'
import Loader from '../../components/Loader/Loader'

class Content extends React.Component{

    renderBooks(){
       return this.props.books.map((item,index) => {
            return (
                <li key={index} className={classes.Content}>
                    <a href={item.volumeInfo.previewLink} target="_blank"><img src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : 'https://images.ua.prom.st/1245955458_w128_h128_tumba-triumf-7203.jpg'}/></a>
                    <div className={classes.Info}>
                        <div className="top">
                            <div className={classes.Title}>
                                <span>{item.volumeInfo.title}</span>
                            </div>
                            <div className="author">
                                <span>
                                    {item.volumeInfo.authors ? `${item.volumeInfo.authors.length > 1 ? 'Авторы' : 'Автор'} : ${item.volumeInfo.authors.join(', ')}` : `Издательство : ${item.volumeInfo.publisher}`}
                                </span>
                            </div>
                        </div>
                        <div className="bot">
                             <div className="button">
                                <button className={classes.Button}><a href={item.volumeInfo.previewLink} target="_blank">Читать</a></button>
                             </div>
                        </div>
                    </div>
                </li>
            )
        })
    }


    render(){
        return(
        <>
        {this.props.error  ?
        <Error/>:
        this.props.loader ? 
            <Loader/>
            : <ul>
                {this.renderBooks()}
            </ul>
            
        }
        </>
        )
    }
}
function mapStateToProps(state) {
    console.log(state)
    return{
        books : state.bookValues.books,
        error : state.bookValues.error,
        loader : state.bookValues.loader
    }
}
export default connect(mapStateToProps)(Content)