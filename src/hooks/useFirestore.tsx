import { useState, useEffect } from "react";

import { fireStorage } from "../firebase/config";

const useFirestore = (collection:any) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = fireStorage
      .collection(collection)
      .orderBy("createAt", "desc")
      .onSnapshot((snap:any) => {
        let documents:any[] = [];
        snap.forEach((doc:any) => {
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
