import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tabform from "./components/Tabform";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" flex w-full h-screen bg-yellow-300 flex-col items-center justify-center">
      <div>
        <Tabform />
      </div>
    </div>
  );
}

export default App;
