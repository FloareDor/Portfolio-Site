import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import { ArrowLeft } from "lucide-react";

const clips = [
  {
    src: "/media/robotlearning/Hopper-v2.mp4",
    note: "Hopper. Cloning tips over. Matches the expert by round 3.",
  },
  {
    src: "/media/robotlearning/Ant-v2.mp4",
    note: "Ant. Cloning already walks, slower and less steady than the expert.",
  },
];

function Clip({ src, note }: { src: string; note: string }) {
  return (
    <figure>
      <video
        className="w-full rounded border border-white/10 bg-black block"
        src={src}
        autoPlay
        loop
        muted
        controls
        playsInline
        preload="metadata"
      />
      <figcaption className="text-xs text-theme-text-secondary mt-1.5 lg:px-28">
        {note}
      </figcaption>
    </figure>
  );
}

export default function RobotLearningPage() {
  return (
    <>
      <Head>
        <title>Teaching a Robot to Copy | Sai Ravi Teja Gangavarapu</title>
        <meta
          name="description"
          content="Behavior cloning and DAgger on MuJoCo robots: why copying an expert drifts, and what fixes it."
        />
      </Head>

      <Navbar />

      <main className="max-w-2xl mx-auto px-6 pt-32 pb-24 text-theme-text-primary">
        <Link
          href="/left-brain"
          className="inline-flex items-center gap-1 text-xs text-theme-text-secondary hover:text-theme-text-primary mb-10"
        >
          <ArrowLeft size={12} /> Archive
        </Link>

        <p className="text-[11px] uppercase tracking-[0.2em] text-theme-text-secondary font-mono mb-3">
          16-831 · Small project
        </p>
        <h1 className="text-2xl font-semibold mb-6">Teaching a Robot to Copy</h1>

        <figure className="mb-10 lg:-mx-28">
          <video
            className="w-full rounded border border-white/10 bg-black block"
            src="/media/robotlearning/humanoid-raw-vs-standardized.mp4"
            autoPlay
            loop
            muted
            controls
            playsInline
            preload="auto"
          />
          <figcaption className="text-xs text-theme-text-secondary mt-2 lg:px-28">
            Humanoid, the same training run twice. On raw observations every DAgger round falls.
            On standardized observations it tracks the expert by round 3.
          </figcaption>
        </figure>

        <div className="flex flex-col gap-4 mb-10">
          <p className="text-sm text-theme-text-secondary leading-relaxed">
            Behavior cloning is supervised learning on the expert&apos;s (observation, action)
            pairs. A two-layer MLP gets Ant to about 70% of expert return and Hopper to about 25%,
            where it falls over. The failure is distribution shift: training only covers states
            the expert visits, the expert never falls, so one error puts the policy
            off-distribution and the next action is worse.
          </p>
          <p className="text-sm text-theme-text-secondary leading-relaxed">
            DAgger fixes the data, not the model. Roll out the policy, have the expert label the
            states it actually visited, aggregate, retrain. Hopper goes 948 to 3,768 in three
            rounds, against an expert at 3,773.
          </p>
          <p className="text-sm text-theme-text-secondary leading-relaxed">
            Humanoid needed observation normalization before any of that worked. Its 376
            dimensions have magnitudes from near zero to over 200, so raw, the large ones dominate
            the first-layer gradients and every round fell. Standardizing per dimension fixed it.
          </p>
        </div>

        <div className="flex flex-col gap-5 lg:-mx-28">
          {clips.map((clip) => (
            <Clip key={clip.src} src={clip.src} note={clip.note} />
          ))}
        </div>

        <p className="text-xs text-theme-text-secondary mt-8">
          Each strip is one robot from the same initial state: expert, cloning, then DAgger rounds
          1, 3 and 9. Red means the episode ended early.
        </p>
        <p className="text-xs text-theme-text-secondary mt-2 font-mono">
          PyTorch · MuJoCo · Behavior Cloning · DAgger
        </p>
      </main>
    </>
  );
}
