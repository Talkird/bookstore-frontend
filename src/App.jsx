import Button from "./components/ui/Button";
import Navbar from "./components/navbar/Navbar";
import { Github } from "lucide-react";

function App() {
  return (
    <>
      <Navbar />
      <p className="border border-black">test</p>
      <Button> Click me</Button>
      <Button className="flex flex-row gap-2">
        <Github className="h-6 w-6" />
        Click me
      </Button>
    </>
  );
}

export default App;
