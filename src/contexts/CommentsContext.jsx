import React, { useReducer } from 'react';
import axios from 'axios';
import { API_COMMENTS } from '../helpers/constants';

export const commentsContext = React.createContext();

const INIT_STATE = {
    comments: []
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_COMMENTS": return {
            ...state,
            comments: action.payload,
        }
        default: return state;
    }
}

const CommentsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const setComments = async (commentId, comment) => {
        const productComments = {
            commentId,
            ...comment,
            date:new Date().toLocaleString()
        }
        await axios.post(`${API_COMMENTS}`, productComments)
        getComments(commentId);
    }

    const getComments = async (commentId) => {
        const { data } = await axios(`${API_COMMENTS}?commentId=${commentId}`)
        dispatch({
            type: "GET_COMMENTS",
            payload: data
        })

    }
    
    return (
        <commentsContext.Provider value={{
            setComments,
            getComments,
            comments: state.comments
        }}>
            {children}
        </commentsContext.Provider>
    )
}

export default CommentsContextProvider;
