import React from "react"
import github from "../assets/GitHub.png"
export default function Project(props) {
    let features = props.features
    console.log(props)
    const featureElement =
        features.map(item => {
            return <li key={item}>{item}</li>
        })

    const demoClick = () => {
        window.open(`${props.demo}`);
    }
    const gitClick = () => {
        window.open(`${props.githubUrl}`);
    }

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure onClick={demoClick}><img src={`${props.img}`} alt={`${props.img}`} /></figure>
            <div className="card-body bg-secondary">
                <h2 className="card-title">{props.title}</h2>
                <p className="py-3">{props.description}</p>
                <div>
                    Features:
                    {featureElement}
                </div>
                <div className="card-actions justify-end">
                    <button onClick={demoClick} className="btn btn-primary">Live Demo</button>
                    {props.id === 2 ? "" : <button onClick={gitClick} className="btn btn-primary">
                        <img src={`${github}`} alt={`${github}`} />
                    </button>}
                </div>
            </div>
        </div>
    )
}