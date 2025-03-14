import Image from "next/image";
import { Globe } from "@/components/magicui/globe";
import { MorphingText } from "@/components/magicui/morphingtext";
import SplashCursor from "@/components/SplashCursor";
import BreathingText from "@/fancy/components/text/breathing-text";
import ElasticLine from "@/fancy/components/physics/elastic-line";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { AppleCardsCarouselDemo } from "@/components/carousel-cards";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { OrbitingIcons } from "@/components/OrbitingIcons";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const texts = [
  "HELLO !",
  "NICHOLAS HERE !",
  "WELCOME TO MY PORTFOLIO !"
]

export default function Home() {
  return (
    <div>
      
      <SplashCursor/>
      <div className="relative flex-col items-center justify-center pt-8 h-full overflow-auto">
        <MorphingText texts={texts} className="opacity-65" />    
        <div className="pt-14">
          <Globe />
        </div>
        
        <div className="text-5xl sm:text-7xl md:text-9xl flex flex-col gap-3 items-center justify-center font-overused-grotesk">
          
          <section id="projects">
            <CardSpotlight className="h-full w-[1380] rounded-3xl bg-transparent border-hidden flex flex-col items-center">
              <BreathingText
                    label={"Projects"}
                    staggerDuration={0.1}
                    fromFontVariationSettings="'wght' 100, 'slnt' 0"
                    toFontVariationSettings="'wght' 800, 'slnt' -10"
                  />
              <AppleCardsCarouselDemo/>  
            </CardSpotlight>   
          </section>
        </div>    

        <BackgroundBeamsWithCollision>
          <div className="flex flex-row items-center justify-around text-5xl gap-16">
              <section className="px-10 max-w-2xl">

                <h1 className="font-bold md:text-4xl">Technical Skills:</h1>
                <p className="text-xl pt-10">Java, C Prgramming, Python, C#, HTML, CSS, JavaScript, TypeScript, JQuery, NodeJs, Dart, SQL, Git</p>

                <h1 className="font-bold md:text-4xl pt-20">Software & Tools:</h1>
                <p className="text-xl pt-10">Git, Linux, Visual Studio Code, Android Studios, NetBeans, Brackets, Arduino</p>
              </section>

              <OrbitingIcons />
            
          </div>
        </BackgroundBeamsWithCollision>


      </div>
    </div>
  );
}
