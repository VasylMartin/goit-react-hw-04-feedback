import React from "react";
import PropTypes from 'prop-types';

export const Statistics = ({good, bad, neutral, total, positiveFeedbackPercentage}) => {
        return (
        <div>
            <p>Good:{good}</p>
            <p>Neutral:{neutral}</p>
            <p>Bad:{bad}</p>
            <p>Total:{total}</p>
            <p>Total:{positiveFeedbackPercentage}%</p>
        </div>
        )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedbackPercentage: PropTypes.number.isRequired,
};