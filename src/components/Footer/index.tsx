import { Hexagon, Github, Instagram, Linkedin, } from "lucide-react"
import { Footer } from "@/components/ui/footer"

function FooterSection() {
  return (
    <div className="w-full relative z-50">
      <Footer
        logo={<Hexagon className="h-10 w-10" />}
        brandName="nickk_yo"
        socialLinks={[
          {
            icon: <Instagram className="h-5 w-5" />,
            href: "https://www.instagram.com/nickk_yo/",
            label: "Instagram",
          },
          {
            icon: <Github className="h-5 w-5" />,
            href: "https://github.com/NicholasYeoYuRong",
            label: "GitHub",
          },
          {
            icon: <Linkedin className="h-5 w-5" />,
            href: "https://www.linkedin.com/in/nicholas-yeo-88723a2bb/",
            label: "LinkedIn",
          }
        ]}
        mainLinks={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/#projects", label: "Projects" },
          { href: "/resume", label: "Resume" },
        ]}
        legalLinks={[
          
        ]}
        copyright={{
          text: "© 2025 Nicholas Yeo",
          license: "All rights reserved",
        }}
      />
    </div>
  )
}

export { FooterSection }