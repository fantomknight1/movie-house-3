const React = require('react');
const Theater = require('./theaters.js');

const ListOfTheaters = React.createClass({
  renderTheaters : function(key){
    return (
      <Theater key={key} index={key} theater={this.props.AllTheaters[key]} />
    )
  },

  render : function() {
    return (
      <div>
        <ul>
          {Object.keys(this.props.AllTheaters).map(this.renderTheaters)}
        </ul>
      </div>
      )
    }
  });

module.exports = ListOfTheaters;
