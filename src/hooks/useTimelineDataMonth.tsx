import { useState, useEffect } from "react";
import { db } from "../utils/firebase";
import { ref, onValue, query, limitToLast } from "firebase/database";

function useTimelineDataMonth(dbPath: string): object | null {
  const [data, setData] = useState<object | null>(null);

  useEffect(() => {
    if (!dbPath) return;

    const currentRef = query(ref(db, dbPath), limitToLast(10));

    const unsubscribe = onValue(currentRef, (snapshot) => {
      if (snapshot.exists()) {
        const rawData = snapshot.val();

        // Transform the data into an object with key-value pairs
        const formattedData = Object.entries(rawData).reduce((acc, [key, value]) => {
          const unixTimestamp = parseInt(key); // Assumes value is a Unix timestamp in seconds
          const readableTime = new Date(unixTimestamp * 1000).toLocaleString("en-US", {
            month: "short",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          });

          acc[readableTime] = value as string;
          return acc;
        }, {} as { [key: string]: string }); // Map to readable strings

        setData(formattedData);
      }
    });

    return () => unsubscribe();
  }, [dbPath]);

  return data;
}

export default useTimelineDataMonth;
