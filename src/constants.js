// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Education Section Logo's
import bbit from './assets/education_logo/Budge_Budge_Institute_of_Technology_Logo.jpg';
import wbbse from './assets/education_logo/WBBSE.png';
import wbchse from './assets/education_logo/WBCHSE.webp';

// Project Section Logo's
import freshmartlogo from './assets/work_logo/Freshmart.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'JavaScript', logo: javascriptLogo },
  { name: 'React JS', logo: reactjsLogo },
  { name: 'Tailwind CSS', logo: tailwindcssLogo },
  { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
  { name: 'C', logo: cLogo },
  { name: 'C++', logo: cppLogo },
  { name: 'Java', logo: javaLogo },
  { name: 'Python', logo: pythonLogo },
  { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
  { name: 'Git', logo: gitLogo },
  { name: 'GitHub', logo: githubLogo },
  { name: 'VS Code', logo: vscodeLogo },
  { name: 'Postman', logo: postmanLogo },
  { name: 'Compass', logo: mcLogo },
  { name: 'Vercel', logo: vercelLogo },
    ],
  },
];


  
  export const education = [
    {
      id: 0,
      img: bbit,
      school: "Budge Budge Institute of Technology, South 24 Parganas, West Bengal",
      date: "Oct 2022 - Jun 2026",
      grade: "7.6 CGPA upto 6th Semester",
      desc: "I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science from BBIT. During the course of my studies, I have been exposed to a wide range of subjects that have strengthened my foundation in computing and technology. From mastering Data Structures and Algorithms to exploring Web Development and Database Management Systems, I have gained both theoretical knowledge and practical experience. My academic journey at BBIT has also involved working on hands-on projects that allowed me to apply classroom concepts to solve real-world problems, further enhancing my skills in software development.",
      degree: "Bachelor of Technology - B.Tech (Computer Science)",
    },
    {
      id: 1,
      img: wbchse,
      school: "Uluberia High School, Howrah",
      date: "Aug 2020 - Apr 2022",
      grade: "91.6%",
      desc: "I completed my class 12 education from Uluberia High School, Howrah, under the WBCHSE board, where I studied Science with Computer..",
      degree: "WBCHSE (XII) - PCMB",
    },
    {
      id: 2,
      img: wbbse,
      school: "Uluberia High School, Howrah",
      date: "Jan 2019 - Feb 2020",
      grade: "81.4%",
      desc: "I completed my class 10 education from Uluberia High School, Howrah, under the WBBSE board, where I studied Science with Computer..",
      degree: "WBBSE (X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Freshmart - Grocery Store",
      description:
        "Developed a modern online grocery platform that enables users to seamlessly browse, search, and purchase a variety of products including fresh produce, dairy, and bakery items—streamlining the entire grocery shopping experience. The platform features an intuitive product discovery flow with category-wise browsing, daily deals, and best sellers, along with a responsive cart and checkout system integrated with secure payment functionality.",
      image: freshmartlogo,
      tags: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/SomsubhraGanguly-07/FreshMart",
      webapp: "https://fresh-mart-nu.vercel.app/",
    },
  ];