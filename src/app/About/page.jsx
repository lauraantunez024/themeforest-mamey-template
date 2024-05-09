// testimonials, resume, my story expanded
import { aboutMe } from "../data"
export default function About() {
    return (
        <p class='aboutme-content'> {aboutMe.expandedText} </p>
    )

}