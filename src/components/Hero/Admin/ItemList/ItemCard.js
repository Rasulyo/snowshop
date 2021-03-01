import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Truncate from 'react-truncate'
import { IconButton } from '@material-ui/core';
import { localItem } from '../../../../contexts/LocalContext';
import { contextItem } from '../../../../contexts/ContextItem';
import { Link, useParams } from 'react-router-dom';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        minHeight: 500
    },
    media: {
        height: 200,
        backgroundSize : 'contain'
    },
});

export default function ItemCard({ data, children }) {
    // const {id} = useParams()
    const classes = useStyles();
    const {
        title,
        name,   
        price,
        description,
        image,
        brand,
        type,
        id
    } = data

    const {addToLocal} = useContext(localItem)
    
    return (
        <>
            {data ? (
                
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            // image={image}
                            name={name}
                            image={image}
                        />

                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                                {price} $
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                {brand}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">

                                <Truncate lines={3} >
                                    {description}
                                </Truncate>

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    
                        <IconButton onClick={() => addToLocal(data)}>
                            < StarBorderIcon />
                        </IconButton>
                       
                        
                        {children}
                    </CardActions>
                </Card>
            ) : (null)}
        </>
    );
}