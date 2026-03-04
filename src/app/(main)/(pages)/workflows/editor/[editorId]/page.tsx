import ConnectionsProvider from "@/providers/connections-provider";
import EditorProvider from "@/providers/editor-provider";

export default async function EditorPage({
  params,
}: {
  params: Promise<{ editorId: string }>;
}) {
  // TODO:
  // If there is no id in the database (MUST BELONG TO THE USERID), throw error
  // &
  // create an error.tsx page that redirects to /workflows to create a workflow

  const { editorId } = await params;

  return (
    <div className="h-full">
      <EditorProvider>
        <ConnectionsProvider>
          <div></div>
        </ConnectionsProvider>
      </EditorProvider>
    </div>
  );
}
