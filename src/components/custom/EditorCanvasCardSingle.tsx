import { EditorCanvasCardType } from "@/lib/types";
import { useEditor } from "@/providers/editor-provider";
import { Position, useNodeId } from "@xyflow/react";
import { useMemo } from "react";
import EditorCanvasIconHelper from "./EditorCanvasIconHelper";
import CustomHandle from "./CustomHandle";

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

  return (
    <>
      {data.type !== "Trigger" && data.type !== "Google Drive" && (
        <CustomHandle position={Position.Top} type="target" />
      )}
    </>
  );
}
