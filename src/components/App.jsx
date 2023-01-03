import { useState, useEffect } from 'react';

import { fetch } from '../utils/fetch';

import AuthorTitle from './AuthorTitle';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';
import Message from './Message';

export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(null);
  const [pages, setPages] = useState(null);
  const [status, setStatus] = useState('idle'); // idle, resolved, rejected
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [large, setLarge] = useState(null);

  useEffect(() => {
    if (!page) {
      return;
    }

    fetch(query, page).then(data => {
      if (data.pictures.length === 0) {
        setStatus('rejected');
        setLoading(false);
        return;
      }

      setPhotos(prevState => [...prevState, ...data.pictures]);
      setPages(data.pages);
      setStatus('resolved');
      setLoading(false);
    });
  }, [query, page]);

  const onSubmit = event => {
    event.preventDefault();

    const newQuery = event.target.elements.input.value;

    if (newQuery.trim() === '') {
      alert('Type your query!');
      return;
    }

    setPhotos([]);
    setLoading(true);
    setStatus('idle');
    setPage(1);
    setQuery(newQuery);
  };

  const onLoadMore = () => {
    setLoading(true);
    setPage(prevState => prevState + 1);
  };

  const modalHandler = newLarge => {
    setLarge(newLarge);
    setModal(true);
  };

  const closeModal = event => {
    if (event.target === event.currentTarget) {
      setModal(false);
    }
  };

  const closeModalByEsc = () => {
    setModal(false);
  };

  return (
    <>
      <AuthorTitle title="React-HW04_03 @nickgric" />

      <Searchbar onSubmit={onSubmit} />

      {status === 'resolved' && (
        <ImageGallery>
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
        </ImageGallery>
      )}
      {status === 'resolved' && page < pages && (
        <Button title="Load more" onClick={onLoadMore} />
      )}

      {loading && <Loader />}

      {status === 'rejected' && <Message message="Nothing found" />}

      {modal && (
        <Modal
          closeModal={closeModal}
          closeModalByEsc={closeModalByEsc}
          large={large}
        />
      )}
    </>
  );
};
