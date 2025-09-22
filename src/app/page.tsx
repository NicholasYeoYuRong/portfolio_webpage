import { Globe } from "@/components/magicui/globe";
import { MorphingText } from "@/components/magicui/morphingtext";
import BreathingText from "@/fancy/components/text/breathing-text";
import { AppleCardsCarouselDemo } from "@/components/carousel-cards";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const texts = [
  "HELLO!",
  "NICHOLAS HERE!",
  "WELCOME TO MY PORTFOLIO!",
  "IF YOU HAVE ANY QUESTIONS", 
  "FEEL FREE TO ASK BARRY!",
  "MY AI ASSISTANT", 
  "AT THE BOTTOM RIGHT CORNER!",
]

export default function Home() {
  return (
    <div>
      
      <div className="relative flex-col items-center justify-center pt-8 h-full overflow-auto px-4 md:px-8 lg:px-16">
        <MorphingText texts={texts} className="opacity-65 font-mono italic" />    
        <div className="pt-10 pb-10">
          <Globe />
        </div>
        
        <div className="text-5xl sm:text-7xl md:text-9xl flex flex-col gap-3 items-center justify-center font-overused-grotesk">
          
          <section id="projects">
            <CardSpotlight className="bg-transparent w-full p-4 md:p-8 lg:p-16 rounded-3xl mt-20 mb-20 border-hidden flex flex-col items-center justify-center">
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

      </div>
      
    </div>
  );
}
