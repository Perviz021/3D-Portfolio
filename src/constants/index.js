import {
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  antDesign,
  sass,
  bootstrap,
  jquery,
  git,
  figma,
  cbar,
  khazar,
  atl,
  bankWebsite,
  bankApp,
  designer,
  music,
  asterNews,
  qonaqol,
  mapty,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front End Developer",
    icon: web,
  },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "jQuery",
    icon: jquery,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Ant Design",
    icon: antDesign,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "ATL Tech",
    icon: atl,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Feb 2024",
    points: [
      "Implement functionalities within components using JSX syntax and React lifecycle methods.",
      "Handle state changes triggered by user interactions, API responses, or other external events.",
      "Integrate React components with backend APIs and services using RESTful APIs.",
      "Implement client-side routing using libraries like React Router for single-page application navigation.",
      "Handle asynchronous operations such as data fetching, form submissions, and authentication using asynchronous JavaScript techniques and React hooks.",
    ],
  },
  {
    title: "SQL Developer Intern",
    company_name: "Central Bank of Azerbaijan Republic",
    icon: cbar,
    iconBg: "#E6DEDD",
    date: "July 2022 - Sep 2022",
    points: [
      "Designing, building, and maintaining SQL databases including queries, tables, views, user profiles and etc.",
      "For custom functionality, designing and managing database constraints, and defining validation rules around data stored in Oracle databases.",
      "Error handling and improving the performance of current SQL code.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front End Developer Intern",
    company_name: "Khazar University",
    icon: khazar,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Dec 2022",
    points: [
      "Writing complex, clean, well-documented, reusable code.",
      "Ensuring good performance and stability of the system.",
      "Updating existing features.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Parviz proved me wrong.",
    name: "Colleen Ferguson",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Parviz does.",
    name: "Salvador Cruz",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    testimonial:
      "After Parviz optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Ricky Garcia",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const projects = [
  {
    name: "Events Website",
    description:
      "Qonaqol is an online platform designed to connect event enthusiasts with a myriad of exciting experiences. Whether you're a music lover, a foodie, a sports enthusiast, or someone who simply enjoys exploring new activities, Qonaqol has something for everyone.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "context api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: qonaqol,
    source_code_link: "https://github.com/Perviz021/QonaqOl",
  },
  {
    name: "Aster News",
    description:
      "A dynamic news website in which you can explore the latest news from diverse categories. From politics and technology to entertainment and sports, a comprehensive range of articles are provided to keep you informed.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "context api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: asterNews,
    source_code_link: "https://github.com/Perviz021/React-News",
  },
  {
    name: "Mapty App",
    description:
      "Introducing Mapty, your go-to fitness companion for runners and cyclists alike. With a user-friendly sidebar to effortlessly manage workouts and an interactive map feature for discovering new routes, Mapty revolutionizes your fitness journey.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "leaflet",
        color: "blue-text-gradient",
      },
    ],
    image: mapty,
    source_code_link: "https://github.com/Perviz021/MaptyApplication",
  },
  {
    name: "Bank Website",
    description:
      "A comprehensive bank website that provides detailed information about the institution. The site offers an in-depth overview of the bank's services, features, and mission, creating a user-friendly platform for visitors to explore and learn more about the bank.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "api",
        color: "blue-text-gradient",
      },
    ],
    image: bankWebsite,
    source_code_link: "https://github.com/Perviz021/Bank_website",
  },
  {
    name: "Transaction Application",
    description:
      "A dynamic web application focused on seamless banking transactions. Users can effortlessly access their account balance, review detailed transaction histories, initiate deposits and withdrawals, transfer funds, request loans, and even close their accounts.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: bankApp,
    source_code_link:
      "https://github.com/Perviz021/Application-for-Bank-Transactions",
  },
  {
    name: "Interior Designer",
    description:
      "An interior design website where users can explore a diverse array of home design inspirations. From contemporary to classic styles, the platform showcases a collection available for purchase, allowing users to transform their living spaces with ease.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "jquery",
        color: "green-text-gradient",
      },
    ],
    image: designer,
    source_code_link: "https://github.com/Perviz021/Project-Designer",
  },
  {
    name: "Music Player",
    description:
      "This music player application has a simple and interactive interface created using web technologies. Users can play, pause and rewind music files with this app. It also includes a progress bar that shows the playback time of the music and allows the user to start the track from the desired point.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: music,
    source_code_link: "https://github.com/Perviz021/MusicPlayer",
  },
];

export { services, technologies, experiences, testimonials, projects };
