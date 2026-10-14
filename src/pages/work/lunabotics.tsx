import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import { ArrowLeft } from "lucide-react";

const stack = [
  "ROS2 / Nav2",
  "Hybrid A* + MPPI",
  "YOLOv8 (PyTorch)",
  "TensorRT / INT8",
  "LiDAR + camera fusion",
  "Jetson Orin",
  "Unity (synthetic data)",
];


const gallery = [
  {
    src: "/media/lunamining.jpeg",
    alt: "The rover excavating regolith simulant during a field test",
    caption: "Field testing the excavation tooling in the sandbox arena.",
  },
  {
    src: "/media/lunahot.jpeg",
    alt: "Costmap and dig-target mapping during a Lunabotics field test",
    caption: "Costmap and dig-target mapping during a run.",
  },
  {
    src: "/media/lunabotics_selfie.jpeg",
    alt: "The CMU Lunabotics team with the rover",
    caption: "The team, somewhere around hour 90 of integration testing.",
  },
];

export default function LunaboticsPage() {
  return (
    <>
      <Head>
        <title>CMU Lunabotics | Sai Ravi Teja Gangavarapu</title>
        <meta
          name="description"
          content="Autonomy for a lunar excavation rover: ROS2 nav stack, GPU MPPI control, YOLOv8 obstacle detection on Jetson Orin, and LiDAR-camera fusion."
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
            poster="/media/lunamining.jpeg"
          />
          <p className="text-xs text-theme-text-secondary mt-2">
            An autonomous dig-and-dump cycle, start to finish.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-widest text-theme-text-secondary mb-3">
            The autonomy stack
          </h2>
          <p className="text-sm text-theme-text-secondary leading-relaxed">
            The rover plans a route with Hybrid A* and follows it with a GPU MPPI controller quick
            enough to replan as the terrain changes. LiDAR and a camera feed obstacle detection and
            the costmap, with segmentation running onboard a Jetson Orin. Digging and dumping runs
            as a state machine driven by what those sensors see. We put 100+ hours of field testing
            into it, mostly in a sandbox standing in for the lunar surface.
          </p>
          <p className="text-xs text-theme-text-secondary mt-4 font-mono">{stack.join(" · ")}</p>
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
