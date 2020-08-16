import React from 'react';
import PropTypes from 'prop-types';

export default function Buttons({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)} id={option}>
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
Buttons.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
