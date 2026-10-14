import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import { ArrowLeft } from "lucide-react";

const stack = ["PyTorch", "MuJoCo", "Behavior Cloning", "DAgger"];

const clips = [
  {
    src: "/media/robotlearning/Hopper-v2.mp4",
    caption:
      "The hopper. Plain copying falls over almost immediately. By round 3 it is hopping like the expert.",
  },
  {
    src: "/media/robotlearning/Ant-v2.mp4",
    caption: "The ant. Copying gets it walking, just slower and clumsier than the expert.",
  },
  {
    src: "/media/robotlearning/Humanoid-v2.mp4",
    caption: "The humanoid, before the fix. Every single round face plants.",
  },
  {
    src: "/media/robotlearning/Humanoid-v2_normalized.mp4",
    caption:
      "The same humanoid after scaling its numbers. Same training, and now it keeps up with the expert.",
  },
];

export default function RobotLearningPage() {
  return (
    <>
      <Head>
        <title>Teaching a Robot to Copy | Sai Ravi Teja Gangavarapu</title>
        <meta
          name="description"
          content="Behavior cloning and DAgger on simulated robots: why copying an expert is not enough, and what fixes it."
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
          <h1 className="text-2xl font-semibold mb-3">Teaching a Robot to Copy</h1>
          <p className="text-theme-text-secondary leading-relaxed">
            There is a robot in a simulator, and an expert that already knows how to make it
            run. The expert is a program someone else wrote, and it never falls over. My job was
            to build a new robot brain that learns to run only by watching it.
          </p>
        </section>

        <section className="mb-12 flex flex-col gap-5">
          <p className="text-sm text-theme-text-secondary leading-relaxed">
            The obvious thing to try first is to record the expert playing, then train a neural net
            to copy it. Show it what the robot sees, ask it what the expert would do, correct it
            when it is wrong. This is called behavior cloning. It half works. The ant crawls along
            at about 70% of the expert&apos;s score. The hopper is a disaster, scoring about a
            quarter of the expert before it tips over.
          </p>
          <p className="text-sm text-theme-text-secondary leading-relaxed">
            The recordings never contain a fall, because the expert never falls. So the student
            only ever sees what a perfect run looks like. The moment it wobbles, it is somewhere it
            has never been, and it guesses. The guess makes the wobble worse. A second later it is
            on the floor.
          </p>
          <p className="text-sm text-theme-text-secondary leading-relaxed">
            The fix is called DAgger, and the idea is simpler than the name. Let the student drive.
            When it wobbles into some strange pose, stop and ask the expert what it would have done
            right there. Add that answer to the training pile and train again. Repeat. Now the
            student is learning from the exact situations it gets itself into, including the ugly
            ones it used to have no answer for. The hopper went from falling over to matching the
            expert in about three rounds of this.
          </p>
          <p className="text-sm text-theme-text-secondary leading-relaxed">
            The humanoid refused to cooperate. It face planted every round, no matter how many I
            ran. That turned out to have nothing to do with the learning. A humanoid reports
            hundreds of numbers about itself, and some are far bigger than others, so the network
            mostly paid attention to the loud ones and ignored the rest. Scaling every number into
            a similar range fixed it, and the same training kept up with the expert.
          </p>
          <p className="text-xs text-theme-text-secondary font-mono">{stack.join(" · ")}</p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-widest text-theme-text-secondary mb-2">
            The runs
          </h2>
          <p className="text-sm text-theme-text-secondary leading-relaxed mb-6">
            Each strip is the same robot five times over, from the same starting point. Left to
            right: the expert, plain copying, then rounds 1, 3 and 9 of asking the expert for help.
            Red text means it hit the floor.
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
