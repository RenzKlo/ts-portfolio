import { useState } from "react";
import {
    Card,
    CardContent,

} from "@/components/ui/card"

const menuItems: string[] = ["Internship", "Training", "Projects", "Certifications"];

const content: { [key: string]: string } = {
    Internship: "Content for Internship",
    Training: "Content for Training",
    Projects: "Content for Projects",
    Certifications: "Content for Certifications",
};

export default function SplitScreenLayout() {
    const [selectedItem, setSelectedItem] = useState<string>(menuItems[0]);

    return (
        <div className="flex h-screen">
            <div className="w-1/3 bg-gray-100 p-4">
                <nav className="flex flex-col space-y-4">
                    {menuItems.map((item) => (
                        <button
                            key={item}
                            className={`text-left px-4 py-2 rounded ${selectedItem === item ? " text-white" : "bg-gray-200"
                                }`}
                            onClick={() => setSelectedItem(item)}
                        >
                            {item}
                        </button>
                    ))}
                </nav>
            </div>
            <div className="w-2/3 p-8">
                <Card >
                    <CardContent>
                        <h2 className="text-2xl font-bold mb-4">{selectedItem}</h2>
                        <p>{content[selectedItem]}</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}