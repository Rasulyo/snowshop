import classes from './Item.module.css';
import React, { useContext, useEffect, useState } from 'react';
// import Slider from "react-slick";
import { Link,useParams } from 'react-router-dom';
import { Paper, IconButton, Typography,TextField } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { contextItem } from '../../../../contexts/ContextItem';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from '@material-ui/core/Button';
import { cartContext } from '../../../../contexts/CardContex';
import Rating from '@material-ui/lab/Rating';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import PropTypes from 'prop-types';
import {Field,Form, Formik} from 'formik';
import { commentsContext } from '../../../../contexts/CommentsContext';
import Comment from '../../../Comment/Comment'
import Header from '../../../../../src/containers/Navbar/Navbar'

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};
const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};
const ItemDetail = (props) => {

 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const { id } = useParams();
  const { itemDetail, getItemsDetail, detailsTodo, ratingProduct } = useContext(contextItem);
  const { removeProductFromCart, addProductToCart, cart } = useContext(cartContext)
  const { getComments } = useContext(commentsContext);

  const[nickName,setNickName] = useState('')
  const[comment,setComment] = useState('')


  // function saveClick(){
  //   let newObj ={
  //     nickName: nickName,
  //     review : comment,
  //     id: id
  //   }
  //   addComment(newObj, id)
  //   setNickName('')
  //   setComment('')
  // }

  //   console.log(itemDetail)
  // console.log(detailsTodo)
  const [rating, setRating] = useState(0)

  useEffect(() => {
    detailsTodo(id)
  }, [])

  function handleRating(id, e) {
    console.log(id)
    ratingProduct(id, e)
  }
  //   const [items , setItems] = useState(null)

    // const a = useParams();
    // console.log(a)
  useEffect(() => {
    getItemsDetail(props.match.params.id);
    getComments(props.match.params.id)
  }, [id])


  return (

    <div style={{background: "url(https://blog-cdn.checkyeti.com/wp-content/uploads/2019/11/Snowboarder-citrus.jpg)"}}
    >
      <Header/>
      {
        itemDetail ?
          <>
            <div className={classes.product_detail_content}>
              <div className={classes.product_detail_slider}>
                <Typography variant="h4" className={classes.product_title}>
                  {itemDetail?.title}
                </Typography>
                <img src={itemDetail?.image} style={{maxWidth: "400px", width: "100%"}} />

                <Paper elevation={9} className={classes.product_content_wrapper}>

                  <Typography className={classes.product_price}>
                    <span style={{ color: '#3f51b5' }}>PRICE: {' '}</span> {itemDetail?.price} <AttachMoneyIcon style={{ marginTop: 5 }} />
                  </Typography>

                  <Typography variant="body1" className={classes.product_description}>
                    {itemDetail?.description}
                  </Typography>
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating
                      name="customized-empty"
                      defaultValue={itemDetail.rating}
                      // defaultValue={2}
                      onChange={(e) => handleRating(itemDetail?.id, e.target.value)}
                      precision={0.5}
                      emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    />
                    <h4>Оцените качество продукции</h4>
                  </Box>
                  {
                    cart.find(product => product.id === itemDetail?.id) ?

                      <Button onClick={() => removeProductFromCart(itemDetail?.id)} variant="contained" color="secondary" style={{ marginTop: 15 }}>
                        Удалить из корзины
            </Button> :

                      <IconButton style={{ marginTop: 15 }} onClick={() => addProductToCart(itemDetail)}>
                        <ShoppingCartIcon />
                      </IconButton>
                  }
                </Paper>
                <div className="back-link">
                <Link to="/list">
                    <img className="back-icon" />   BACK
                </Link>
                <Comment id={props.match.params.id} />
            </div>

              </div>
            </div>
          </> : <h1>Loading</h1>
      }
    </div>
  );
};

export default ItemDetail;
