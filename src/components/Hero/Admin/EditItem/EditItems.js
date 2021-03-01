import React, { useContext, useEffect, useState } from 'react';
import {contextItem} from "../../../../contexts/ContextItem";
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import {Field,Form, Formik} from 'formik';
import * as Yup from 'yup'
import BasicLayout from '../AddItems/Layout';


const useStyles = makeStyles({
    form: {
        width: '100%',
        maxWidth: 700,
        padding: 30,
        border: '2px solid #3f51b5',
        borderRadius: 15,
        margin: '0 auto'
    },
    input: {
        marginBottom: 30
    }
})


export default function EditItems() {

    const { itemToEdit, saveEdit, edited } = useContext(contextItem)
    const [newEdit, setNewEdit] = useState(edited)
    const {id} = useParams()

    useEffect(() => {
        setNewEdit(edited)
    }, [edited])

    useEffect(()=>{
        itemToEdit(id)
    },[id])

    
    function handleEditInput(e) {
        let newItems = {
            ...newEdit,
            [e.target.name]: e.target.value
        }
        setNewEdit(newItems)
    }

    const classes = useStyles();

    const intialValues = {
        title: "",
        image: "",
        brand: "",
        price: 0,
        description: ""
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Required field!').max(255, 'Too Long title!'),
        image: Yup.string().required('Required field!'),
        brand: Yup.string().required('Required field!'),
        price: Yup.string().required('Required field!'),
        description: Yup.string().required('Required field!'),
    })

    const onSubmit = (values, { resetForm }) => {
        saveEdit({
            ...values,
            images: [values.image]
        })
    }



    return (
        <div>
            {newEdit ?
                <>
                    <BasicLayout>
                        <Formik
                            initialValues={intialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            {({

                              }) => (
                                <Form className={classes.form}>

                                    <Typography variant="h6" style={{ textAlign: 'center', marginBottom: 15 }}>
                                        Add Product
                                    </Typography>

                                    <Field
                                        name="title"
                                        fullWidth
                                        label="Title"
                                        variant="outlined"
                                        className={classes.input}
                                        value={newEdit.title} title={'title'} onChange={handleEditInput}
                                        as={TextField}
                                    />
                                    <Field
                                        name="brand"
                                        fullWidth
                                        label="Brand"
                                        variant="outlined"
                                        className={classes.input}
                                        value={newEdit.brand} brand={'brand'} onChange={handleEditInput}
                                        as={TextField}
                                    />
                                    <Field
                                        name="price"
                                        fullWidth
                                        label="Price"
                                        variant="outlined"
                                        className={classes.input}
                                        value={newEdit.price} price={'price'} onChange={handleEditInput}
                                        as={TextField}
                                    />

                                    <Field
                                        name="description"
                                        fullWidth
                                        label="Description"
                                        variant="outlined"
                                        as={TextField}
                                        className={classes.input}
                                        value={newEdit.description} description={'description'} onChange={handleEditInput}
                                        multiline
                                        rows={10}
                                    />

                                    <Field
                                        name="image"
                                        fullWidth
                                        label="Image"
                                        className={classes.input}
                                        value={newEdit.image} image ={'image'} onChange = {handleEditInput}
                                        variant="outlined"
                                        as={TextField}
                                    />
                                    <Link to ='/'>
                                        <Button onClick ={()=>saveEdit(newEdit)} type="submit" color="primary" variant="contained">
                                            Save
                                        </Button>
                                    </Link>
                                </Form>
                            )}
                        </Formik>
                    </BasicLayout>
                </>
                : <h1>Loading</h1>}
        </div>
    )
}