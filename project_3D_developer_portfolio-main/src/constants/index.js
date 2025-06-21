import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  com,
  Netflix,
  Appointy,
  Decathlon,
  Appointypage,
  Netflixpage,
  java,
  MySQL,
  Angular,
  AWS,
  Springboot,
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
    title: "Java Full-stack Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: MySQL,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: Angular,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: AWS,
  },
  {
    name: "docker",
    icon: Springboot,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Personal Project",
    icon: Netflix,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Developed a Netflix-inspired video streaming platform using React.js, Node.js, Express.js, and MongoDB.",
  "Implemented user authentication, profile management, and personalized content recommendations.",
  "Integrated video playback functionality with a responsive UI and dynamic content loading.",
  "Designed a clean, intuitive interface with modular components and reusable layouts.",
  "Handled backend logic for user sessions, media metadata, and secure API endpoints.",
    ],
  },
  {
    title: "Java Full-Stack Developer",
    company_name: "Personal Project",
    icon: Appointy,
    iconBg: "#E6DEDD",
    date: "September 2023 - November 2023",
    points: [
      "Built a full-stack service booking platform using Java, Spring Boot, Angular, and MySQL.",
  "Designed modules for Admins, Customers, and Service Providers with role-based access control.",
  "Implemented booking workflows, service listings, and real-time availability tracking.",
  "Integrated secure login, feedback system, and dynamic dashboards for user insights.",
  "Handled complete backend logic, database schema design, and frontend UI for seamless user experience.",
    ],
  },
  {
    title: "Java Full-Stack Developer",
    company_name: "SPESHWAY SOLUTIONS PRIVATE LIMITED",
    icon: com,
    iconBg: "#383E56",
    date: "January 2024 - August 2024",
    points: [
      "Developed a full-stack HMS using Java, Spring Boot, Angular, and MySQL with secure JWT authentication and AWS S3 integration.",
  "Designed role-based modules for Admins, Doctors, Patients, and Pharmacy, featuring dynamic dashboards and real-time tracking.",
  "Integrated AWS S3 for secure document storage and implemented Angular dashboards for interactive insights.",
  "Optimized APIs and MySQL queries to enhance system performance and reduce response latency.",
  "Designed and managed the complete database schema using ER modeling and indexing for scalable data flow.",
    ],
  },
  {
    title: "Node.js Backend Developer",
    company_name: "SPESHWAY SOLUTIONS PRIVATE LIMITED",
    icon: com,
    iconBg: "#E6DEDD",
    date: "October 2024 - April 2025",
    points: [
       "Developed and scaled LMS backend using Node.js, Express.js, and MySQL, serving 300+ users.",
  "Created secure REST APIs for course, user, and assessment management with JWT and AWS S3 integration.",
  "Improved query performance by 30% via indexing and optimized database design.",
  "Collaborated with frontend teams to align data flow and user experience.",
  "Maintained a modular codebase with documentation and unit testing for scalability.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "The design Tuljesh created for our platform was visually stunning and incredibly functional. Highly recommended!",
    name: "Arjun Mehta",
    designation: "Product Manager",
    company: "DesignCraft Labs",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    testimonial:
      "Tuljesh combines technical expertise with a deep understanding of user experience. Our site performance improved drastically!",
    name: "Priya Sharma",
    designation: "Lead Developer",
    company: "TechNova Systems",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    testimonial:
      "Brilliant animations, smooth transitions, and clean code — Tuljesh delivered far beyond our expectations.",
    name: "Rahul Verma",
    designation: "Creative Director",
    company: "PixelNest Studio",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "From initial concepts to final delivery, the experience with Tuljesh was seamless and inspiring.",
    name: "Sneha Patel",
    designation: "UX Strategist",
    company: "Visionary UX",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
  },
  {
    testimonial:
      "Working with Tuljesh helped us launch a modern, interactive portfolio that truly speaks to our brand.",
    name: "Karan Das",
    designation: "Founder",
    company: "LaunchForge",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];


const projects = [
  {
    name: "Netflix-Clone",
    description:
      "Web-based streaming platform that enables users to browse, watch, and manage movies and TV shows across genres, offering a seamless and immersive entertainment experience similar to leading OTT services.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: Netflixpage,
    source_code_link: "https://github.com/",
  },
  {
    name: "Appointy",
    description:
      "Web-based platform that enables users to browse, schedule, and manage service appointments across multiple categories, providing a streamlined and user-friendly solution for booking professionals and managing service needs efficiently.",
    tags: [
      {
        name: "AngularJS",
        color: "blue-text-gradient",
      },
      {
        name: "Springboot",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: Appointypage,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-commerce",
    description:
      "Web-based platform that allows users to explore, purchase, and manage a wide range of products from multiple vendors, offering a convenient and secure solution for digital shopping and order fulfillment.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Springboot",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: Decathlon,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
