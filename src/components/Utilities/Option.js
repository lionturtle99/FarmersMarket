import React from 'react';
import PropTypes from 'prop-types';

function Option(props) {
  return (
      <option>{props.val}</option>
  );
}

Option.propTypes = {
  val: PropTypes.string
}

export default Option;