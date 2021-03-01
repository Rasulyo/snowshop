import React, { useContext, useState } from 'react';
import { commentsContext } from '../../contexts/CommentsContext';
// import './CommentsSection.css';

const CommentsSection = ({id}) => {
    const { 
        setComments, 
        comments
        } = useContext(commentsContext);

    const[item, setItem] = useState('')

    const handleInput = (e) => {
        const commentsDetails = {
            ...item,
            [e.target.name]: e.target.value
        }
        setItem(commentsDetails)
    }
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return (
        <div className="comment-section">
            <div className="comment-input">
                <input 
                    name="comments"
                    onChange={handleInput}
                    type="text" 
                    placeholder="Add a public comment"
                ></input>
            </div>
            <div className className="comment-add">
                <button 
                    onClick={() => setComments(id, item)}
                    className="comment-add__btn"
                >Comment</button>
            </div>
        
            {comments.map(item => (
            <div key={item.id} className="comment-inner">
                <div className="comment-guest">
                    <span className="comment-name">Guest</span>
                    <span className="comment-date">{item.date}</span>
                </div>
                <div className="comment-message">
                    <span>{item.comments}</span>
                </div>
            </div>
            ))}
        </div>
    );
};

export default CommentsSection;
