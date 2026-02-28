export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // TODO:
  // If there is no id in the database (MUST BELONG TO THE USERID), throw error
  // &
  // create an error.tsx page that redirects to /workflows to create a workflow

  const { id } = await params;
  return <div></div>;
}
