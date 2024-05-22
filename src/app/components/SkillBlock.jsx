import {
  ChevronDoubleDownIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import React, { useState, useEffect } from "react";

export default function SkillBlock({ type, skillSet }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showSkills = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div class="w-full items-evenly">
      {isMobile ? (
        <button
          type="button"
          class="skills-title animation text-accent bg-secondary p-4 m-2"
          onClick={showSkills}
        >
          {" "}     
          <h1
            class="text-2xl text-center font-medium self-start"
            id="skill-type"
          >
            {type}{" "}
          </h1>
        </button>
      ) : (
        <h1
          class="text-3xl text-left pl-6 font-medium self-start"
          id="skill-type"
        >
          {type}{" "}
        </h1>
      )}
      <div class="flex flex-row justify-center skill-card">
        {skillSet.map((skill, index) => (
          <div
            class="secondary-background skill-shape my-5 mx-4 animation"
            style={{
              display: isMobile && !isVisible ? "none" : "inline-block",
            }}
          >
            <div
              class="content accent text-center items-center text-xl py-2 px-4"
              key={index}
            >
              {skill}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
