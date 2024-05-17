// testimonials, resume, my story expanded
'use client';
import { aboutMe } from "../data";
import { useEffect, useRef } from 'react';


// import resume from '../../../public/resume.pdf'

export default function About() {

	
  return (
    <main class=''>
      <section class='px-4 mx-4'>
        <h1 class="title text-center"> My Story</h1> 
<div class='aboutme-shape secondary-background mx-12 mt-69 pt-6'>

    {aboutMe.expandedText.map((about, index)=>(
        <div class=''> 
                <p key={index} class="px-4 mx-6 accent text-lg"> {about}
             </p>
             <br/>
             
        </div>
        ))}
</div>
      </section>
      <section>
      <h1 class="title text-center"> Testimonial</h1> 

      </section>
      
      <section>
      <h1 class="title text-center"> Resume</h1> 
     
      </section>
    </main>
  );
}


// A great inventor (guy from epicurious), talks about the importance of thinking about an audience when designing. He says he doesn't care about the average consumer. he says "who's the tallest and shortest. who's the weakest who's the strongest." To me, being a QA means the same thing. The code can think about the average consumer. The developer, the product owner can. but I'm thinking about the spectrum, im thinking of everyone. 