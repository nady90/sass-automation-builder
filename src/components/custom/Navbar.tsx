import Link from "next/link";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="flex flex-row px-4 justify-between">
      <p className="text-purple-500">LOGO</p>
      <ul className="flex flex-row gap-x-3">
        <li>home</li>
        <li>contact</li>
        <li>about</li>
      </ul>

      <div>
        <SignedOut>
          <SignInButton>
            <Button>Sign in</Button>
          </SignInButton>
          <SignUpButton>
            <Button>Sign up</Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      <Link href={"/dashboard"}>Dashboard</Link>
    </nav>
  );
}
