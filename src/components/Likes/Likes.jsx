import React , {useState} from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { LinkedCameraRounded } from '@material-ui/icons';
import './Likes.css'

const Likes = () => {
    const [like, setLike] = useState(false)

    return (
        <div>
            <FavoriteIcon className ={like ? 'likeTrue' : 'likeFalse'} onClick = {()=>setLike(!like)}/>
        </div>
    );
};

export default Likes;