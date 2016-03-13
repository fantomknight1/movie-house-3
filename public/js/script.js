'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Search = require('./components/search.js')
const Nav = require('./components/nav.js')

const App = React.createClass({
  render : function(){
    return (
      <div>
        <Nav/>
        <h1>Sup bro</h1>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.querySelector('#container'))
