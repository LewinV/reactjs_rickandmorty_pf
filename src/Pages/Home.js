import React from "react";
import DataViewer from "../Components/DataViewer";

export default function Home()
{
    return (
        <div className="">
            <p className="text-greennormal font-bold text-2xl mb-12 text-center">Characters</p>
            <DataViewer />
        </div>
    )
}

// flex flex-col items-center