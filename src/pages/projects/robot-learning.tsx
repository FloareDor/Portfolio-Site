import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import { ArrowLeft } from "lucide-react";

const stack = ["PyTorch", "MuJoCo", "Behavior Cloning", "DAgger"];

const clips = [
  {
    src: "/media/robotlearning/Hopper-v2.mp4",
    caption: "Hopper. Behavior cloning tips over. By DAgger round 3 it matches the expert.",
  },
  {
    src: "/media/robotlearning/Ant-v2.mp4",
    caption: "Ant. Behavior cloning already walks, at about 70% of expert return.",
  },
  {
    src: "/media/robotlearning/Humanoid-v2.mp4",
    caption: "Humanoid with raw observations. Every DAgger round falls.",
  },
  {
    src: "/media/robotlearning/Humanoid-v2_normalized.mp4",
    caption: "Humanoid with standardized observations. Same training, now it tracks the expert.",
  },
];

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
          <ArrowLeft size={12} /> Back
        </Link>

        <section className="mb-10">
          <h1 className="text-2xl font-semibold mb-3">Teaching a Robot to Copy</h1>
          <p className="text-theme-text-secondary leading-relaxed">
            A MuJoCo robot and an expert policy that already knows how to run it. The task is to
            train a neural network policy to match the expert, using only recordings of the expert.
          </p>
        </section>

        <section className="mb-12 flex flex-col gap-5">
          <p className="text-sm text-theme-text-secondary leading-relaxed">
            Behavior cloning treats this as plain supervised learning. Take the (observation,
            action) pairs from the expert rollouts and train a two-layer MLP to predict the action
            from the observation. Ant reaches about 70% of expert return. Hopper reaches about 25%,
            then falls over.
          </p>
          <p className="text-sm text-theme-text-secondary leading-relaxed">
            The reason is distribution shift. The training set only covers states the expert
            visits, and the expert never falls. At test time the policy drives itself, so one small
            error puts it in a state that was never in the data. Its action there is worse, which
            puts it further out, and the error compounds until the robot is on the floor.
          </p>
          <p className="text-sm text-theme-text-secondary leading-relaxed">
            DAgger (dataset aggregation) fixes the data rather than the model. Roll out the current
            policy, then ask the expert to label the states that policy actually visited. Add those
            labels to the dataset, retrain, repeat. Every round drags the training distribution
            toward the policy&apos;s own state distribution. Hopper goes from 948 to 3,768 in three
            rounds, against an expert at 3,773.
          </p>
          <p className="text-sm text-theme-text-secondary leading-relaxed">
            Humanoid stalled. Its observation is 376 numbers whose typical magnitudes run from near
            zero to over 200. Left raw, the large inputs dominate the gradients into the first
            layer and the small ones barely move it, so no amount of DAgger helped and every round
            fell. Standardizing each dimension by the dataset mean and standard deviation fixed it,
            and the same run tracked the expert.
          </p>
          <p className="text-xs text-theme-text-secondary font-mono">{stack.join(" · ")}</p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-widest text-theme-text-secondary mb-2">
            The runs
          </h2>
          <p className="text-sm text-theme-text-secondary leading-relaxed mb-6">
            Each strip is the same robot five times from the same initial state. Left to right:
            expert, behavior cloning, then DAgger rounds 1, 3 and 9. Red text means the episode
            terminated early, which here means it fell.
          </p>
          <div className="flex flex-col gap-6 lg:-mx-32">
            {clips.map((clip) => (
              <figure key={clip.src}>
                <video
                  className="w-full rounded-lg border border-white/10 bg-black"
                  src={clip.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
                <figcaption className="text-xs text-theme-text-secondary mt-2 px-1 lg:px-32">
                  {clip.caption}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="text-xs text-theme-text-secondary mt-8">
            Coursework for 16-831, Introduction to Robot Learning.
          </p>
        </section>
      </main>
    </>
  );
}
