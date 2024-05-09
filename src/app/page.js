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
    <main class="relative" id='home'>
      <section class="primary-background">
        <div class="absolute top-96 left-24">
          <h1 class="text-7xl mt-12">Laura Antunez</h1>
          <br />
          <h2 class="text-4xl accent">Quality Assurance Engineer</h2>

          <h2 class="text-4xl accent">with Full Stack Knowledge</h2>
        </div>
      </section>
      {/* second page - Skills section */}
      <section class="accent-background" id='skills'>
        <h1 class="text-center title">Skills</h1>
        <div class="flex flex-col">
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
      <section id='projects'>
        <h1 class="text-6xl text-center title mb-10">Projects</h1>
        <div class="flex flex-wrap flex-row justify-center items-center">
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
        <h1 class="text-center title mb-24">About</h1>
      <div class="row">
        <div class="column author-image ml-6">

        <Image
            loader={imageLoader}
            class='rounded-full'
            width={500}
            height={500}
            src='http://placekitten.com/200/300'
            alt='dummy image'
            />

        </div>
        <div class="column flex column-right aboutme-content">
          <h1 class="right text-3xl">
            {" "}
            {aboutMe.bigText}
            
          </h1>
          <br/>
          <p class="text-xl">
            {" "}
            {aboutMe.smallText}
           {" "}
          </p>
          <Link href='About'> <button class='skill-shape animation justify-self-end ml-60 secondary-background accent px-3 py-2 mt-4 '>Read my story </button></Link>

        </div>
        {/* <p>read my story</p> */}
      </div>
     
          
      </section>
      <section id='contact'>
        <h1 class="text-center title">Contact</h1>
      </section>
    </main>
  );
}
