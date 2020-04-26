import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import {navdata} from './navdata'
import Search from './search/search'
class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            navlinks: navdata
        }
    }
    componentDidMount() {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {});
    }
    render() {
        return (
            <div>
                <nav className="nav-extended">
                    <div className="nav-wrapper container">
                    <a href="/" className="brand-logo">BraniacFeed</a>
                    <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Search />
                        </li>
                        {this.state.navlinks.map( ({id, linkurl, Name}) => <li key={id}><a href={linkurl}>{Name}</a></li> )}
                    </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    {this.state.navlinks.map( ({id, linkurl, Name}) => <li key={id}><a href={linkurl}>{Name}</a></li> )}
                </ul>
            </div>
        )
    }
}

export default Navbar
