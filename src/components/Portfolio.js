import React from "react"
import data from "../projectlist"
import Project from "./Project"

export default function Portfolio() {
    console.log(data)
    const projects = data.map(item => {
        return (
            <Project
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <div className="flex flex-col content-center justify-center" id="portfolio">
            {/* <h1 className="mb-5 text-5xl font-bold py-3">Projects</h1> */}
            <div className="flex flex-row justify-around content-center ">
                {projects}
            </div>
        </div>
    )
}