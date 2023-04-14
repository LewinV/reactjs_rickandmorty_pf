import React from "react";

export default function Card({c}){
    return (
        <div className="w-[200px] shadow-md rounded-lg transform transition duration-100 hover:scale-105">
            <div>
                <img className="rounded-t-lg w-[200px] h-[150px]" src={c.image}/>
            </div>
            <div className="flex justify-between py-1 px-2">
                <p className="text-greennormal font-bold">{c.name}</p>
                <p className="text-greennormal">{c.species}</p>
            </div>
            <p className="px-2 text-greennormal">
                { 
                   c.status == "Alive" ? `💚 ${c.status}` :
                   c.status == "Dead" ? `☠️ ${c.status}` : `❓ ${c.status}`
                }
            </p>
        </div>
    )
}