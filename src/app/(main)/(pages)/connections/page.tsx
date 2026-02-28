import { Button } from "@/components/ui/button";
import { CONNECTIONS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function ConnectionsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <div className="p-4 flex flex-col gap-y-2">
      <h1 className="text-6xl">Connections</h1>
      <div>
        <section>
          Connect all your apps directly from here. You may need to connect
          these apps regularly to refresh verification
        </section>
      </div>
      <div className="flex flex-col gap-y-2 ">
        {CONNECTIONS.map((connection, idx) => {
          return <ConnectionCard connection={connection} key={idx} />;
        })}
      </div>
    </div>
  );
}

function ConnectionCard({ connection }: any) {
  return (
    <div className="border flex flex-row justify-between rounded-md p-2">
      <div>
        <Image src={connection.image} width={30} height={30} alt="logo" />
        <h3 className="text-2xl">{connection.title}</h3>
        <p>{connection.description}</p>
      </div>
      <div className="flex flex-col justify-center">
        <Button asChild>
          <Link href={""}>Connect</Link>
        </Button>
      </div>
    </div>
  );
}
