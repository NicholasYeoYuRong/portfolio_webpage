import Image from "next/image";
import { Globe } from "@/components/magicui/globe";
import { MorphingText } from "@/components/magicui/morphingtext";
import SplashCursor from "@/components/SplashCursor";
import BreathingText from "@/fancy/components/text/breathing-text";
import ElasticLine from "@/fancy/components/physics/elastic-line";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { AppleCardsCarouselDemo } from "@/components/carousel-cards";

const texts = [
  "HELLO !",
  "NICHOLAS HERE !",
  "WELCOME TO MY PORTFOLIO !"
]

export default function Home() {
  return (
    <div>
      
      <SplashCursor/>
      <div className="relative flex-col items-center justify-center px-10 pb-40 pt-8 md:pb-60">

        <MorphingText texts={texts} className="opacity-65" />
        
        <div className="w-full max-w-full aspect-square shrink-0">
          <Globe />
        </div>


        <div className="z-10 text-5xl sm:text-7xl md:text-9xl flex flex-col gap-12 items-center justify-center font-overused-grotesk">
          <TextShimmer
              duration={1.2}
              className='text-2xl font-medium [--base-color:theme(colors.yellow.600)] [--base-gradient-color:theme(colors.yellow.200)] dark:[--base-color:theme(colors.yellow.700)] dark:[--base-gradient-color:theme(colors.yellow.400)]'
            >
              Keep Scrolling!
          </TextShimmer>
          <TextShimmer
              duration={1.2}
              className='text-2xl font-medium [--base-color:theme(colors.yellow.600)] [--base-gradient-color:theme(colors.yellow.200)] dark:[--base-color:theme(colors.yellow.700)] dark:[--base-gradient-color:theme(colors.yellow.400)]'
            >
              You can play with the line by the way...
          </TextShimmer>
          <ElasticLine
                releaseThreshold={50}
                strokeWidth={3}
                animateInTransition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  delay: 0.15,
                }}
                />
          <BreathingText
                label={"Projects"}
                staggerDuration={0.1}
                fromFontVariationSettings="'wght' 100, 'slnt' 0"
                toFontVariationSettings="'wght' 800, 'slnt' -10"
              />     

          <AppleCardsCarouselDemo/>

           
        </div>


        <p className="">HEAD POSITION ESTIMATION</p>
      </div>
    </div>
  );
}
