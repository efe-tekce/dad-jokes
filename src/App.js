import { CornyJokes } from "./components/CornyJokes";

function App() {
  return (
    <div className="bg-teal-500 h-screen relative flex items-center justify-center overflow-hidden">
      <div className="background bg-[url('/src/Family.svg')] h-full w-full bg-no-repeat bg-center flex-none opacity-60"></div>
      <CornyJokes />
    </div>
  );
}

export default App;
