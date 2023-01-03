import PropTypes from 'prop-types';
import styles from './AuthorTitle.module.css';

export const AuthorTitle = ({ title }) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
    </>
  );
};

export default AuthorTitle;

AuthorTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
