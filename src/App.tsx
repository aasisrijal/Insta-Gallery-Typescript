import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

const App:React.FC = () => {
  const [selectImg, setSelectImg] = useState<string | undefined>(undefined);

  return (
    <div className="App">
      <Header />
      <UploadForm />
      <ImageGrid setSelectImg={setSelectImg} />
      {selectImg && <Modal selectImg={selectImg} setSelectImg={setSelectImg} />}
    </div>
  );
}

export default App;
