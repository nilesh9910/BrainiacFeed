import React from 'react'
import Post from './post'
import Latestpost from '../latestpost/latestpost'

function Posts() {
    return (
        <div className="container row">
            <div className="col s8">
                <div className ="row">
            <Post />
            <Post />
            <Post />
            </div>
            </div>
            <div className="col s4">
                <Latestpost />
                <Latestpost />
            </div>
           
        </div>
    )
}

export default Posts
