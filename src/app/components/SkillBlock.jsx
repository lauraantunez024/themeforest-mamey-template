export default function SkillBlock({ type, skillSet }) {
  return (
    
      <div class='w-full items-center'>
        <h1 class='text-3xl text-left pl-6 font-medium self-start' id='skill-type'> {type} </h1>
        <div class='flex flex-row justify-center skill-card'>
          {skillSet.map((skill, index) => (
            <div class="secondary-background skill-shape my-5 mx-4 animation">
              <div class="content accent text-center items-center text-xl py-2 px-4" key={index}>
                {skill}
              </div>
            </div>
          ))}
      
        </div>
      </div>
  );
}