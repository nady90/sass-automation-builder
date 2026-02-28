import WorkflowCard from "@/components/custom/WorkflowCard";
import WorkFlowsButton from "@/components/custom/WorkFlowsButton";

export default function WorkflowsPage() {
  return (
    <div className="p-4 flex flex-col gap-y-2 w-[40vw]">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-6xl">Workflows</h1>
        <WorkFlowsButton />
      </div>

      <div className="flex flex-col gap-y-2">
        <WorkflowCard
          name="automation workflow"
          description="creating a test workflow"
          id="111"
          publish={false}
        />

        <WorkflowCard
          name="automation workflow"
          description="creating a test workflow"
          id="111"
          publish={false}
        />

        <WorkflowCard
          name="automation workflow"
          description="creating a test workflow"
          id="111"
          publish={false}
        />

        <WorkflowCard
          name="automation workflow"
          description="creating a test workflow"
          id="111"
          publish={false}
        />

        <WorkflowCard
          name="automation workflow"
          description="creating a test workflow"
          id="111"
          publish={false}
        />
      </div>
    </div>
  );
}
