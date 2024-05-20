import { useState } from "react";
import Modal from "react-modal";
import css from "./ModalFilters.module.css";
import SearchFiltersSidebar from "../SearchFiltersSidebar/SearchFiltersSidebar";

const customStyles = {
  overlay: { zIndex: 999 },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "90vh",
    overflow: "auto",
  },
};

function ModalFilter() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={css.modalWindow}>
      <button className={css.openButton} onClick={openModal}>
        Click here to open filter options
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Filter Options"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        preventScroll={false}
      >
        <button className={css.closeButton} onClick={closeModal}>
          Close
        </button>
        <SearchFiltersSidebar />
      </Modal>
    </div>
  );
}
export default ModalFilter;
