import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="mx-auto max-w-xl p-6 space-y-4">
      <Card>
        <CardHeader><CardTitle>Thanapon Sarasap — Resume</CardTitle></CardHeader>
        <CardContent className="space-y-2">
          <Link className="text-primary underline" href="/professional">Professional (QA/IT)</Link><br/>
          <Link className="text-primary underline" href="/farm">Farm Work</Link>
        </CardContent>
      </Card>
    </main>
  );
}
