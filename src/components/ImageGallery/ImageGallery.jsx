import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = (data, getModal) => {
  return (
    <ul className={css.list}>
      {data.map((item) => (
        <li className={css.listItem} key={item.id}>
          <ImageCard photo={item} onClick={() => getModal(item)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
