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
              All data will be inserted and pulled with the use of{" "} 
            <span className="font-bold text-neutral-700">
              Firebase
            </span>
            .
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
          <video src="/videos/HPE.MP4" controls className="md:w-1/3 md:h-1/3 h-full w-full mx-auto object-contain pt-10"/>
        </div>

        <div
          className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-6"
        >
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700">
              Data that are recorded are stored in a google drive spreadsheet.
            </span>
            The 3D head model is used to demostrate data recording in real-time.
          </p>
          <Image
            src="/images/HPE-desc.jpg"
            alt="description"
            height="1000"
            width="1000"
            className="md:w-1/3 md:h-1/3 h-full w-full mx-auto object-contain pt-10"
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
            className="md:w-1/3 md:h-1/3 h-full w-full mx-auto object-contain pt-10"
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
            className="md:w-1/3 md:h-1/3 h-full w-full mx-auto object-contain pt-10"
          />
        </div>
    </>
  );
};

const IOTContent = () => {
  return (
    <>
      <div
        className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">
            Description:
          </span>{" "}
          Developed a prototype to simulate a message chair where users will be able to adjust the vibration level. The vibrations are replaced with the strength of an LED light for demostration.
        </p>
        <video src="/videos/IOT.MP4" controls className="md:w-1/3 md:h-1/3 h-full w-full mx-auto object-contain pt-10"/>
      </div>
    </>
  );
};

const BarryBotContent = () => {
  return (
    <>
      <div
        className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">
            Description:
          </span>{" "}
          A telegram Chatbot named "Barry" that is coded using python and it's interactive. It also contains a few commands that users can use to interact with the bot. The bot is deployed and hosted on a cloud platform to ensure 24/7 uptime.
        </p>
        <video src="/images/BarryBotMedia/start_help.MP4" controls playsInline className="md:w-1/3 md:h-1/3 h-full w-full mx-auto object-contain pt-10"/>
      </div>

      <div
        className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 text-xl md:text-4xl">
            FUNCTION: Interactions
          </span>
        </p>
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto pt-10">
          <span className="font-bold text-neutral-700">
            Description:
          </span>{" "}
          Users can interact with Barry and ask any questions. Barry will respond accordingly. The responses are generated using llama3.2 model via API calls. An example of a response is shown below.
        </p>
        <video src="/images/BarryBotMedia/interaction.MP4" controls className="md:w-1/3 md:h-1/3 h-full w-full mx-auto object-contain pt-10"/>
      </div>

      <div
        className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 text-xl md:text-4xl">
            Schedule Management
          </span>
        </p>
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto pt-10">
          <span className="font-bold text-neutral-700">
            Description:
          </span>{" "}
          Barry can also help to keep track of schedules. Barry is able to add, view, and delete schedules using simple commands. Barry interacts directly with iCal to perform these functions.
        </p>
        <Image
            src="/images/BarryBotMedia/upcomingschedule.png"
            alt="description"
            height="1000"
            width="1000"
            className="md:w-1/3 md:h-1/3 h-full w-full mx-auto object-contain pt-10"
          />

        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto gap-y-10 pt-10">
          <span className="font-bold text-neutral-700 text-xl md:text-4xl">
            FUNCTION: ADD Schedule
          </span>
        </p>

        <video src="/images/BarryBotMedia/addschedule.MP4" controls className="md:w-1/3 md:h-1/3 h-full w-full mx-auto object-contain pt-10"/>

        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto gap-y-10 pt-10">
          <span className="font-bold text-neutral-700 text-xl md:text-4xl">
            FUNCTION: DELETE Schedule
          </span>
        </p>

        <video src="/images/BarryBotMedia/deleteschedule.MP4" controls className="md:w-1/3 md:h-1/3 h-full w-full mx-auto object-contain pt-10"/>
      </div>

      <div
        className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 text-xl md:text-4xl">
            FUNCTION: Food Recommendations.
          </span>
        </p>
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto pt-10">
          <span className="font-bold text-neutral-700">
            Description:
          </span>{" "}
          Using the /foodrecommendation command, Barry will be able to provide food recommendations based on the user's current location. It uses Google Maps API to get the location and provide relevant recommendations. Barry would also provide and address link for easy access via Google Maps and including phone number if available. If users are unsure on what to eat, Barry can help to decide! An example of a response is shown below.
        </p>
        <video src="/images/BarryBotMedia/foodrecommendations.MP4" controls className="md:w-1/3 md:h-1/3 h-full w-full mx-auto object-contain pt-10"/>
      </div>

      <div
        className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 text-xl md:text-4xl">
            CONCLUSION
          </span>
        </p>
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto pt-10">   
          Barry is built to offer a safe, judgment-free space for the conversations people don’t always feel ready to have—showing up with empathy, practical guidance, and steady support. Beyond listening, it’s a pocket AI assistant for everyday tasks—fast, capable, and always within reach. Barry may be my personal assistant, but I designed it to be yours too—whenever you need a hand or simply someone to listen. Feel free to try it out youself at Telegram <a href="https://t.me/AllBarryBot" className="text-blue-500 underline">HERE</a>.
        </p>
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto pt-10">
          <span className="font-bold text-neutral-700">
            P.S. Barry does not store your conversations in any database—your chats are confidential and not retained.
          </span>
        </p>
      </div>
      
    </>
  );
}

const data = [
  {
    category: "Project 1",
    title: "Telegram Chatbot - Barry",
    src: "/images/BarryBotMedia/BarryIcon.png",
    content: <BarryBotContent />,
  },
  {
    category: "Project 2",
    title: "Head Posture Estimation",
    src: "/images/HPE-front.jpg",
    content: <HPEContent />,
  },
  {
    category: "Project 3",
    title: "BitesWithin",
    src: "/images/BitesWithin-front.png",
    content: <BitesWithinContent />,
  },
  {
    category: "Project 4",
    title: "Dealing With Arduino",
    src: "/images/IOT-front.jpg",
    content: <IOTContent />,
  },
  // {
  //   category: "Project E",
  //   title: "TransportTravelGO",
  //   src: "",
  //   content: <DummyContent />,
  // },
];
