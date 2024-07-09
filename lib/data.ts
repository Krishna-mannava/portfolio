import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import sgmaImg from "@/public/SGMA.png";
import brain from "@/public/brain.jpg";
import portfolioImg from "@/public/portfolio_img.png";
import retailImg from "@/public/retailbank.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    company: "Cognizant",
    location: "Hyderabad, IN",
    description:
      "Developed a secure payment processing module for a major US-based pharmaceutical company as a back-end developer, which processed over 2 million transactions totaling more than $100M, achieving a remarkable uptime of 99.99%.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2021 - Aug 2022",
  },
  {
    title: "Junior Software Engineer",
    company: "Cognizant",
    location: "Bengaluru, IN",
    description:
      "Automated and Optimized the testing and performance of microservices and front-end code, enhancing efficiency, test coverage, and user experience while significantly reducing manual effort and critical bugs.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2020 - Aug 2021",
  },
  {
    title: "Full Stack Techno Functional Consultant",
    company: "KAAR Technologies",
    location: "Chennai, IN",
    description:
    "Revamped Customer and Vendor ERP Portals using Angular, achieving a 12% boost in user engagement and a 15% reduction in page load times, decreasing end-user frustration by 11%. Effectively highlighted Sales and Distribution (SD) and Functional Accounting (FI) module functionalities.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2020 - July 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Retail Banking System",
    description:
      "A web application for retail banking that is highly scalable, resilient and provides seamless online banking services to the customers.",
    tags: ["SpringBoot", "Java","Angular"],
    imageUrl: retailImg,
  },
  {
    title: "Smart Grocery Management System",
    description:
      "A web application for in-house grocery management that creates grocery shopping lists automatically by tracking expiration dates of products resulting in reduction of food wastage",
    tags: ["Figma","MongoDB","Express","React","Node.js"],
    imageUrl: sgmaImg,
  },
  {
    title: "Brain Tumor Detection",
    description:
      "A web application for detecting, generating reports on presence of a tumor in a Brain MRI-scan image there by suggesting and booking doctor appointments accordingly.",
    tags: ["Flask","Python", "Keras", "TensorFlow","Pandas", "Scikit Learn"],
    imageUrl: brain,
  },
  {
    title: "Portfolio",
    description:
      "A responsive website created with modern UI design using Next.js.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: portfolioImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "JavaScript",
  "Spring Boot",
  "REST API",
  "GraphQL",
  "Angular",
  "React",
  "Next.js",
  "Node.js",
  "Figma",
  "HTML5",
  "CSS3",
  "MySQL",
  "PostgreSQL",
  "NoSQL",
  "MongoDB",
  "Apache Kafka",
  "Docker",
  "Kubernetes",
  "AWS",
  "Google Cloud Platform",
  "Serverless Computing",
  "Elastic Search",
  "Azure AI",
  "OpenCV",
  "JUnit",
  "Mockito",
  "Maven",
  "Git",
  "Tomcat",
  "JSON",
  "XML",
  "Prompt Engineering",
  "Linux",
  "Windows",
] as const;
