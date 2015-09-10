import React from 'react';

var Component = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
);

Component.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
};

export default Component;

