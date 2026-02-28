import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

type Props = {
  name: string;
  description: string;
  id: string;
  publish: boolean;
};

export default function WorkflowCard({
  name,
  description,
  id,
  publish,
}: Props) {
  return (
    <Card className="flex flex-row justify-between items-center ">
      <CardHeader className="grow">
        <Link href={`/workflows/editor/${id}`}>
          <div className="flex flex-row gap-x-1">
            <Image
              className="object-contain w-12 h-12"
              src={"/images/googleDrive.png"}
              width={60}
              height={60}
              alt="google drive logo"
            />

            <Image
              className="object-contain w-12 h-12"
              src={"/images/notion.png"}
              width={60}
              height={60}
              alt="google drive logo"
            />

            <Image
              className="object-contain w-12 h-12"
              src={"/images/discord.png"}
              width={60}
              height={60}
              alt="google drive logo"
            />
          </div>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </Link>
      </CardHeader>
      <CardContent className="flex flex-col items-center text-center gap-y-1">
        <Label htmlFor="publishSwitch">On</Label>
        <Switch id="publishSwitch" />
      </CardContent>
    </Card>
  );
}
