import css from "./ImageCard.module.css";

const ImageCard = (data, onClick) => {
  return (
    <div onClick={onClick}>
      <img
        src={data.urls.small}
        alt={data.alt_description}
        className={css.image}
      />
    </div>
  );
};
export default ImageCard;
