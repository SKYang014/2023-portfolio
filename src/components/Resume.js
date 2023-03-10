import React from "react"
import resume from "../assets/Sarah_Resume2022.pdf"
import jeff from "../assets/Jeff.jfif"
import joe from "../assets/Joe.jfif"
export default function Resume() {
    const linkClick = (name) => {
        if (name === jeff) {
            window.open("https://www.linkedin.com/in/jeffcogswell/")
        }
        else if (name === joe) {
            window.open("https://www.linkedin.com/in/joseph-valente-5b58807a/")
        }
    }
    return (
        <div>
            <h1 className="mb-5 text-5xl font-bold text-center py-14 mt-24">What People Are Saying About Me!</h1>
            <div className="flex justify-center flex-wrap">
                <div className="card w-96 bg-base-100 shadow-xl  border border-base-content m-4">
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src={`${jeff}`} onClick={() => { linkClick(jeff) }} alt="Jeff Cogswell" />
                                </div>
                            </div>
                        </div>
                        <p>Sarah Yang is a former student of mine, and she was
                            easily one of my top students. She has a great
                            attitude and an inquisitive nature. She's a problem
                            solver who often finds the correct answers herself
                            before needing to go ask for help. She's always eager
                            to learn new technologies.</p>
                        <button onClick={() => { linkClick(jeff) }} className="btn bg-accent">

                            <p className="text-right" >
                                Jeff Cogswell, Grand Circus
                            </p>
                        </button>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl  border border-base-content m-4">
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src={`${joe}`} onClick={() => { linkClick(joe) }} />
                                </div>
                            </div>
                        </div>
                        <p>Sarah's dedication to her craft proved to be invaluable.
                            Her professionalism, attention to detail, strong drive
                            for culture, and client satisfaction made her a true asset.
                        </p>
                        <button onClick={() => { linkClick(joe) }} className="btn bg-accent">

                            <p className="text-right" >
                                Joe Valente, Rocket Mortgage
                            </p>
                        </button>
                    </div>
                </div>
                {/* <div className="card w-96 bg-base-100 shadow-xl  border border-base-content mx-4">
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src={`${jeff}`} onClick={() => { linkClick(jeff) }} />
                                </div>
                            </div>
                        </div>
                        <p>Sarah Yang is a former student of mine, and she was
                            easily one of my top students. She has a great
                            attitude and an inquisitive nature. She's a problem
                            solver who often finds the correct answers herself
                            before needing to go ask for help. She's always eager
                            to learn new technologies.</p>
                        <button onClick={() => { linkClick(jeff) }} className="btn bg-accent">

                            <p className="text-right" >
                                Jeff Cogswell, Grand Circus
                            </p>
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}