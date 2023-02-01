import React from 'react'
import bridge from '../assets/bridge.jpg'
export default function Hero() {
    return (
        <div className="hero min-h-screen " style={{ backgroundImage: `url(${bridge})` }}>
            <div className="hero-overlay bg-opacity-20 bg-gradient-to-t from-neutral"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md ">
                    <h1 className="mb-5 text-5xl font-bold">Sarah Yang</h1>
                    <p className="mb-5 ">Full Stack Developer Sacramento, CA</p>
                    <div className="btn-group">
                        <a href="#about"><button className="btn">About Me</button></a>
                        <a href="#portfolio"><button className="btn btn-active">Projects</button></a>
                    </div>

                </div>
            </div>
        </div>
    )
}