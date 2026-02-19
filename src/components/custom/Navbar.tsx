import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row px-4 justify-between">
      <p className="text-purple-500">LOGO</p>
      <ul className="flex flex-row">
        <li>home</li>
        <li>contact</li>
        <li>about</li>
      </ul>
      <Link href={"/dashboard"}>Dashboard</Link>
    </nav>
  );
}
