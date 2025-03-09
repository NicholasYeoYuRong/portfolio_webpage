import { ModeToggle } from "./ThemeToggle"
import { MenuBarDemo } from "@/components/MenuBar"
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Header() {

    return(
        <div className="flex justify-between items-center m-5">
            <div className="flex justify-center items-center flex-grow"> 
                <MenuBarDemo/>
            </div>
            <Avatar className="flex items-center">
                <AvatarImage src="/images/profile.jpeg" />
                <AvatarFallback>NY</AvatarFallback>
            </Avatar>
        </div>
    );
}