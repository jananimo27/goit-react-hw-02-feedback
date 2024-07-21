import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import { toTitleCase } from '../../Utils/Utils';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css['button-container']}>
    {options.map(option => (
      <button
        key={option}
        className={css.button}
        onClick={() => onLeaveFeedback(option)}
      >
        {toTitleCase(option)}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
