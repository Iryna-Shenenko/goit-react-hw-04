
import fetchImages from "./Api/api";
import SearchBar from "./components/ SearchBar/ SearchBar";
import ImageGallery from "./components/imageGallery/imageGallery";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/loadMoreBtn/loadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState({});
  const [page, setPage] = useState(0);
  const [pagination, setPagination] = useState(false);
  const [totalPages, setTotalPages] = useState (0);
  const [loader, setLoader] = useState(false);
  const [results, setResults] = useState ([]);
  const [firstLoad, setFirstLoad] = useState(true);
  const [query, setQuery] = useState ("");
  const [perPage, setPerPage] = useState (10);
  const [error, setError] = useState({
    isActive: false,
    errCode: "",
    errMsg: "",
  });



  const handleModal = (imageData) => {
  setSelectedImage(imageData);
  toggleIsOpen();
return;
};
  const toggleIsOpen = () => {
  setIsModalOpen(!isModalOpen);
};
const handleLoadMore = () => {
  setPage(page + 1);
  setPagination (true);
  return;
};
const handleQuery = (query, perPage) => {
  if (perPage !== "") setPerPage(perPage);
  setFirstLoad(true);
  setQuery(query);
  setPagination(false);
  setPage(1);
  return;
};

useEffect (() =>{
  if (!query) return;
  (async () => {
    try {
      setLoader(true);
      setError({isActive: false, errCode: "", errMsg: ""});
      setTotalPages(0);
      const data = await fetchImages(query, perPage, page);
      if (pagination) {
        setResults((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
        return;
      }
      setTotalPages(data.total_pages);
      setResults(data.results);
    } catch (err) {
      setError({
        isActive: true,
        errCode: err.status,
        errMsg: err?.response.data.errors.join(","),
      });
    }finally{ setLoader(false), setFirstLoad(false);}
  }) ();
}, [query, page, pagination, perPage]);


 

  return (
    <div>
      <SearchBar handleQuery={handleQuery}  query={query} id="gallery" />
      { firstLoad ? ( "") : results.length > 0? (
        <ImageGallery data={results} handleModal={handleModal} />
      ) : (
        <h2>Image not Found ...</h2>
      )}
{error.isActive &&
  <ErrorMessage massage={error.errMsg} />
  }
{loader && <Loader />}
{page < totalPages && <LoadMoreBtn handleLoadMore={handleLoadMore} />} 

      <ImageModal
        isOpen={isModalOpen}
        onClose={toggleIsOpen}
        selectedImage={selectedImage}
      />
    </div>
  );
};

export default App;
