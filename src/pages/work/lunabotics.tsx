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

const facts = [
  { label: "Role", value: "Autonomy subsystem lead" },
  { label: "Advisor", value: "Prof. Wenshan Wang, CMU Robotics Institute" },
  { label: "Award", value: "NASA \u201cFirst Steps\u201d Autonomy Award" },
  { label: "When", value: "Jan 2026 \u2013 present" },
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
        <title>CMU Lunabotics — Sai Ravi Teja Gangavarapu</title>
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
            A lunar excavation rover that drives itself across simulated regolith, digs, evades
            rocks and craters, and dumps its load — without a human in the loop. We were the first
            first-year team to score core autonomy points, which won us NASA&apos;s{" "}
            <span className="text-theme-text-primary">&ldquo;First Steps&rdquo; Autonomy Award</span>.
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
          <h2 className="text-xs uppercase tracking-widest text-theme-text-secondary mb-4">
            At a glance
          </h2>
          <dl className="flex flex-col">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-4 py-3 border-b border-white/10"
              >
                <dt className="text-xs uppercase tracking-widest text-theme-text-secondary shrink-0">
                  {fact.label}
                </dt>
                <dd className="text-sm text-right">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-theme-text-secondary mt-4 font-mono">{stack.join(" · ")}</p>
        </section>

        <section className="mb-12 flex flex-col gap-8">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-theme-text-secondary mb-3">
              Navigation
            </h2>
            <p className="text-sm text-theme-text-secondary leading-relaxed">
              I built the rover&apos;s ROS2 navigation stack: Hybrid A* for global planning, and a
              GPU-optimized MPPI controller that evaluates thousands of candidate trajectories in
              about 0.5&nbsp;ms versus roughly 50&nbsp;ms on CPU — around 100× faster, which is what
              made real-time replanning on the rover possible at all.
            </p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest text-theme-text-secondary mb-3">
              Perception
            </h2>
            <p className="text-sm text-theme-text-secondary leading-relaxed">
              Obstacle detection runs an instance segmentation model (PyTorch / YOLOv8) trained on
              synthetic data from a Unity reconstruction of the competition arena. Getting it onto
              the rover&apos;s Jetson Orin meant quantizing FP32 → INT8 with TensorRT: 65.6% smaller
              for about a 3% drop in mIoU. A LiDAR + camera fusion pipeline feeds the costmap in
              real time — RANSAC ground-plane removal for obstacles, point-to-pixel projection to
              localize dig targets.
            </p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest text-theme-text-secondary mb-3">
              Excavation &amp; field testing
            </h2>
            <p className="text-sm text-theme-text-secondary leading-relaxed">
              The dig-and-dump sequence is a sensor-driven state machine, using LiDAR, camera, and
              motor-encoder feedback to trigger transitions. I validated it over 100+ hours of
              integrated field testing with the controls and avionics teams — mostly in a sandbox
              standing in for the lunar surface — and set up network teleoperation so we could debug
              remotely when things went sideways.
            </p>
          </div>
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
