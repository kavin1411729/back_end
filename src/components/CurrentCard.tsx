import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import useLiveData from "@/hooks/useLiveData";

function CurrentCard() {
  // const current = useLiveData(`battery/current/`);
  const current = 3;

  return (
    <Card className="h-[170px] border-[3px]">
      <CardHeader className="p-4">
        <CardDescription className="font-bold text-lg">Current</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center align-middle p-5 font-bold text-4xl">
        <h1>{current}</h1>
      </CardContent>
    </Card>
  );
}

export default CurrentCard;
