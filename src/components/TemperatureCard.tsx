import useMockCurrentVoltage from "@/hooks/useMockCurrentVoltage";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import useLiveData from "@/hooks/useLiveData";

function TemperatureCard() {
  // const voltage = useLiveData(`battery/temperature/`);
  const voltage = 21;

  return (
    <Card className="h-[170px] border-[3px]">
      <CardHeader className="p-4">
        <CardDescription className="font-bold text-lg">Temperature</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center align-middle p-5 font-bold text-4xl">
        <h1>{voltage}</h1>
      </CardContent>
    </Card>
  );
}

export default TemperatureCard;
