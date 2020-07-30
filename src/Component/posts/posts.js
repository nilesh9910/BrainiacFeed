import React, { Component } from 'react'
import Post from './post'
import Latestpost from '../latestpost/latestpost'
import 'whatwg-fetch'
import cookie from 'react-cookies'

class Posts extends Component {
    loadPosts(){
        const endpoint = 'http://127.0.0.1:8000/post_api'
        let lookupOptions = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(endpoint, lookupOptions)
        .then((response) => response.json()
        ).then(responseData => console.log(responseData)
        ).catch(error => console.log("error", error))
    }
    componentDidMount(){
        this.loadPosts()
    }
    render() {
        return (
        <div className="container row">
            <div className="col s8">
                <div className ="row">
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
}

export default Posts
