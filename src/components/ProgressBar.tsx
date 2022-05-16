import React, { useEffect } from "react";
import { motion } from "framer-motion";

import storage from "../hooks/useStorage";

interface ProgressBarProps {
  file: File,
  setFile: (file: File | undefined) => void
}

const ProgressBar: React.FC<ProgressBarProps> = ({ file, setFile }) => {
  const { url, progress } = storage(file);

  useEffect(() => {
    if (url) {
      setFile(undefined);
    }
  }, [url, setFile]);
  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    />
  );
};


export default ProgressBar;
