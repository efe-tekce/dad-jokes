import { useState } from "react";

export const CornyJokes = () => {
  const [jokes, setJokes] = useState("");
  const [buttonText, setButtonText] = useState("Have one");

  const fetchJokes = async () => {
    const response = await fetch("https://icanhazdadjoke.com", {
      headers: { Accept: "application/json" },
    });

    const joke = await response.json();
    setJokes(joke.joke);
    setButtonText("More Cringe Please!");
  };
  return (
    <div className="p-12 md:p-24 w-3/4 max-h-[80%] md:mx-auto md:w-2/3 bg-neutral-300 bg-opacity-20 rounded-xl shadow-2xl border border-solid border-emerald-200 border-opacity-10 flex flex-col justify-around items-center absolute space-y-12 md:space-y-24 ">
      <p className="text-center text-xl md:text-2xl font-semibold text-teal-800">
        Here are some corny dad jokes to make your day!
      </p>
      <p className="text-center text-2xl overflow-y-scroll md:text-3xl font-bold text-indigo-700">
        {jokes}
      </p>
      <button
        className=" bg-gray-200 hover:scale-110 hover:opacity-100 transition duration-300 opacity-80 px-4 py-2 rounded-lg outline-none text-teal-400 font-semibold text-xl"
        onClick={fetchJokes}
      >
        {buttonText}
      </button>
    </div>
  );
};
