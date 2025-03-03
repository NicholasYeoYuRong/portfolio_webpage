import Image from "next/image";
import { Globe } from "@/components/magicui/globe";
import { MorphingText } from "@/components/magicui/morphingtext";

const texts = [
  "HELLO !",
  "NICHOLAS HERE !",
  "WELCOME TO MY PORTFOLIO !"
]

export default function Home() {
  return (
    <div>
      <div className="relative flex-col space-y-[9vh] h-[1200] items-center justify-center overflow-hidden px-40 pb-40 pt-8 md:pb-60">
        <MorphingText texts={texts} className="opacity-75" />
        <Globe />
      </div>
    </div>
  );
}
