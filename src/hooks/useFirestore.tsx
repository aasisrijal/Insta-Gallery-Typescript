import { useState, useEffect } from "react";

import { fireStorage } from "../firebase/config";

const useFirestore: React.FC = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = fireStorage
      .collection(collection)
      .orderBy("createAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });

        setDocs(documents);
      });

    // For unmounting the image grids
    return () => unsub();
  }, [collection]);

  return { docs };
};


export default useFirestore;
