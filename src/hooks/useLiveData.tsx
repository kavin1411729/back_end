import { useState, useEffect } from "react";
import { db } from "../utils/firebase";
import { ref, onValue, query, limitToLast } from "firebase/database";

function useLiveData(dbPath: string): number | null {
  const [data, setData] = useState<number | null>(null);

  useEffect(() => {
    if (!dbPath) return;

    const currentRef = query(ref(db, dbPath), limitToLast(1));

    const unsubscribe = onValue(currentRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();

        const lastEntry = Object.values(data)[0];
        setData(lastEntry);
      }
    });

    return () => unsubscribe();
  }, [dbPath]);

  return data;
}

export default useLiveData;
