import { useEffect, useState } from "react";
import divider from "./assets/pattern-divider-desktop.svg";
import dice from "./assets/icon-dice.svg";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState({ id: "", quote: "" });
  const getAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice({ id: data.slip.id, quote: data.slip.advice });
    } catch (error) {
      console.log("Something Went Wrong", error);
    }
  };
  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <>
      <main className="bg-[#1f2632] h-dvh flex items-center justify-center ">
        <div className="bg-[#4e5d73d2] relative w-96 p-5 flex flex-col items-center">
          <h3 className="text-[#52ffa8]">Advice# {advice.id} </h3>
          <h1 className="text-[28px] font-bold text-center text-[#cee3e9]">
            ❝{advice.quote}❞
          </h1>
          <div className="my-2">
            <img src={divider} alt="" />
          </div>
          <button
            className="bg-[#52ffa8] absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 
                       cursor-pointer p-4 rounded-full"
            onClick={getAdvice}
          >
            <img src={dice} alt="" />
          </button>
        </div>
      </main>
      <div>
        <p>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io/home">Frontend Mentor</a>.
          Coded by Arham Ali.
        </p>
      </div>
    </>
  );
}

export default App;
