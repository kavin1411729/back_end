import { useState, useEffect } from "react";

function useMockCurrentVoltage(batteryId: number) {
  const [voltage, setVoltage] = useState<string | null>(null);

  useEffect(() => {
    if (!batteryId) return;

    // Initial voltage value
    setVoltage(() => generateRandomVoltage());

    // Update voltage every 10 seconds
    const intervalId = setInterval(() => {
      setVoltage(generateRandomVoltage());
    }, 10000);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, [batteryId]);

  // Mock function to generate a random voltage value
  function generateRandomVoltage() {
    return (Math.random() * (6 - 3) + 3).toFixed(2); // Generates a voltage between 11.6V and 14.4V
  }

  return voltage;
}

export default useMockCurrentVoltage;
