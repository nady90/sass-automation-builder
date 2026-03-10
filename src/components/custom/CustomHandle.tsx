import { useEditor } from "@/providers/editor-provider";
import { Handle, HandleProps, Position } from "@xyflow/react";
import { CSSProperties } from "react";

type Props = HandleProps & { style?: CSSProperties };

const selector = (s: any) => ({
  nodeInternals: s.nodeInternals,
  edges: s.edges,
});

export default function CustomHandle(props: Props) {
  const { state, dispatch } = useEditor();

  return <Handle {...props} className="-bottom-2! h-4! w-4! bg-black" />;
}
