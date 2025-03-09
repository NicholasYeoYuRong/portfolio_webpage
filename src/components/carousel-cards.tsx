"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src=""
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const BitesWithinContent = () => {
  return (
    <>
        <div
          
          className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-6"
        >
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 md:gap-y-10">
              A quick description of the project.
            </span>
          </p>
          <Image
            src="/images/BitesWithin-desc.png"
            alt="description"
            height="1000"
            width="1000"
            className="md:w-full md:h-full h-full w-full mx-auto object-contain"
          />
        </div>

        <div
          className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-6"
        >
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700">
              Functions: Login & Create Account
            </span>
            <p>
              All data will be inserted and pulled with the use of{" "} 
              <span className="font-bold text-neutral-700">
                Firebase
              </span>
              .
            </p>
          </p>
          <Image
            src="/images/BitesWithin-slide1.png"
            alt="description"
            height="1000"
            width="1000"
            className="md:w-full md:h-full h-full w-full mx-auto object-contain"
          />
        </div>

        <div
          className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-6"
        >
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700">
              Functions: Profile & Change Password
            </span>
          </p>
          <Image
            src="/images/BitesWithin-slide2.png"
            alt="description"
            height="1000"
            width="1000"
            className="md:w-full md:h-full h-full w-full mx-auto object-contain"
          />
        </div>

        <div
          className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-6"
        >
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700">
              Functions: Map, Restaurant List & Filter
            </span>
          </p>
          <Image
            src="/images/BitesWithin-slide3.png"
            alt="description"
            height="1000"
            width="1000"
            className="md:w-full md:h-full h-full w-full mx-auto object-contain"
          />
        </div>

        <div
          className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-6"
        >
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700">
              Functions: View Restaruant Details from list & Favourites
            </span>
          </p>
          <Image
            src="/images/BitesWithin-slide4.png"
            alt="description"
            height="1000"
            width="1000"
            className="md:w-full md:h-full h-full w-full mx-auto object-contain"
          />
        </div>

        <div
          className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-6"
        >
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700">
              Activity Diagram
            </span>
          </p>
          <Image
            src="/images/BitesWithin-SD.png"
            alt="description"
            height="1000"
            width="1000"
            className="md:w-full md:h-full h-full w-full mx-auto object-contain"
          />
        </div>
    </>
  );
};

const HPEContent = () => {
  return (
    <>
        <div
          
          className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-6"
        >
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 md:gap-y-10">
              Quick Demostration
            </span>
          </p>
          <video src="/videos/HPE.MP4" controls className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"/>
        </div>

        <div
          className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-6"
        >
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700">
              Data that are recorded are stored in a google drive spreadsheet.
            </span>
            <p>
              The 3D head model is used to demostrate data recording in real-time.
            </p>
          </p>
          <Image
            src="/images/HPE-desc.jpg"
            alt="description"
            height="1000"
            width="1000"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
        </div>

        <div
          className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-6"
        >
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700">
              Application runs on the background.
            </span>
          </p>
          <Image
            src="/images/HPE-backgroundRun.jpg"
            alt="description"
            height="1000"
            width="1000"
            className="md:w-full md:h-full h-full w-full mx-auto object-contain"
          />
        </div>

        <div
          className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-6"
        >
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700">
              Once done, user can choose to send current cycle of data.
            </span>
          </p>
          <Image
            src="/images/shareDataVia.jpg"
            alt="description"
            height="1000"
            width="1000"
            className="md:w-full md:h-full h-full w-full mx-auto object-contain"
          />
        </div>
    </>
  );
};

const data = [
  {
    category: "Project A",
    title: "BitesWithin",
    src: "/images/BitesWithin-front.png",
    content: <BitesWithinContent />,
  },
  {
    category: "Project 2",
    title: "Head Posture Estimation",
    src: "/images/HPE-front.jpg",
    content: <HPEContent />,
  },
  {
    category: "Project 3",
    title: "TransportTravelGO",
    src: "",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "",
    content: <DummyContent />,
  },
];
