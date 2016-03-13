const React = require('react');

const Theater = React.createClass({
  render : function() {
    return (
      <li>
       {this.props.theater.name}
      </li>
    )
  }
});

module.exports = Theater
