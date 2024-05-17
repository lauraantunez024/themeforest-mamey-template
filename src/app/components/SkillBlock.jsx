export default function SkillBlock({ type, skillSet }) {
  return (
    
      <div class=''>
        <h1 class='text-3xl flex flex-col text-left font-medium pl-12'> {type} </h1>
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