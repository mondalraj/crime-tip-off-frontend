import "./App.css";
import "./App.css";
import MainImg from "./MainImg";
import Navbar from "./Navbar";
import Form from "./Form";
import { useState } from "react";


function App() {

  const [clicked, setClicked] = useState(false);

  return (
    <div className="App">
        <Navbar />

        <div className="flex flex-col justify-center items-center md:flex-row px-16 py-16">
          <div className="flex flex-col h-screen justify-center md:basis-1/2 pb-16 lg:pl-16 lg:-ml-20">
            <h1 className="text-4xl lg:text-5xl leading-normal lg:leading-snug font-normal">
              Tip-off crime related information <br />
              <span className="text-orange-400 font-bold italic">
                Safely
              </span>
              <br />
              <span className="font-semibold">and</span> <br />
              <span className="italic">Without</span>{" "}
              <span className="text-orange-400 font-bold italic">fear</span>
            </h1>

              <a href="#form">
                <button 
                onClick={() => {setClicked(true)&&window.location.replace("/#form")} } 
                type="button"
                class="px-8 py-3 w-40 my-8 bg-orange-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out"
              >
                Share Info
              </button>
              </a>
          </div>

          <div id="form">
            { clicked ? <Form /> : <MainImg/> }
          </div>
          
        </div>

    </div>
  );
}

export default App;
