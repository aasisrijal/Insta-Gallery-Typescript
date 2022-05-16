import { useState, useEffect } from "react";

import { storage, fireStorage, timestamp } from "../firebase/config";

const useStorage = (file:File) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // References to file
    const storageRef = storage.ref(file.name);
    const collectionRef = fireStorage.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap:any) => {
        let percent = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percent);
      },
      (err:any) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createAt = timestamp();
        collectionRef.add({ url, createAt });
        setUrl(url);
      }
    );
  }, [file]);
  return { progress, url, error };
};


export default useStorage;
