import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import { ArrowLeft } from "lucide-react";

export default function F1TenthPage() {
  return (
    <>
      <Head>
        <title>F1TENTH Autonomous Racing | Sai Ravi Teja Gangavarapu</title>
      </Head>

      <Navbar />

      <main className="max-w-2xl mx-auto px-6 pt-32 pb-24 text-theme-text-primary">
        <Link
          href="/left-brain"
          className="inline-flex items-center gap-1 text-xs text-theme-text-secondary hover:text-theme-text-primary mb-10"
        >
          <ArrowLeft size={12} /> Archive
        </Link>

        <h1 className="text-2xl font-semibold mb-6">F1TENTH Autonomous Racing</h1>

        <div className="lg:-mx-28">
          <video
            className="w-full rounded border border-white/10 bg-black block"
            src="/media/f1tenth/f1tenth.mp4"
            poster="/images/left/f1tenth.png"
            controls
            playsInline
            preload="metadata"
          />
        </div>
      </main>
    </>
  );
}
