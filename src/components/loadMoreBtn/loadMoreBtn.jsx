import css from "./loadMoreBtn.module.css";
const LoadMoreBtn = ( {handleLoadMore }) => {
  return<button className={css.button} onClick={handleLoadMore}>
      Load more
    </button>
};

export default LoadMoreBtn;
