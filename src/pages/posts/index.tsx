import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PostsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-2xl font-semibold">Posts</h1>
      <p className="text-muted-foreground text-sm">
        Esta página está em construção.
      </p>
      <Link href="/">
        <Button className="cursor-pointer">Voltar</Button>
      </Link>
    </div>
  );
}
