import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function DataViewer() {
    const [data, setData] = useState();

    useEffect(() => {
        const dataFetch = async() => {
            const response = await fetch('https://rickandmortyapi.com/api/character/?page=1');
            const data = await response.json();
            let { results, info } = data;
            setData(results);
        };

        dataFetch();
    }, [])

    return (
        <div>
            <div className="flex flex-wrap gap-10 justify-center px-80">
                {data?.map( x => {
                    return <Card key={x.id}  c={x}/>
                })}
            </div>
            <div className="mt-6 text-center">
                Prev 1 2 3 Next 
            </div>
        </div>
    )
}