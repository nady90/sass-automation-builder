import {
  DashboardBrowsingIcon,
  WorkflowSquare03Icon,
} from "@hugeicons/core-free-icons";
import { Settings01Icon } from "@hugeicons/core-free-icons";
import { ChartRelationshipFreeIcons } from "@hugeicons/core-free-icons";
import { Connection } from "./types";

export const MENU_OPTIONS = [
  { href: "/dashboard", icon: DashboardBrowsingIcon, name: "Dashboard" },
  { href: "/workflows", icon: WorkflowSquare03Icon, name: "Workflows" },
  { href: "/settings", icon: Settings01Icon, name: "Settings" },
  {
    href: "/connections",
    icon: ChartRelationshipFreeIcons,
    name: "Connections",
  },
];

export const CONNECTIONS: Connection[] = [
  {
    title: "Google Drive",
    description: "Connect your Google Drive to listen to folder changes.",
    image: "/images/googleDrive.png",
    connectionKey: "googleNode",
    alwaysTrue: true,
  },
  {
    title: "Discord",
    description: "Connect your Discord to send notifications and messages.",
    image: "/images/discord.png",
    connectionKey: "discordNode",
    accessTokenKey: "webhookURL",
  },
  {
    title: "Notion",
    description: "Create enteries in your Notion dashboard and automate tasks.",
    image: "/images/notion.png",
    connectionKey: "notionNode",
    accessTokenKey: "accessToken",
  },
  {
    title: "Slack",
    description:
      "Use Slack to send notifications to team members through your own custom bot.",
    image: "/images/slack.png",
    connectionKey: "slackNode",
    accessTokenKey: "slackAccessToken",
    slackSpecial: true,
  },
];
