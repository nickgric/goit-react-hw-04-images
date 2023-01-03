import PropTypes from 'prop-types';

import styles from './Message.module.css';

const Message = ({ message }) => {
  return (
    <div className={styles.container}>
      <p>{message}</p>
    </div>
  );
};

export default Message;

Message.propTypes = {
  message: PropTypes.string.isRequired,
};
