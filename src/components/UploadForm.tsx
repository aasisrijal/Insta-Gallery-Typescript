import React, { useState } from "react";

import ProgressBar from "./ProgressBar";

const UploadForm:React.FC = () => {
  const [file, setFile] = useState<File | undefined>();
  const [error, setError] = useState<string | null>(null);

  const types = ["image/png", "image/jpeg"];

  const setFunction = (file: File | undefined) => {
      setFile(file)
  }

  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
        return
      }
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(undefined);
      setError("Please select an image file of png or jpeg");
    }
  };
  return (
    <form>
        {error && <h3>{error}</h3>}
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFunction} />}
      </div>
    </form>
  );
};

export default UploadForm;
