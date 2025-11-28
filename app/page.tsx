import { Button } from "@/components/ui/button";
import { Chromium } from "lucide-react";


export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Button variant='default' size='lg'>
        <Chromium />Hello</Button>
    </div>
  );
}
