'use client';
import SkillBlock from "./components/SkillBlock.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import Image from 'next/image'
import Link from 'next/link'
 
const imageLoader = () => {
  return `https://picsum.photos/400
  `
}
// const qaPoints = [{name: "Knowledge of Black White and Gray box testing"}, {name: 'Over 2 years experience in manual testing'}, {name: 'Only QA for my team'}]
// const skillPoints = [{name: "Excellent Communicator"}, {name: 'Life-long learner'}, {name: 'Proven skills working independtly'}]
// const softwarePoints = [{name: "Strong foundations in Javascript and Ruby on Rails"}, {name: 'In-Depth knowledge of software development life cycle'}, {name: 'Experience in Swift and full stack development'}]

import { skills, portfolio, aboutMe } from "./data.js";

export default function Home() {
  return (
    <main class="relative">
      <section class="primary-background">
        <div class="absolute top-96 left-24">
          <h1 class="text-7xl mt-20">Laura Antunez</h1>
          <br />
          <h2 class="text-4xl accent">Quality Assurance Engineer</h2>

          <h2 class="text-4xl accent">with Full Stack Knowledge</h2>
        </div>
      </section>
      {/* second page - Skills section */}
      <section class="accent-background">
        <h1 class="text-center title secondary">Skills</h1>
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
      <section>
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
      <section class="accent-background">
        <h1 class="text-center title">About</h1>
      <div class="row">
        <div class="column author-image ml-6">

        <Image
            loader={imageLoader}
            class='rounded-full'
            width={500}
            height={500}
            src='https://picsum.photos/200'
            alt='dummy image'
            />

        </div>
        <div class="column column-right aboutme-content">
          <h1 class="right text-xl">
            {" "}
            {aboutMe.bigText}
            
          </h1>
          <br/>
          <p class="">
            {" "}
            {aboutMe.smallText}
           {" "}
          </p>
        </div>
        <Link href='About'> Read my story</Link>
        {/* <p>read my story</p> */}
      </div>
     
          
      </section>
      <section>
        <h1 class="text-center title">Contact</h1>
      </section>
    </main>
  );
}
