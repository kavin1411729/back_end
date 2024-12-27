import CurrentCard from "@/components/CurrentCard";
import CurrentDate from "@/components/CurrentDate";
import TemperatureCard from "@/components/TemperatureCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import VoltageCard from "@/components/VoltageCard";

function Home() {
  const today = new Date().toLocaleTimeString();
  return (
    <div className="flex flex-col gap-3">
      <div className="justify-center align-middle flex">
        <h1 className="inline text-2xl font-extrabold">
          IOT BASED MONITORING AND MANAGMENT OF ELECTRIC VEHICLE CHARGING
        </h1>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 py-5">
        <Card className="h-[170px] border-[3px]">
          <CardHeader className="p-4">
            <CardDescription className="font-bold text-lg">Voltage</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center align-middle p-5 font-bold text-4xl">
            <h1>12 V</h1>
          </CardContent>
        </Card>
        <TemperatureCard />
        <CurrentCard />
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2">
        {Array.from([1, 2, 3, 4]).map((val, index) => {
          return <VoltageCard batteryId={val} key={index} />;
        })}
      </div>
      <div className="flex justify-end">
        <Card className="">
          <CardHeader className="p-4">
            <CardDescription className="font-bold text-lg">Suggestion on battery health</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center align-middle flex-col p-5 font-bold text-xl">
            <h1 className="text-green-500 ">Good</h1>
            <CurrentDate />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Home;
