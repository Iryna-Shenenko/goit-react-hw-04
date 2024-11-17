import Modal from "react-modal";

const ImageModal = (isOpen, onClose, urls, alt_description)  => {
  return<Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          maxWidth: "600px",
          margin: "auto",
          padding: "20px",
          height: "fit-content",
        },
      }}
    >
          <button onClick={onClose}>Close</button>
          <img src={urls?.regular} alt={alt_description}/>
      
  
    </Modal>
};
export default ImageModal;
