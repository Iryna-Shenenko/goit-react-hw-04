import css from "./ImageModal.module.css"
import Modal from "react-modal";

const ImageModal = ({isOpen, onClose, selectedImage: { urls, alt_description, description}} )  => {
  return (<Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
            closeTimeoutMS={200}
            contentLabel={description}
      style={{
        content: {
          maxWidth: "600px",
          margin: "auto",
          padding: "20px",
          height: "fit-content",
        },
      }}
    >
          <button className={css.button} onClick={onClose}>Close</button>
          <img className={css.image} src={urls?.regular} alt={alt_description}/>
          {description ? <p className={css.text}>{description}</p> : ""}
      
  
    </Modal>
  );
};
export default ImageModal;
