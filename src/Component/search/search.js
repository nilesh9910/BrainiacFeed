import React from 'react'

function Search() {
    return (
        <div className="nav-wrapper container">
      <form>
        <div className="input-field">
          <input id="search" type="search" required/>
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
    )
}

export default Search
