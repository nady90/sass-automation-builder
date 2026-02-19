import Sidebar from "@/components/custom/Sidebar";
import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function PagesLayout({ children }: Props) {
  return (
    <div className="flex flex-row w-full h-screen">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}
