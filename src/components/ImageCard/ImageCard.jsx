import css from "./ImageCard.module.css";

const ImageCard = ({ image, handleModal }) => {
 
 
 return <div>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => handleModal(image)}/>
    </div>
}
export default ImageCard;
