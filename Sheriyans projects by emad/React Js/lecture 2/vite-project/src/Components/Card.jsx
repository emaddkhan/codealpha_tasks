import { data } from "autoprefixer";
import React from "react";

function Card() {
  const data = [
    {
      name: "fark hai",
      description: "the antiboy yourbody everybody say chava chava",
    },
    {
      name: "Aur",
      description: "the antiboy yourbody everybody say o re piya o re piya",
    },
    {
      name: "Sham too",
      description: "the antiboy yourbody everybody say sham too tarif me",
    },
  ];
  const downloadHandler = ()=>{alert("hey")};
  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col justify-center items-center gap-4">
      {data.map((elem, index) => (
        <div key={index} className="w-80 song px-3 py-2 bg-zinc-100 rounded-md">
          <h3 className="font-semibold text-xl">{elem.name}</h3>
          <p className="text-xs mt-2">
            {elem.description}
          </p>
          <button onClick={downloadHandler} className="px-2 py-1 rounded bg-green-600 text-zinc-50 mt-2 font-semibold">
            Downlod Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Card;
