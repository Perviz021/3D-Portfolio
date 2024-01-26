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
  bankWebsite,
  bankApp,
  designer,
  music,
  todo,
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
    title: "SQL Developer Intern",
    company_name: "Central Bank of Azerbaijan Republic",
    icon: cbar,
    iconBg: "#383E56",
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
  {
    name: "Todo App",
    description:
      "Experience productivity at your fingertips with our intuitive to-do app. Seamlessly add, edit, and remove tasks, while efficiently marking them as complete. This user-friendly application empowers you to stay organized, ensuring that managing your daily tasks becomes a simple and streamlined process",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/Perviz021/React-Todo",
  },
];

export { services, technologies, experiences, testimonials, projects };
