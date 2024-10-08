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
      A <span className="font-medium">Redis certified Software Developer, certified AI Engineer</span> {" "} and <span className="font-medium"> Data Scientist </span> with 3+ years of professional experience in designing, developing, automating, testing web applications and 3+ years of project experience on building end-to-end AI, Machine Learning, Deep Learning web applications.
      </p>
      <p className="mb-3">
      I am a recent <span className="font-medium">computer science</span> graduate student with a GPA of 4.0 from the University of South Florida (2022-2024).
      </p>
      <p className="mb-3">
      During my tenure as a <span className="font-medium">Software Engineer</span> at <span className="font-medium">Cognizant</span> I've contributed to a major U.S.-based manufacturing company's software development, reducing defects by 30% and 
      proven ability to accelerate data access, enhance front-end performance, and increase testing coverage.
      </p>
      <p className="mb-3">
      I am now actively seeking full-time opportunities to apply my skills in developing secure, scalable, reliable and highly performant applications.</p>
    </motion.section>
  );
}
