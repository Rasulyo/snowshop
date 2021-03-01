import React, { useReducer } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const contextItem = React.createContext()

const INIT_STATE = {
    items : [],
    edited: null,
    count : 0,
    get : [],
    itemDetail: null,
    productToDetails: null
}

const reducer = (state = INIT_STATE, action)=>{
    switch(action.type){
        case 'GET_ITEMS':
            return {...state, items: action.payload}
        case 'EDIT_ITEMS':
            return {...state, edited: action.payload}
        case 'GET_ITEMS_COUNT':
            return {...state, count: action.payload}
        case 'GET_ITEMS_DETAIL':
             return { ...state, itemDetail: action.payload }
             case "GET_CONTACTS_DATA":
            return { ...state, items: action.payload }
        case "DETAILS_TODO":
            return { ...state, productToDetails: action.payload }
        
        default: return state
    }
}

const ContextItemProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer, INIT_STATE)
    let history = useHistory()

    const getItems = async(url)=>{
        try {
            const {data, headers} = await axios(url);
            dispatch({
                type: 'GET_ITEMS',
                payload: data
            })
            dispatch({
                type: 'GET_ITEMS_COUNT',
                payload: parseInt(headers["x-total-count"])
            })
        } catch (error) {
        }
    }

    const getMain = async()=>{
        const{data} = axios('http://localhost:8000/items')
        dispatch({
            type: 'MAIN_GET',
            payload: data
        })
    }

    const addItems = async (newItems) =>{
        await axios.post('http://localhost:8000/items', newItems)
        getItems()
    }

    const delItems = async (id) =>{
        await axios.delete(`http://localhost:8000/items/${id}`)
        getItems('http://localhost:8000/items')
    }

    const itemToEdit = async (id) =>{
        let {data} = await axios(`http://localhost:8000/items/${id}`)
        dispatch({
            type: 'EDIT_ITEMS',
            payload: data
        })
    }

    const saveEdit = async(newItems)=>{
        await axios.patch(`http://localhost:8000/items/${newItems.id}`, newItems)
        getItems()
    }

    const getItemsDetail = async (id) => {
        // console.log(id)
        let { data } = await axios(`http://localhost:8000/items/${id}`)
        dispatch({
            type: 'GET_ITEMS_DETAIL',
            payload: data
        })
        // console.log(state.itemDetail)
    }
    const getproductsDataRating = async (id) => {

        let { data, headers } = await axios(`http://localhost:8000/items/${id}`);
        dispatch({
            type: "GET_CONTACTS_DATA",
            payload: data
        })
    }
    const detailsTodo = async (id) => {
        let { data } = await axios(`http://localhost:8000/items/${id}`)
        dispatch({
            type: "DETAILS_TODO",
            payload: data
        })
    }

    async function ratingProduct(id, rating) {
        // console.log(id, rating);
        await axios.patch(`http://localhost:8000/items/${id}`, { rating: rating })
        getproductsDataRating()
    }

    return(
        <contextItem.Provider value={{
            items: state.items,
            edited: state.edited,
            count : state.count,
            itemDetail: state.itemDetail,
            productToDetails: state.productToDetails,
            // get: state.get,
            // getMain,
            addItems,
            getItems,
            delItems,
            itemToEdit,
            saveEdit,
            detailsTodo,
            ratingProduct,
            getItemsDetail  
        }}>
            {children}
        </contextItem.Provider>
    );
};

export default ContextItemProvider;