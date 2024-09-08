import Link from "next/link";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 items-center h-14">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        <li>
          <Link
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            href="/"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/issues">Issues</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
