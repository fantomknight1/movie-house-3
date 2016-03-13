const React = require('react');

const Search = React.createClass({
  render : function() {
    return (
      <div id="search">
        <form>
          <input type="search" name="movieSearch" placeholder="search for a movie!" />
          <button type="submit">Go!</button>
        </form>
      </div>
    )
  }
})

module.exports = Search;
