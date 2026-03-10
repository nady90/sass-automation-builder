import { EditorCanvasCardType } from "@/lib/types";
import { useEditor } from "@/providers/editor-provider";
import { useNodeId } from "@xyflow/react";
import { useMemo } from "react";
import EditorCanvasIconHelper from "./EditorCanvasIconHelper";

export default function EditorCanvasCardSingle({
  data,
}: {
  data: EditorCanvasCardType;
}) {
  const { state, dispatch } = useEditor();
  const nodeId = useNodeId();

  const logo = useMemo(() => {
    return <EditorCanvasIconHelper type={data.type} />;
  }, [data]);

  return <div></div>;
}
