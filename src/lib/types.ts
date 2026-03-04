import { EditorNode } from "@/providers/editor-provider";

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

export type EditorCanvasTypes =
  | "Email"
  | "Condition"
  | "AI"
  | "Slack"
  | "Google Drive"
  | "Notion"
  | "Custom Webhook"
  | "Google Calendar"
  | "Trigger"
  | "Action"
  | "Wait";

export type EditorCanvasCardType = {
  title: string;
  descriptoin: string;
  completed: boolean;
  current: boolean;
  metadata: any;
  type: EditorCanvasTypes;
};

export type EditorNodeType = {
  id: string;
  type: EditorCanvasCardType["type"];
  position: {
    x: number;
    y: number;
  };
  data: EditorCanvasCardType;
};

export type EditorActions =
  | {
      type: "LOAD_DATA";
      payload: {
        elements: EditorNode[];
        edges: {
          id: string;
          source: string;
          target: string;
        }[];
      };
    }
  | {
      type: "UPDATE_NODE";
      payload: {
        elements: EditorNode[];
      };
    }
  | { type: "UNDO" }
  | { type: "REDO" }
  | {
      type: "SELECT_ELEMENT";
      payload: {
        element: EditorNode;
      };
    };
