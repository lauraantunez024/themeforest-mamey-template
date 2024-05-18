


// import SexEdMap from './images/SexEdMap.png';
// import EComm from './images/ecomm_api.png';
// import teamBuilder from './images/team-builder.png';
// import weatherDash from './images/weather-dashboard.png';
// import textEditor from './images/text-editor.png';
// import READMEgen from './images/README-generator.png';
// import Jacob from './images/js.png';

export const aboutMe = {
    bigText: 'Hello, pleased to meet you. My name is Laura and thank you for taking the time to check out my page!',


    smallText: `I am a QA that is always looking to sharpen and expand my skills. I began my tech journey shortly after graduating from Florida International University with a Bachelor of Arts in Journalism. Originally I planned on using Python for data science to strengthen my reporting skills, but along the way fell in love with the solutions oriented nature of computer programming.`,
    
   expandedText: [ 
    // `Being an extreme minority in tech - woman, lgbtq+, type 1 diabetes since 6 - disabled - and born not in this country.`
    `After completing the data science course that included sql, web scraping, A/B testing and data visualizations, I used this knowledge to get a data journalism internship with the Hechinger Report. The Hechinger Report is a non profit news room that focuses on education both k-12 and higher level. During this time I used my knowledge of data cleaning to make large data sets usable with Python pandas. I also took on my first coding project alongside an article I wrote myself on the state of sex education in the United States. The interactive map included data I had cleaned myself, and used technologies such as JQuery, HTML/CSS and Javascript.It was also accompanied by a D3.js data visualization.`,
    `
    After a 3 month stint at a newspaper, I enrolled in a 6-month full-stack developmnent bootcamp offered by Georgia Tech. Through this I learned things like Node, React, Apollo Client, GraphQL, Mern Stack, MVC Stack, Progress Web Applications and using and creating APIs.
    
    `,
    `
    About a month after starting the bootcamp, in March 2022 I began working for SpringBig, a SaaS company focused on loyalty and messaging, as a QA intern. Three months after that I was hired full time as a Jr. QA, and then three months after that my supervisor promoted me to QA Engineer. 
    
    `,
    `
    Since then, I've mostly been the Lead QA - and a lot of times the only QA - for my team for over a year. My team has handled major features including building a one of a kind subscription program from the ground up. We've also worked on payment, billing and invoice features, enhancements for our gift card features, and working with all our integration partnerships. I have also personally worked on a team with heads of engineering to test all integrations after a complete ruby refactor to move it to the next version.
    `,
    `
    
    Outside of work, my passion for software and engineering as a whole is evident. I spend a lot of time working on coding projects, reading about new technologies and how to implement them, and working on arduino projects involving both hardware and software components.
    `,
    `
    
    Overall, I am always passionate about everything I do. I love to think about problems and how to systematically find their solutions. My goal is to excel at whatever avenue I am given. Wether that is being an automation qa engineer, a senior manual qa tester, or a software developer,  I am ready to take on the challenge. 
    `
   ]
    



    
    
}

