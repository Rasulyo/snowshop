import React, { useContext, useState } from 'react';
import {contextItem} from "../../../../contexts/ContextItem";
import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import {Field,Form, Formik} from 'formik';
import * as Yup from 'yup'
import BasicLayout from './Layout';


const useStyles = makeStyles({
    form: {
        width: '100%',
        maxWidth: 700,
        padding: 30,
        border: '2px solid #fff!important',
        borderRadius: 15,
        margin: '0 auto',
        height: "90%",
        // background: "url(https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/cover_image_mobile_8/715x773/17f82f742ffe127f42dca9de82fb58b1/5/Z/1610531102_00X0009HOSNO_C589_E08_GHC.jpg?imwidth=800)",
        // opacity: "0.8",
        // backgroundPosition: "center",
        // color: "white !important",
        backgroundColor: "white",
        filter:  "brightness(100%)",


    },
    input: {
        marginBottom: 30,
        color: "white !important",
        

    }
})


export default function AddItems() {

    const [inpName,setInpName] = useState('');
    const [inpDesc,setInpDesc] = useState('');
    const [inpPrice,setInpPrice] = useState('');
    const [inpBrand,setInpBrand] = useState('');
    const [inpType,setInpType] = useState('');
    const [inpImg,setInpImg] = useState('');

    const {addItems} = useContext(contextItem)


    function handleClick(){
        let newObj ={
            name : inpName,
            description: inpDesc,
            price: inpPrice,
            brand : inpBrand,
            type: inpType,
            image: inpImg
        }
        addItems(newObj)
        setInpName('')
        setInpDesc('')
        setInpPrice('')
        setInpImg('')
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
        addItems({
            ...values,
            images: [values.image]
        })
    }



    return (
        <div style={{
            background: "url(https://stillmedab.olympic.org/media/Images/OlympicOrg/News/2018/02/24/Big-Air/2018-02-24-big-air-thumbnail-01.jpg)" , 
            backgroundSize: "cover !important",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            filter:  "brightness(50%)",
            minHeight: "800px",
            height: "100%"
            }}>

        <BasicLayout>
            <Formik
                initialValues={intialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >

                {({

                  }) => (
                    <Form className={classes.form}>

                        <Typography variant="h6" style={{ textAlign: 'center', marginBottom: 15}}>
                            Add Product
                        </Typography>
[Photo]
<Field
                            name="title"
                            fullWidth
                            label="Title"
                            variant="outlined"
                            className={classes.input}
                            value={inpName}
                            onChange = {(e)=>setInpName(e.target.value)}
                            as={TextField}
                        />
                        <Field
                            name="brand"
                            fullWidth
                            label="Brand"
                            variant="outlined"
                            className={classes.input}
                            value={inpBrand} onChange = {(e)=>setInpBrand(e.target.value)}
                            as={TextField}
                        />
                        <Field
                            name="price"
                            fullWidth
                            label="Price"
                            variant="outlined"
                            className={classes.input}
                            value={inpPrice} onChange = {(e)=>setInpPrice(e.target.value)}
                            as={TextField}
                        />

                        <Field
                            name="description"
                            fullWidth
                            label="Description"
                            variant="outlined"
                            as={TextField}
                            className={classes.input}
                            value={inpDesc}
                            onChange = {(e)=>setInpDesc(e.target.value)}
                            multiline
                            rows={10}
                            color="inherit"
                        />

                        <Field
                            name="image"
                            fullWidth
                            label="Image"
                            className={classes.input}
                            value={inpImg} onChange = {(e)=>setInpImg(e.target.value)}
                            variant="outlined"
                            as={TextField}
                        />

                        <Button onClick ={handleClick} type="submit" color="primary" variant="contained">
                            Save
                        </Button>

                    </Form>
                )}
            </Formik>
        </BasicLayout>
        </div>

    )
}
