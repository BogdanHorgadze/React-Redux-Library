import {BOOK,ADDBOOKS,ERRORBOOKS,LOADER} from './actionType'
import axios from 'axios'

export function thunkCreator(book) {
  return async dispatch => {
    dispatch(Loader())
    try{
      const KEY = `AIzaSyBbJfHgS70mRRVca8R0Lb2b47-9Kw0Sqcg`;
      const API = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${KEY}`;
      const response = await axios.get(API);
      dispatch(addBooks(response.data.items))
      console.log(response)
    }
    catch(e){
      console.log(e)
      dispatch(errorBooks())
    }
  };
}

export function addBooks(books) {
    return{
        type : ADDBOOKS,
        books
    }
}

export function Loader() {
    return{
        type : LOADER,
    }
}

export function errorBooks() {
    return{
        type : ERRORBOOKS
    }
}

export function findBook(value) {
    return{
        type : BOOK,
        value
    }
}