import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ title, onClick }) => {
  return (
    <div className={styles.container}>
      <button onClick={onClick} type="button" className={styles.button}>
        {title}
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
