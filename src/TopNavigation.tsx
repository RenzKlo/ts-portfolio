import { ModeToggle } from "./components/mode-toggle";

function TopNavigation() {
  return (
    <nav className="fixed flex justify-between items-center w-screen h-24 px-20 bg-background shadow-md">
      <h1 className="text-primary font-semibold justify-center text-2xl pr-6">
        renzk.
      </h1>
      <ul className="flex  space-x-4 ml-auto mr-10">
        <li>
          <a href="/" className="text-foreground">
            About
          </a>
        </li>
        <li>
          <a href="/" className="text-foreground">
            Experience
          </a>
        </li>
        <li>
          <a href="/" className="text-foreground">
            Tech Stack
          </a>
        </li>
        <li>
          <a href="/" className="text-foreground">
            Contact
          </a>
        </li>
      </ul>
      <ModeToggle />

    </nav>
  );
}

export default TopNavigation;