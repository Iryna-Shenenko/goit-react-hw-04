import "./App.css";
import { fetchArticlesWithTopic } from "./api";
import SearchBar from "./components/ SearchBar/ SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/loadMoreBtn/loadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Modal from "react-modal";
import { useState } from "react";

const App = () => {
  Modal.setAppElement("#root");

  const [photos, setPhotos] = useState([]);
  const [loader, setLoader] = useState(false);
  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  async function fetchPhotos(newTopic) {
    setTopic(newTopic);
    setPage(1);
    setPhotos([]);
    setError(false);
    try {
      setLoader(true);
      const data = await fetchArticlesWithTopic(newTopic);
      setPhotos(data);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoader(false);
    }
  }

  async function addPhotos() {
    const nextPage = page + 1;
    try {
      setLoader(true);
      const data = await fetchArticlesWithTopic(topic, nextPage);
      setPhotos((prevImages) => [...prevImages, ...data]);
      setPage(nextPage);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoader(false);
    }
  }

  return (
    <div>
      <SearchBar onSearch={fetchPhotos} />
      {error ? (
        <ErrorMessage />
      ) : (
        <ImageGallery data={photos} getModal={openModal} />
      )}

      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        selectedImage={selectedImage}
      />
      {loader && <Loader />}
      {photos.length > 0 && <LoadMoreBtn onAdd={addPhotos} />}
    </div>
  );
};

export default App;
