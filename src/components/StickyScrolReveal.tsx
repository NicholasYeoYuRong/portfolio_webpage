"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Primary School (2008 - 2014)",
    description:
      "I received my primary education at Ai Tong School, where I consistently strived to do my best. While I was naturally more playful and energetic than studious during those years, the experience nurtured my curiosity, adaptability, and resilience, laying a strong foundation for my personal and academic growth.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/images/aitong.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Ai Tong School"
        />
      </div>
    ),
  },
  {
    title: "Secondary School (2015 - 2018)",
    description:
      "I continued my education at Serangoon Garden Secondary School, where I was placed in the Express stream and exposed to a wider range of subjects beyond those in primary school. This broadened my academic perspective and piqued my interest in exploring different future pathways. I also joined the National Cadet Corps (NCC) as my co-curricular activity, which strengthened my sense of discipline, teamwork, and leadership.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/images/SGSS.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Serangoon Garden Secondary School"
        />
      </div>
    ),
  },
  {
    title: "Nanyang Polytechnic (2019 - 2022)",
    description:
      "At Nanyang Polytechnic, I pursued a Diploma in Multimedia & Infocomm Technology, where I developed a strong passion for programming. During my studies, I was recognized on the Director’s List and received awards for Best MVC Application and Best Internet of Things (IoT) Project.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <img
          src="/images/nyp.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Nanyang Polytechnic"
        />
      </div>
    ),
  },
  {
    title: "Nanyang Technological University (2023 - Present)",
    description:
      "At Nanyang Technological University, I am pursuing a Bachelor’s degree in Computer Science, where I am further honing my programming skills and exploring advanced topics in software development. I am excited to engage in collaborative projects and contribute to innovative solutions that address real-world challenges.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src="/images/NTU.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Nanyang Technological University"
        />
      </div>
    ),
  },
];
export default function StickyScrollReveal() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}