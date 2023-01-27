import poken from "./assets/poken.png"
import run from "./assets/run.jpg"
import social from "./assets/social.jpg"

export default [
    {
        id: 1,
        title: "PokeNav Online",
        githubUrl: "https://github.com/SKYang014/poke-center",
        demo: "https://pokenav-online.onrender.com/",
        img: (poken),
        description: "Inspired by the recent pokemon release and the overlooked 3rd pokemon generation, this social media application allows users to create accounts, thoughts, and reactions, add eachother as friends, and manage their own Gen 3 pokemon team,.",
        features: ["React", "GraphQL", "Apollo/Express Server", "MongoDB", "BCrypt/JSON-Webtokens for Auth", "Render Deployment"]
    },
    {
        id: 2,
        title: "EZ Postboard",
        githubUrl: "",
        demo: "http://3.144.7.34/",
        img: (social),
        description: "This app allows users to quickly post thoughts with photos, utilizing Amazon Web Services such as Simple Storage Service (S3) for image hosting, Identity Access Management (IAM), Elastic Compute Cloud (EC2), and Virtual Private Cloud (VPC).",
        features: ["React", "AWS Services"]
    },
    {
        id: 3,
        title: "Run Buddy",
        githubUrl: "https://github.com/SKYang014/run-buddy",
        demo: "https://skyang014.github.io/run-buddy/",
        img: (run),
        description: "This was a fun demonstration of front-end CSS and HTML with an eyecatching hero and CTA component.",
        features: ["HTML", "CSS"]
    }
]