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
      "Developed a secure payment processing module for a major US-based manufacturing company as a back-end developer, which processed over 2 million transactions totaling more than $100M, achieving a remarkable uptime of 99.99%.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2021 - Aug 2022",
  },
  {
    title: "Software Developer",
    company: "E-Digital Technologies",
    location: "Guntur, IN",
    description:
      "Refactored and modernized legacy applications, optimized web applications, and implemented design patterns to improve performance, scalability, and user engagement, while reducing operational costs, page load times, and environment-related issues. Contributed to the migration to microservices architecture, enhancing system functionality and reducing downtime.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2020 - Aug 2021",
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
