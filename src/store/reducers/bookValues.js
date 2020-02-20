import {BOOK,ADDBOOKS,ERRORBOOKS,LOADER} from "../actions/actionType";



const initialState = {
    book : '',
    books : [],
    error: false,
    loader : false
}

export default function bookValues(state = initialState, action) {
    switch (action.type) {
        case BOOK:
            return{
                ...state, book : action.value  
            }
            break;
        case ADDBOOKS:
            return{
                ...state, books : action.books, error: false, loader : false,
            }
        break;
        case ERRORBOOKS:
            return{
                ...state, error : true, loader : false,
            }
         break;
        case LOADER:
            return{
                ...state, loader : true,
            }
        break;
        default:
        return state
            break;
    }
}