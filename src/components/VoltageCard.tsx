import useMockCurrentVoltage from "@/hooks/useMockCurrentVoltage";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import useLiveData from "@/hooks/useLiveData";

function VoltageCard({ batteryId }: { batteryId: number }) {
  // const voltage = useLiveData(`battery/voltage/cell${batteryId}`);
  const voltage = useMockCurrentVoltage(batteryId);

  return (
    <Card className="h-[170px] border-[3px]">
      <CardHeader className="p-4">
        <CardDescription className="font-bold text-lg">{`Cell ${batteryId} Voltage`}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center align-middle p-2 font-bold text-4xl">
        <h1>{voltage}</h1>
      </CardContent>
    </Card>
  );
}

export default VoltageCard;
