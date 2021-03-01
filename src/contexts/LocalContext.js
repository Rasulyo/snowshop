import React, { useReducer } from 'react';


export const localItem = React.createContext()

const INIT_STATE = {
    items : [],
}

const reducer = (state = INIT_STATE, action)=>{
    switch(action.type){
        case 'GET_ITEMS':
            return {...state, items: action.payload}
        // case 'EDIT_ITEMS':
        //     return {...state, edited: action.payload}
        default: return state
    }
}

const LocalItemProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer, INIT_STATE)

    const getItemFromLocal = () => {
        let newData = JSON.parse(localStorage.getItem('tasks-data'))
        dispatch({
            type: "GET_ITEMS",
            payload: newData
        })
    }
 
    const addToLocal = (data) => {
        if(!localStorage.getItem('tasks-data')){ 
            localStorage.setItem('tasks-data', '[]')
        }
        let data1 = JSON.parse(localStorage.getItem('tasks-data'));
        data1.push(data) 
        localStorage.setItem('tasks-data', JSON.stringify(data1)) 
    }

    function delFromToLocal (id){
        let data = JSON.parse(localStorage.getItem('tasks-data'));
        data.splice(id, 1) 
        localStorage.setItem('tasks-data', JSON.stringify(data)) 
        getItemFromLocal()
    }

    

    return(
        <localItem.Provider value={{
            items: state.items,
            getItemFromLocal,
            addToLocal,
            delFromToLocal
        }}>
            {children}
        </localItem.Provider>
    );
};

export default LocalItemProvider;
