import React from "react"

export default function Contact() {
    return (
        <section className="contact--container">
            <h2>Contact Me:</h2>
            <input required placeholder="name" id="contact--name" />
            <input required placeholder="email" id="contact--email" />
            <input required placeholder="message" id="contact--message" />
            <button className="connect-btn">Let's Chat</button>
        </section>
    )
}