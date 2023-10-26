import React, { useEffect, useRef, useState } from "react";

const Modal = (props) => {
  const { children, isOpen, onClose, width, height } = props;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const modalRef = useRef();
  const bgModelRef = useRef();

  const handleCloseModal = (event) => {
    if (event.target === bgModelRef.current) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      setIsModalVisible(true);
      document.addEventListener("mousedown", handleCloseModal);
    } else {
      setIsModalVisible(false);
      document.removeEventListener("mousedown", handleCloseModal);
    }

    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          ref={bgModelRef}
          className={` fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity ${
            isModalVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleCloseModal}
        >
          <div
            style={{ width: width, height: height }}
            className="bg-white rounded-2xl overflow-y-scroll hide-modal-scrollbars relative"
            ref={modalRef}
          >
            {children}
          </div>
        </div>
      )}
      {isOpen && (
        <div
          className={`fixed inset-0 z-40 backdrop-filter backdrop-blur-sm transition-opacity ${
            isModalVisible ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      )}
    </>
  );
};

export default Modal;
