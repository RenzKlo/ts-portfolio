import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaFlutter } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { Button } from "./components/ui/button";
type Tech = {
    name: string;
    logo: JSX.Element
};

type TechStacks = {
    [key: string]: Tech[];
};

const techStacks: TechStacks = {
    all: [
        { name: "React", logo: <FaReact className="text-foreground" /> },
        { name: "NextJS", logo: <RiNextjsFill className="text-foreground" /> },
        { name: "TypeScript", logo: <SiTypescript className="text-foreground" /> },
        { name: "JavaScript", logo: <IoLogoJavascript className="text-foreground" /> },
        { name: "MongoDB", logo: <SiMongodb className="text-foreground" /> },
        { name: "Flutter", logo: <FaFlutter className="text-foreground" /> },
        // Add more tech stacks here
    ],
    frontend: [

    ],
    backend: [

    ],
    databases: [

    ],
    ai_ml: [

    ],
    design: [

    ],
};

const filters = ["All"];
// const filters = ["all", "frontend", "backend", "databases", "ai_ml", "design"];

export default function TechStack() {
    const [selectedFilter, setSelectedFilter] = useState<string>("all");

    return (
        <div className="px-48">
            <div className="flex space-x-4 my-5 justify-center ">
                {filters.map((filter) => (
                    <Button
                        disabled
                        variant="ghost"
                        key={filter}
                        className={` px-4 rounded ${selectedFilter === filter ? " text-background" : "bg-background"
                            }`}
                        onClick={() => setSelectedFilter(filter)}
                    >
                        {filter}
                    </Button>
                ))}
            </div>
            <div className="flex flex-wrap space-x-8 justify-center">
                {techStacks[selectedFilter].map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center">
                        <IconContext.Provider value={{ size: '36', className: "global-class-name text-muted-foreground" }}>
                            {tech.logo}
                        </IconContext.Provider>

                        <span className="text-center mt-4 text-foreground">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

