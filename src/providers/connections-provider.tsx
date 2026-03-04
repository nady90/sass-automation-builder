"use client";

import { createContext, ReactNode, useContext, useState } from "react";

export type ConnectionProviderProps = {
  discordNode: {
    webhookURL: string;
    content: string;
    webhookName: string;
    guildName: string;
  };
  setDiscordNode: React.Dispatch<React.SetStateAction<any>>;
  // eslint-disable-next-line
  googleNode: {}[];
  setGoogleNode: React.Dispatch<React.SetStateAction<any>>;
  notionNode: {
    accessToken: string;
    databaseId: string;
    workspaceName: string;
    content: {
      name: string;
      kind: string;
      type: string;
    };
  };
  workflowTemplate: {
    discord?: string;
    notion?: {
      name: string;
      type: string;
      kind: string;
    };
    slack?: string;
  };
  setNotionNode: React.Dispatch<React.SetStateAction<any>>;
  slackNode: {
    appId: string;
    authedUserId: string;
    authedUserToken: string;
    slackAccessToken: string;
    botUserId: string;
    teamId: string;
    teamName: string;
    content: string;
  };
  setSlackNode: React.Dispatch<React.SetStateAction<any>>;
  setWorkFlowTemplate: React.Dispatch<
    React.SetStateAction<{
      discord?: string;
      notion?: { name: string; type: string; kind: string };
      slack?: string;
    }>
  >;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialValues: ConnectionProviderProps = {
  discordNode: {
    webhookURL: "",
    content: "",
    webhookName: "",
    guildName: "",
  },
  setDiscordNode: () => undefined,
  googleNode: [],
  setGoogleNode: () => undefined,
  notionNode: {
    accessToken: "",
    databaseId: "",
    workspaceName: "",
    content: {
      name: "",
      kind: "",
      type: "",
    },
  },
  workflowTemplate: {
    discord: "",
    notion: {
      name: "",
      type: "",
      kind: "",
    },
    slack: "",
  },
  setNotionNode: () => undefined,
  slackNode: {
    appId: "",
    authedUserId: "",
    authedUserToken: "",
    slackAccessToken: "",
    botUserId: "",
    teamId: "",
    teamName: "",
    content: "",
  },
  setSlackNode: () => undefined,
  setWorkFlowTemplate: () => undefined,
  isLoading: false,
  setIsLoading: () => undefined,
};

const ConnectionContext = createContext(initialValues);

export default function ConnectionsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [discordNode, setDiscordNode] = useState(initialValues.discordNode);
  const [googleNode, setGoogleNode] = useState(initialValues.googleNode);
  const [notionNode, setNotionNode] = useState(initialValues.notionNode);
  const [slackNode, setSlackNode] = useState(initialValues.slackNode);
  const [isLoading, setIsLoading] = useState(initialValues.isLoading);
  const [workflowTemplate, setWorkFlowTemplate] = useState(
    initialValues.workflowTemplate,
  );

  const values = {
    discordNode,
    setDiscordNode,
    googleNode,
    setGoogleNode,
    notionNode,
    setNotionNode,
    slackNode,
    setSlackNode,
    isLoading,
    setIsLoading,
    workflowTemplate,
    setWorkFlowTemplate,
  };

  return (
    <ConnectionContext.Provider value={values}>
      {children}
    </ConnectionContext.Provider>
  );
}

export const useConnections = () => {
  const context = useContext(ConnectionContext);
  if (!context)
    throw new Error("Did you wrap your component with ConnectionsProvider?");

  return context;
};
