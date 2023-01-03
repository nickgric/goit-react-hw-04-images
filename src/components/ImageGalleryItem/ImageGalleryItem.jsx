import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ small, large, id, modalHandler }) => {
  return (
    <li onClick={() => modalHandler(large)} className={styles.item} key={id}>
      <img src={small} name={id} alt="Something interesting" />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  small: PropTypes.string.isRequired,
  large: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  modalHandler: PropTypes.func.isRequired,
};
