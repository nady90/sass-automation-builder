export type ConnectionTypes = "Google Drive" | "Discord" | "Notion" | "Slack";

export type Connection = {
  title: string;
  description: string;
  image: string;
  alwaysTrue?: boolean;
  connectionKey?: string;
  accessTokenKey?: string;
  slackSpecial?: boolean;
};
