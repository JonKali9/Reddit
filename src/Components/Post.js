import React from 'react'
import Upvote from '../upvote.png';
import Downvote from '../downvote.png';
import Comment from '../comment.png';

export default function Post(props) {
    const {title, upvotes, content, author, uploadDate, comments} = props;

    const handleUpvote = (e) => {
        console.log('upvote!')
    }
    const handleDownvote = (e) => {
        console.log('downvote!')
    }

    return (
        <div className='post'>
            <h2 className='post-title'>{title}</h2>
            <div className='post-votes'>
                <img className='vote' src={Upvote} alt='upvote' onClick={handleUpvote} />
                <h3 className='post-score'>{upvotes}</h3>
                <img className='vote' src={Downvote} alt='downvote' onClick={handleDownvote} />
            </div>
            <img className='post-content' src={content} alt='post image' />
            <div className='post-bottom'>
                <p className='post-author'>Posted by <span className='post-author-link'>{author}</span></p>
                <p className='post-uploadDate'>{uploadDate}</p>
                <div className='post-comments'>
                    <img className='vote' src={Comment} alt='comment' />
                    <p>{comments}</p>
                </div>
            </div>
        </div>
    )
}
