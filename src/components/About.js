import React, { useState } from "react"
import photo from "../assets/sarah.JPG"
import DV from "../assets/DV.jpg"
import github from "../assets/GitHub.png"
import linked from "../assets/Linkedin.png"

export default function About() {
    const [currentPhoto, setCurrentPhoto] = useState(photo)

    const handleClick = () => {
        setCurrentPhoto(prevState => prevState === photo ? DV : photo)
    }
    const handleLink = (location) => {
        location === "git" ?
            window.open("https://github.com/SKYang014")
            :
            window.open("https://www.linkedin.com/in/sarah-yang-3b4494132/")
    }
    return (
        <div className="hero min-h-screen bg-base-200" id="about">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img onClick={handleClick} src={`${currentPhoto}`} className="max-w-xs rounded-lg shadow-2xl" />
                <div className="mx-4">
                    <h1 className="text-5xl font-bold">Hello!</h1>
                    <p className="py-6">I'm a software
                        developer with a passion for creating intuitive and
                        user-friendly applications. I have been using computers
                        for most of my life and have strong
                        computer science foundations. In the past year, I have
                        gained practical programming experience through various
                        projects and junior roles, and am always eager to learn
                        and improve my skills.</p>
                    <p className="py-6">
                        I graduated from the University of Wisconsin - Madison
                        with a B.S. in Conservation Biology and a certification
                        in Archaeology.  I've come a long way from there and am
                        thankful for the opportunity to develop a
                        unique perspective and approach to problems. In the
                        past year I secured an associate software developer
                        position and completed two
                        different software development bootcamps specializing
                        in the MERN tech stack and CNET/Angular.
                    </p>

                    <p className="py-6">
                        When I'm not coding, I enjoy crafting murder mysteries for my
                        friends and family to play, walking my cats in their wagon,
                        and going on trips with my friends.
                    </p>
                    <div className="flex justify-center flex-wrap">
                        <button className="btn btn-secondary m-2" onClick={() => { handleLink("link") }}>🚀 Message Me On LinkedIn </button>
                        <button className="btn btn-secondary m-2" onClick={() => { handleLink("git") }}>🐱‍💻 Github</button>
                        {/* <button className="btn btn-secondary ml-auto" >👀 Resume</button> */}
                    </div>
                </div>
            </div>
        </div >
    )
}