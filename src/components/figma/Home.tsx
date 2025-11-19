import { Github, Atom } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";

export default function HomeFigma() {
  const { pathname } = useRouter();
  return (
    <div className="bg-background text-foreground flex min-h-screen w-full flex-col">
      <header className="flex h-20 items-center border-b border-[#29292e] py-5">
        <div className="container-1108 flex w-full items-center justify-between gap-8">
          <Link href="/">
            <span className="text-2xl font-bold hover:text-white/90">
              ig.news
            </span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/">
              <span
                className={cn(
                  "underline-c underline-gap-8 underline-thick transition-colors",
                  pathname === "/"
                    ? "font-bold text-white underline"
                    : "text-[#a8a8b3] hover:text-white hover:underline",
                )}
              >
                Home
              </span>
            </Link>
            <Link href="/posts">
              <span
                className={cn(
                  "underline-c underline-gap-8 underline-thick transition-colors",
                  pathname.startsWith("/posts")
                    ? "font-bold text-white underline"
                    : "text-[#a8a8b3] hover:text-white hover:underline",
                )}
              >
                Posts
              </span>
            </Link>
          </nav>
          <button className="flex items-center gap-2 rounded-full bg-[#1f2729] px-3 py-2 text-xs md:px-4 md:py-3 md:text-sm">
            <Github className="size-4 text-white md:size-5" />
            <span className="font-bold text-[#e1e1e6] sm:hidden">Sign</span>
            <span className="hidden font-bold whitespace-nowrap text-[#e1e1e6] sm:inline">
              Sign in with GitHub
            </span>
          </button>
        </div>
      </header>
      <div className="flex-1 pt-5">
        <div className="container-1108 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <Atom className="size-6 text-sky-400" />
              <span className="text-xl font-bold text-[#e1e1e6]">
                Hey, welcome
              </span>
            </div>
            <h1 className="mt-10 text-6xl leading-tight font-black md:text-7xl">
              <span>News about </span>
              <span className="text-sky-400">React </span>
              <span>world</span>
            </h1>
            <p className="mt-6 text-xl text-white opacity-80">
              Get acess to all the publications
            </p>
            <p className="text-xl font-bold text-sky-400">for $9,90 month</p>
            <button className="mt-10 rounded-full bg-[#eba417] px-16 py-5 text-lg font-bold text-[#121214]">
              Subscribe now
            </button>
          </div>
          <div className="relative aspect-[334/400] w-full">
            <Image
              src="/Ilustra.png"
              alt="Cover image"
              fill
              sizes="(min-width: 768px) 520px, 100vw"
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden md:block" />
        </div>
      </div>
    </div>
  );
}
