import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IconButton, makeStyles, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ItemCard from './ItemCard'
import { contextItem } from "../../../../contexts/ContextItem";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ProductsPagination from '../../../Pagination/ProductsPagination';
import axios from 'axios';


const UserList = () => {
    const history = useHistory()

    const search = new URLSearchParams(history.location.search)

    const useStyles = makeStyles((theme) => ({
        container: {
            width: '100%',
            maxWidth: 1080,
            margin: '0 auto'
        }
    }))

    const { items, getItems, count } = useContext(contextItem);
    const classes = useStyles()
    const [page, setPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [filter, setFilter] = useState('')

    useEffect(() => {
        setPage(+search.get("page") || 1)
    }, [history.location.search])

    useEffect(() => {
        if(filter) {
            getItems(`http://localhost:8000/items?_limit=6&_page=${page}&q=${searchValue}&type=${filter}`)
        }else {
            getItems(`http://localhost:8000/items?_limit=6&_page=${page}&q=${searchValue}`)
        }
    }, [page, searchValue, filter])


    // function handleClick(id) {
    //     itemToEdit(id)
    //     // history.push('/edit')
    // }

    const onPaginationChange = (e, value) => {
        history.push("/list?page=" + value);
        
    }

    function getCategory(str) {
        axios.get(`http://localhost:8000/${str}`).then(res => console.log(res))
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Products List</h1>
            {/* <button onClick={() => getCategory('snow')} >SNOW</button>
            <button onClick={() => getCategory('skies')} >SKIES</button> */}
            <TextField
                fullWidth={true}
                variant={'outlined'}
                style={{ maxWidth: '80%', margin: '0 auto', display: 'block' }}
                placeholder="Search"
                value={searchValue}
                onChange={(e) => {
                    e.preventDefault();
                    setSearchValue(e.target.value)
                }}
            />
            <select name='type' value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="">Категории</option>
                <option value="snowboard">snowboard</option>
                <option value="skis">skis</option>
                <option value ="binding">Binding</option> 
                <option value ="helmet">Helmet</option> 
                <option value ="boot">Snowboard Boot</option>
            </select>
            <Grid container spacing={2} className={classes.container} >
                {
                    items.map(item => (
                        <Grid item xs={12} sm={6} lg={4} key={item.id}>
                            <ItemCard data={item}>
                                {/* <IconButton onClick={() => delItems(item.id)}>
                                    <DeleteIcon />
                                </IconButton>
                                <Link to ={`/edit/${item.id}`}>
                                <IconButton onClick={() => handleClick(item.id)}>
                                    <EditIcon />
                                </IconButton>
                                </Link> */}
                            </ItemCard>
                        </Grid>
                    ))
                }
            </Grid>
            <ProductsPagination count={Math.ceil(count / 6)} page={page} onChange={onPaginationChange} />
        </div>
    )
}

export default UserList;