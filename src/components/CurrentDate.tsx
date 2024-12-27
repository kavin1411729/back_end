import React, { useCallback, useEffect, useState } from "react";

function CurrentDate() {
  const [currentTime, setCurrentTime] = useState<string>();
  const getCurrentTime = useCallback(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const formattedTime = today.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    setCurrentTime(`${formattedDate} ${formattedTime}`);
  }, []);

  useEffect(() => {
    setInterval(getCurrentTime, 1000);
  }, [getCurrentTime]);
  return <div>{currentTime}</div>;
}

export default CurrentDate;
