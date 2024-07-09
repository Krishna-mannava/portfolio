"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-24 max-w-[45rem] text-center leading-8 sm:mb-32 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      A <span className="font-medium">Redis certified Software Developer, Microsoft certified AI Engineer</span> {" "} and <span className="font-medium"> Data Scientist </span> with 2+ years of professional experience in optimizing microservices, web applications and 3+ years of project experience on building AI, Machine Learning, and Spring Boot applications.
      </p>
      <p className="mb-3">
      I am a recent <span className="font-medium">computer science</span> graduate student with a GPA of 4.0 rom the University of South Florida (2022-2024).
      </p>
      <p className="mb-3">
      During my tenure as a <span className="font-medium">Software Engineer</span> at <span className="font-medium">Cognizant</span> I've contributed to a major US pharmaceutical company's software development, reducing defects by 30% and 
      proven ability to accelerate data access, enhance front-end performance, and increase testing coverage.
      </p>
      <p className="mb-3">
      I am now actively looking for full-time opportunities and eager to apply my extensive experience and skills in a new role, contributing effectively to your organization's success.
      </p>
    </motion.section>
  );
}
