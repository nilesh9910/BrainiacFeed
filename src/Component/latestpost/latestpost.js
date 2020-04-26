import React, { Component } from 'react'

class Latestposts extends Component {
    render() {
        return (
            <div className="row">
            <div className="col s12 m12">
            <h5 class="header">Horizontal Card</h5>
            <div class="card horizontal">
              <div class="card-image">
                <img alt="sample" src="images/sample-1.jpg"/>
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information.</p>
                </div>
                <div class="card-action">
                  <a href="/">This is a link</a>
                </div>
              </div>
            </div>
          </div>
          </div>
        )
    }
}

export default Latestposts
