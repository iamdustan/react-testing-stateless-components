import React from 'react';

class Component extends React.Component {
  render() {
    var {onClick, text} = this.props;
    return (
      <button onClick={onClick}>{text}</button>
    );
  }
};

Component.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
};

export default Component;

