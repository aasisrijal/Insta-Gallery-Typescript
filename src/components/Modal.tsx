import React from "react";
import { motion } from "framer-motion";


interface ModalType {
  selectImg: string;
  setSelectImg: (img: string|undefined) => void
}

const Modal: React.FC<ModalType> = ({ selectImg, setSelectImg }) => {
  const handleClick = (e: any | undefined) => {
    if (e!.target.classList.contains("backdrop")) {
      setSelectImg(undefined);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectImg}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};


export default Modal;