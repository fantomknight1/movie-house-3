'use strict'

const React = require('react');
const ReactDOM = require('react-dom');
const Nav = require('./components/nav.js');
const Search = require('./components/search.js');
const ListOfTheaters = require('./components/theaterList.js')

const App = React.createClass({
  getInitialState : function() {
    return {
      Theaters : {},
      Movies: {}
    }
  },

  showTheaters : function() {
    $.get('/theaters')
      .done((data) => {
        data.forEach((el) => {
          this.state.Theaters[el.theater_id] = el;
          this.setState({ Theaters: this.state.Theaters });
        })
      })
    },

  render : function(){
    return (
      <div>
        <Nav showTheaters={this.showTheaters}/>
        <ListOfTheaters AllTheaters={this.state.Theaters}/>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.querySelector('#container'))
