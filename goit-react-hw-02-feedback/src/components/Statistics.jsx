import React from 'react';
import style from '../styles/Components.module.css';
import PropTypes from 'prop-types';

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={style.statContainer}>
      <h2>Statistics</h2>
      <ul>
        <li>
          <span>Good:{good}</span>
        </li>
        <li>
          <span>Neutral:{neutral}</span>
        </li>
        <li>
          <span>Bad:{bad}</span>
        </li>
        <li>
          <span>Total:{total}</span>
        </li>
        <li>
          <span>
            Positive Feedback:{positivePercentage ? Math.round(positivePercentage) : '0'}%
          </span>
        </li>
      </ul>
    </div>
  );
}
Statistics.propTypes = {
  good: PropTypes.number,
  neurtal: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
