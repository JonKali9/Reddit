import React from 'react'
import Post from './Post';

export default function Content(props) {
    return (
        <div id='content'>
            {props.searchTerm ? <h1 id='result-label'>Results for "{props.searchTerm}":</h1> : ''}
            <Post title={'Test'} upvotes={0} author={'testUser'} uploadDate={'0 seconds ago'} comments={0} content={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fy594n8exi6k31.jpg%3Fauto%3Dwebp%26s%3Dd03a7a61e7da4ae52fb490366ae4b9de8b0069dd&f=1&nofb=1'} />
        </div>
    )
}
