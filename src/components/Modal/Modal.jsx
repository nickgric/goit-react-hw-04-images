import PropTypes from 'prop-types';
import { useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ closeModalByEsc, closeModal, large }) => {
  useEffect(() => {
    const closeByEsc = event => {
      if (event.code === 'Escape') {
        closeModalByEsc();
      }
    };
    window.addEventListener('keydown', closeByEsc);
    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [closeModalByEsc]);

  return (
    <div onClick={closeModal} className={styles.overlay}>
      <div className={styles.modal}>
        <img src={large} alt="Something interesting" />
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  large: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  closeModalByEsc: PropTypes.func.isRequired,
};
