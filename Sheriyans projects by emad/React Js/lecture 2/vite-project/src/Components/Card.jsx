import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1742240216264-f0aac25ef4ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
      name: "Laptop Wala",
      description:
        "The internet’s source for visuals.Powered by creators everywhere.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1743385779331-487e8391bf08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
      name: "Books",
      description:
        "The internet’s source for visuals.Powered by creators everywhere.",
      instock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1744360820043-59b729149f7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
      name: "Car on road",
      description:
        "The internet’s source for visuals.Powered by creators everywhere.",
      instock: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1726607288637-a646ddd3814a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
      name: "Mobile Payment",
      description:
        "The internet’s source for visuals.Powered by creators everywhere.",
      instock: true,
    },
  ];
  return (
    <div className="w-full flex items-center justify-center gap-10 h-screen bg-zinc-200">
      {data.map((elem, index) => (
        <div
          key={index}
          className="w-52 bg-zinc-100 rounded-md overflow-hidden"
        >
          <div className="w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h1 className="font-semibold">{elem.name}.</h1>
            <p className="text-xs mt-3 ">{elem.description}</p>
            <button className={`px-2 py-1 ${elem.instock ? "bg-blue-600" :"bg-red-600"} rounded-sm text-zinc-100 mt-4 text-xs`}>
              {elem.instock ? "In stock" : "Out of Stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;

//bhai class me agr logic liknhi ho toh sari classes select kro or unko {}me rkhdo or take hum string pass kr ske toh ``back tag k undr 
//classes rkhein os jis class k sath khelna hai ${} toh iske undr logic likhain ge or wohh class pass krdein ge 