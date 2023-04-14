import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function DataViewer() {
    const apiPath = 'https://rickandmortyapi.com/api/character?page1';
    const [data, setData] = useState();
    const [inf, setInf] = useState();

    const dataFetch = async (path = apiPath) => {
        const response = await fetch(path);
        const data = await response.json();
        let { results, info } = data;
        setData(results);
        setInf(info);
    };

    useEffect(() => {
        dataFetch();
    }, [])

    return (
        <div>
            <div className="mt-6 mb-4 text-center">
                { inf?.prev  ? <button className="mx-5 text-greennormal font-bold transform transition duration-100 hover:scale-105" onClick={(e) => dataFetch(inf.prev)}>&lt; Prev</button> : null}
                { inf?.next  ? <button className="mx-5 text-greennormal font-bold transform transition duration-100 hover:scale-105" onClick={(e) => dataFetch(inf.next)}>Next &gt;</button> : null}
            </div>
            <div className="flex flex-wrap gap-10 justify-center px-80">
                {data?.map(x => {
                    return <Card className="animate__fadeInLeft" key={x.id} c={x} />
                })}
            </div>
        </div>
    )
}