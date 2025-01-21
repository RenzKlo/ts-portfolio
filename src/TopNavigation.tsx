function TopNavigation() {
    return (
        <nav className="fixed flex justify-between items-center h-24 ">
          <h1 className="text-yellow-400 font-semibold text-2xl">
            renzk.
          </h1>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white">
                About
              </a>
            </li>
            <li>
              <a href="/" className="text-white">
                Experience
              </a>
            </li>
            <li>
              <a href="/" className="text-white">
                Tech Stack
              </a>
            </li>
            <li>
              <a href="/" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>
    );
}

export default TopNavigation;