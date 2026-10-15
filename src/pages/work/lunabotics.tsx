import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import { ArrowLeft } from "lucide-react";



const gallery = [
  {
    src: "/media/lunahot.jpeg",
    alt: "Laptop showing the rover costmap with numbered dig zones",
    caption: "The costmap mid-run with the dig zones marked, over a remote session into the rover's Jetson.",
  },
  {
    src: "/media/lunabotics_selfie.jpeg",
    alt: "Inside the test tent, with the rover out on the regolith simulant bed",
    caption: "The test arena: regolith simulant, work lights, and the rover partway through a run.",
  },
];

export default function LunaboticsPage() {
  return (
    <>
      <Head>
        <title>CMU Lunabotics | Sai Ravi Teja Gangavarapu</title>
        <meta
          name="description"
          content="A lunar excavation rover that drives itself across simulated regolith, digs, hauls and dumps, with no human in the loop."
        />
      </Head>

      <Navbar />

      <main className="max-w-2xl mx-auto px-6 pt-32 pb-24 text-theme-text-primary">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-xs text-theme-text-secondary hover:text-theme-text-primary mb-10"
        >
          <ArrowLeft size={12} /> Back
        </Link>

        <section className="mb-10">
          <h1 className="text-2xl font-semibold mb-3">CMU Lunabotics</h1>
          <p className="text-theme-text-secondary leading-relaxed">
            NASA&apos;s Lunabotics competition asks university teams to build a rover that can
            mine lunar regolith on its own. Ours drives itself across a simulated lunar surface,
            digs, hauls its load back, and dumps it, steering around rocks and craters the whole
            way, with no human in the loop. As a first-year team we managed to score core autonomy
            points, and were lucky enough to come away with an{" "}
            <span className="text-theme-text-primary">autonomy award</span>.
          </p>
        </section>

        <section className="mb-12">
          <video
            className="w-full rounded-lg border border-white/10"
            src="/media/lunabotics.mp4"
            controls
            playsInline
            muted
            loop
            preload="metadata"
            poster="/media/lunabotics-poster.jpg"
          />
          <p className="text-xs text-theme-text-secondary mt-2">
            A run in the test arena, from the costmap view through to the rover working the pit.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-widest text-theme-text-secondary mb-4">
            From the field
          </h2>
          <div className="flex flex-col gap-6">
            {gallery.map((shot) => (
              <figure key={shot.src}>
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
                  <Image src={shot.src} alt={shot.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 42rem" />
                </div>
                <figcaption className="text-xs text-theme-text-secondary mt-2">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
