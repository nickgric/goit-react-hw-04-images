import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ photos, modalHandler }) => {
  return (
    <ul className={styles.gallery}>
      {photos.map(({ small, large, id }) => {
        return (
          <ImageGalleryItem
            modalHandler={modalHandler}
            small={small}
            large={large}
            key={id}
            id={id}
          />
        );
      })}
    </ul>
  );
};
ImageGallery.propTypes = {
  photos: PropTypes.array.isRequired,
  modalHandler: PropTypes.func.isRequired,
};

export default ImageGallery;