export const portfolio = [
    {
      title: "Discord Movie Bot WIP",
      subtitle: "A discord bot with slash commands used for scheduling movie night with your friends on discord channel.",
      description: "Node.js, Postgresql, Sequelize, CronJob",
      
      deployedURL: "https://lauraantunez024.github.io/E-Comm/",
      repoURL: "https://github.com/lauraantunez024/discord-moviechat-bot",
      altAttribute: "E commerce API",
    },
    {
      title: "Grace's Portfolio Website",
      subtitle: "Portfolio website to show case projects. Includes contact form that sends messages to website owner's phone.",
      description: "Next.js, Twilio",
      
      deployedURL:
        "https://lauraantunez024.github.io/Weather-Dashboard/",
      repoURL: "https://github.com/lauraantunez024/Grace-website",
      altAttribute: "weather dashboard app",
    },
    {
      title: "Interactive Sex Ed Map",
      subtitle: "Created as part of an article for the Hechinger Report",
      description: "HTML/CSS, JavaScript, JQuery, Python/SQL for data manipulation",
      
      deployedURL:
        "https://lauraantunez024.github.io/SexEd_MapInteractive/",
      repoURL: "https://github.com/lauraantunez024/SexEd_MapInteractive",
      altAttribute: "Interactive map of sex education laws from 2021",
    },
    {
      title: "Text Editor",
      subtitle: "Downloadable Text Editor that recognizes coding syntax",
      description: "Progressive Web Application using Webpack and Service Workers",
      
      deployedURL: "https://lauraantunez024.github.io/Text-Editor/",
      repoURL: "https://github.com/lauraantunez024/Text-Editor",
      altAttribute: "Text Editor App",
    },
    {
      title: "README-Generator",
      subtitle: "node index into the file, answer the prompts and have a README hot and ready for you in no time",
      description: "Node.js, Command Line Application",
      
      deployedURL:
      "https://lauraantunez024.github.io/README-generator/",
      repoURL: "https://github.com/lauraantunez024/README-generator",
      altAttribute: "README generator app",
    },
    {
      title: "Team Builder Application",
      subtitle: "Command line application that outputs HTML of team profile cards created for Georgia Tech Bootcamp ",
      description: "Node.js, Object Oriented Programming",
      
      deployedURL:
        "https://lauraantunez024.github.io/Team-Builder/",
      repoURL: "https://github.com/lauraantunez024/Team-Builder",
      altAttribute: "team builder app",
    },
    {
      title: "Crispy Weather",
      subtitle: "Revisiting the weather app I created for my bootcamp using a newer technology.",
      description: "Node.js, Object Oriented Programming, Nuxt.js",
      
      deployedURL:
        "https://lauraantunez024.github.io/Team-Builder/",
      repoURL: "https://github.com/lauraantunez024/crispy-weather",
      altAttribute: "team builder app",
    },
    {
      title: "Blog created with Ruby on Rails",
      subtitle: "Used Rails tutorial to create a simple CRUD app.",
      description: "Ruby on Rails, Object Oriented Programming",
      
      deployedURL:
        "https://lauraantunez024.github.io/Team-Builder/",
      repoURL: "https://github.com/lauraantunez024/rails-blog",
      altAttribute: "team builder app",
    },
    {
      title: "Activity Recommendation iOS App",
      subtitle: "Followed swift tutorial to create my first swift app",
      description: "Swift, XCode",
      
      deployedURL:
        "https://lauraantunez024.github.io/Team-Builder/",
      repoURL: "https://github.com/lauraantunez024/Team-Builder",
      altAttribute: "team builder app",
    },
  ];


  export const skills = [
    {type: 'Languages',
    background: 'accent-background',
    skillSet: [
        'HTML/CSS',
        'Javascript', 
        'Ruby on Rails', 
        'Python', 
        'C++',
        'Swift'     
    ]},
    {type: 'Frontend',
    background: 'primary-background',
    skillSet: [
        'React', 
        'Vue', 
        'Next/Nuxt',
        'JQuery',
        'Tailwind'
 
    ]},
    {type: 'Backend',
    background: 'accent-background',
    skillSet: [
        'Node', 
        'Express',
        'Ruby on Rails', 
        'GraphQL',
        'Apollo Client'
    
    ]},
    {type: 'Testing',
    background: 'primary-background',
    skillSet: [
        'RSPEC',
        'Jest', 
        'Postman Automated Tests',
        'Cypress E2E Testing',
        'Blackbox testing', 
        'Whitebox testing', 

    ]},
    {type: 'Databases',
    background: 'accent-background',
    skillSet: [
        'Postgresql',
        'SQL',
        'NoSQL',
        'Redis',
        'MongoDB'

    ]},
    {type: 'Other',
    background: 'primary-background',
    skillSet: [
        'Fluent in English and Spanish', 
        'Click Up',
        'Strong communication skills',
        'Experience with Scrum'
    ]},

  ] ;
  

  export const testimonials = [ 
    {
      name: 'Jacob Stevens',
      company: 'QA Manager at Springbig',
      quote: " \"Laura picks things up so fast it's amazing. Not only technical aptitude, but her comprehension of product value, team objectives, and work practices. Her growth in the past year has been outstanding. She is a fantastic addition to any team, highly cooperative and communicative, and also a valuable professional voice to identify problems, inefficiencies and advocate not only for herself but for other roles and team members. You will not regret giving Laura the chance to continue moving forward on her impressive trajectory.\""
    }
  ]


  export const contacts = [
    {
      email: 'LauraAntunez024@gmail.com',
      phoneNumber: '(305)290-1430',
      Github: 'github.com/lauraantunez024',
      LinkedIN: 'https://www.linkedin.com/in/laura-antunez-2a4a12182/',
      Resume: './Resume2022.pdf'
    
    }
  ]