'use client';
import SkillBlock from "./components/SkillBlock.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import Image from 'next/image'
import Link from 'next/link'
 
const imageLoader = () => {
  return `http://placekitten.com/200/200`
}
// const qaPoints = [{name: "Knowledge of Black White and Gray box testing"}, {name: 'Over 2 years experience in manual testing'}, {name: 'Only QA for my team'}]
// const skillPoints = [{name: "Excellent Communicator"}, {name: 'Life-long learner'}, {name: 'Proven skills working independtly'}]
// const softwarePoints = [{name: "Strong foundations in Javascript and Ruby on Rails"}, {name: 'In-Depth knowledge of software development life cycle'}, {name: 'Experience in Swift and full stack development'}]

import { skills, portfolio, aboutMe } from "./data.js";

export default function Home() {
  return (
    <main class="w-full" id=''>
      <section class="primary-background h-screen">
        <div class="landing-content">
          <h1 class="text-7xl mt-12">Laura Antunez</h1>
          <br />
          <h2 class="text-4xl accent">Quality Assurance Engineer</h2>

          <h2 class="text-4xl accent">with Full Stack Knowledge</h2>
        </div>
      </section>
      {/* second page - Skills section */}
      <section class="accent-background scrollable" id='skills'>
        <h1 class="text-center title">Skills</h1>
        <div class="flex flex-col flex-wrap skill-section">
          {skills.map((skillData, index) => (
            <SkillBlock
              key={index}
              type={skillData.type}
              skillSet={skillData.skillSet}
            />
          ))}
        </div>
      </section>
      {/* third page - projects section */}
      <section class='w-full' id='projects'>
        <h1 class="text-6xl text-center title mb-10">Projects</h1>
        <div class="flex flex-wrap flex-row justify-items-center items-center ml-14 project-section">
          {portfolio.map((project, index) => (
            <ProjectCard
              key={index}
              class=''
              title={project.title}
              description={project.description}
              subtitle={project.subtitle}
              deploymentURL={project.repoURL}

            />
          ))}
        </div>
      </section>
      <section class="accent-background" id='about'>
        <h1 class="text-center title">About</h1>
      <div class="flex flex-row about-section">
        <div class=" author-image ">

        <Image
            // loader={imageLoader}
            class='rounded-full inline'
            width={400}
            height={400}
            src='/headshot.png'
            alt='dummy image'
            />

        </div>
        <div class="w-full aboutme-content">
          <h1 class="text-center text-3xl">
            {" "}
            {aboutMe.bigText}
            
          </h1>
          <br/>
          <p class="text-xl text-center">
            {" "}
            {aboutMe.smallText}
           {" "}
          </p>
          <Link href='About' class='text-center about-button'> <button class='skill-shape animation justify-self-end secondary-background accent px-3 py-2 mt-4 text-center'>Read my story </button></Link>

        </div>
        {/* <p>read my story</p> */}
      </div>
     
          
      </section>
      <section class='' id='contact'>
        <h1 class="text-center title">Contact</h1>
      </section>
    </main>
  );
}
