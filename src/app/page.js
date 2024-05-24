"use client";
import SkillBlock from "./components/SkillBlock.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import Image from "next/image";
import Link from "next/link";


import { skills, portfolio, aboutMe, contacts } from "./data.js";

export default function Home() {
  return (
    // --------------landing page-----------------
    <main>
      <section class="primary-background h-screen">
        {/* ~~~~~~~~~~~~Use this landing content container if you go by multiple roles ~~~~~~~~*/}
        <div class="landing-content">
          <h1 class="text-6xl mt-24">Author Name</h1>
          <div class="landing-animation relative">
            <span class="text-3xl accent spinning absolute ">
              Photographer{" "}
            </span>
            <span class="text-3xl accent spinning absolute ">
              Social Media Coordinator{" "}
            </span>
            <span class="text-3xl accent spinning absolute ">Video Editor</span>
            <span class="text-3xl accent spinning absolute ">
              Content Creator
            </span>
            <span class="text-3xl accent spinning absolute ">
              Your future employee ;)
            </span>
          </div>
        </div>

        {/* ~~~~~~~~Use the landing content container below if you have one profession but several special skills~~~~~~ */}

        {/* <div class="landing-content">
          <h1 class="text-6xl mt-24">Author Name</h1>
          <h1 class="text-3xl accent pt-4">Quality Assurance Engineer</h1>
          <br />
          <h1 class='secondary text-lg'> with knowledge of:</h1>
          <div class='landing-animation relative'>

          <span class="text-3xl accent spinning absolute ">Photographer </span>
          <span class="text-3xl accent spinning absolute ">Social Media Coordinator </span>
          <span class="text-3xl accent spinning absolute ">Video Editor</span>
          <span class="text-3xl accent spinning absolute ">Content Creator</span>
          <span class="text-3xl accent spinning absolute ">Full Stack Development</span>
          </div> */}
      </section>
      {/* ----------second section - Skills ------------- */}
      <section class="accent-background scrollable pb-12" id="skills">
        <h1 class="text-center title">Skills</h1>
        <div class="flex flex-col items-center text-center gap-4">
          {skills.map((skillData, index) => (
            <SkillBlock
              key={index}
              type={skillData.type}
              skillSet={skillData.skillSet}
            />
          ))}
        </div>
      </section>
      {/* ------------- third section - projects --------------- */}
      <section class="w-full pb-12" id="projects">
        <h1 class="text-6xl text-natural-brown text-center title pt-6 mb-10">
          Projects
        </h1>
        <div class="flex flex-wrap flex-row gap-16 justify-center items-center project-section">
          {portfolio.map((project, index) => (
            <ProjectCard
              key={index}
              class=""
              title={project.title}
              description={project.description}
              subtitle={project.subtitle}
              siteUrl={project.siteUrl}
            />
          ))}
        </div>
      </section>
      {/* 4th section - about me section */}
      <section class="accent-background" id="about">
        <h1 class="text-center title">About</h1>
        <div class="flex flex-row about-section items-center">
          <div class=" author-image ">
            <Image
              class="rounded-full inline"
              width={400}
              height={400}
              src="/placeholder.jpeg"
              alt="dummy image"
            />
          </div>
          <div class="w-full aboutme-content">
            <h1 class="text-center primary text-3xl"> {aboutMe.bigText}</h1>
            <br />
            <p class="text-xl primary text-center"> {aboutMe.smallText} </p>
          </div>
        </div>
      </section>
      {contacts.map((contact, index) => (
        <footer class="pb-12" id="contact">
          <h1 class="text-center text-4xl py-4">Want to work together?</h1>
          <div class="flex flex-row flex-wrap justify-evenly bottom-links text-2xl text-accent">
            <p>{contact.email}</p>
            <a
              class="hover:text-natural-brown"
              href={contact.LinkedIN}
              target="_blank"
              key={index}
            >
              LinkedIn
            </a>
            <a
              class="hover:text-natural-brown"
              href={contact.Github}
              target="_blank"
            >
              Medium
            </a>
            <a
              class="hover:text-natural-brown"
              href={contact.Resume}
              target="_blank"
            >
              Resume
            </a>
            {/* <a href=''> additional links</a> */}
            {/* <a href=''> if you want them</a> */}
            {/* <a href=''> just add link to href</a> */}
          </div>
        </footer>
      ))}
    </main>
  );
}
