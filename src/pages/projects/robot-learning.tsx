import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import { ArrowLeft } from "lucide-react";

/* Validated categorical pair on a black surface (CVD dE 26.8, normal dE 31.8). */
const HOPPER = "#3987e5";
const ANT = "#d95926";

const EXPERT = { hopper: 3772.67, ant: 4713.65 };
const RUNS = {
  hopper: [948, 875, 2017, 3768, 3745, 3787, 3784, 3779, 3778, 3778],
  ant: [3376, 4725, 4673, 4635, 3961, 4711, 4687, 4822, 4578, 4826],
};
const pct = (v: number, e: number) => (v / e) * 100;

function Strip({ src, note }: { src: string; note: string }) {
  return (
    <figure className="my-7 lg:-mx-28">
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
      <figcaption className="text-xs text-theme-text-secondary mt-2">{note}</figcaption>
    </figure>
  );
}

/* Return as a share of expert return, so both tasks sit on one axis. */
function Chart() {
  const [hover, setHover] = useState<number | null>(null);

  const W = 640;
  const H = 236;
  const L = 40;
  const R = 574;
  const T = 18;
  const B = 192;
  const yMax = 110;
  const x = (i: number) => L + (i * (R - L)) / 9;
  const y = (v: number) => B - (v / yMax) * (B - T);

  const series = [
    { key: "hopper", label: "Hopper", color: HOPPER, vals: RUNS.hopper, exp: EXPERT.hopper },
    { key: "ant", label: "Ant", color: ANT, vals: RUNS.ant, exp: EXPERT.ant },
  ].map((s) => ({ ...s, pts: s.vals.map((v) => pct(v, s.exp)) }));

  // Both series converge on the expert, so their end labels would sit on top of
  // each other. Push them apart when they are closer than a line of text.
  const endYs = series.map((s) => y(s.pts[9]));
  const labelYs = [...endYs];
  if (Math.abs(endYs[0] - endYs[1]) < 14) {
    const mid = (endYs[0] + endYs[1]) / 2;
    const [hi, lo] = endYs[0] <= endYs[1] ? [0, 1] : [1, 0];
    labelYs[hi] = mid - 7;
    labelYs[lo] = mid + 7;
  }

  return (
    <figure className="my-8">
      <div className="flex items-center gap-4 mb-2">
        {series.map((s) => (
          <span key={s.key} className="flex items-center gap-1.5 text-xs text-theme-text-secondary">
            <span className="w-3 h-0.5 rounded-full" style={{ background: s.color }} />
            {s.label}
          </span>
        ))}
        <span className="flex items-center gap-1.5 text-xs text-theme-text-secondary">
          <span className="w-3 border-t border-dashed border-white/50" />
          expert
        </span>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        role="img"
        aria-label="Return as a percentage of expert return over ten DAgger iterations"
      >
        {[0, 25, 50, 75, 100].map((g) => (
          <g key={g}>
            <line
              x1={L}
              x2={R}
              y1={y(g)}
              y2={y(g)}
              stroke="#fff"
              strokeOpacity={g === 100 ? 0 : 0.07}
            />
            <text
              x={L - 8}
              y={y(g) + 4}
              textAnchor="end"
              className="fill-current text-theme-text-secondary"
              fontSize="11"
              fontFamily="ui-monospace, monospace"
            >
              {g}
            </text>
          </g>
        ))}
        <line
          x1={L}
          x2={R}
          y1={y(100)}
          y2={y(100)}
          stroke="#fff"
          strokeOpacity="0.5"
          strokeDasharray="4 4"
        />

        {Array.from({ length: 10 }, (_, i) => (
          <text
            key={i}
            x={x(i)}
            y={B + 18}
            textAnchor="middle"
            className="fill-current text-theme-text-secondary"
            fontSize="11"
            fontFamily="ui-monospace, monospace"
          >
            {i}
          </text>
        ))}
        <text
          x={(L + R) / 2}
          y={H - 2}
          textAnchor="middle"
          className="fill-current text-theme-text-secondary"
          fontSize="11"
          fontFamily="ui-monospace, monospace"
        >
          DAgger iteration
        </text>

        {series.map((s, si) => (
          <g key={s.key}>
            <path
              d={s.pts.map((v, i) => `${i ? "L" : "M"}${x(i)},${y(v)}`).join(" ")}
              fill="none"
              stroke={s.color}
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {s.pts.map((v, i) => (
              <circle
                key={i}
                cx={x(i)}
                cy={y(v)}
                r={hover === i ? 4 : 2.5}
                fill={s.color}
                stroke="#000"
                strokeWidth="2"
              />
            ))}
            <text
              x={x(9) + 8}
              y={labelYs[si] + 4}
              fill={s.color}
              fontSize="11"
              fontFamily="ui-monospace, monospace"
            >
              {s.label}
            </text>
          </g>
        ))}

        {hover !== null && (
          <line x1={x(hover)} x2={x(hover)} y1={T} y2={B} stroke="#fff" strokeOpacity="0.25" />
        )}
        {Array.from({ length: 10 }, (_, i) => (
          <rect
            key={i}
            x={x(i) - (R - L) / 18}
            y={T}
            width={(R - L) / 9}
            height={B - T}
            fill="transparent"
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
          />
        ))}
      </svg>

      <figcaption className="text-xs text-theme-text-secondary mt-1 min-h-[2.5rem]">
        {hover === null ? (
          "Return as a share of expert return. Iteration 0 is plain behavior cloning."
        ) : (
          <span className="font-mono">
            iter {hover} · Hopper {RUNS.hopper[hover].toLocaleString()} (
            {pct(RUNS.hopper[hover], EXPERT.hopper).toFixed(0)}%) · Ant{" "}
            {RUNS.ant[hover].toLocaleString()} ({pct(RUNS.ant[hover], EXPERT.ant).toFixed(0)}%)
          </span>
        )}
      </figcaption>
    </figure>
  );
}


function Section({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <div className="flex items-baseline gap-3 mb-3">
        <span className="text-xs font-mono text-theme-text-secondary">{n}</span>
        <h2 className="text-xs uppercase tracking-widest text-theme-text-secondary">{title}</h2>
      </div>
      {children}
    </section>
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

        <header className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-theme-text-secondary font-mono mb-3">
            16-831 · Introduction to Robot Learning
          </p>
          <h1 className="font-neue-montreal text-4xl leading-tight mb-4">
            Teaching a Robot to Copy
          </h1>
          <p className="text-theme-text-secondary leading-relaxed">
            I trained a neural net to make a MuJoCo robot run, using nothing but recordings of an
            expert policy that already knows how. It went badly at first, which turned out to be
            the interesting part.
          </p>
        </header>

        <Section n="01" title="Cloning the expert">
          <p className="text-sm text-theme-text-secondary leading-relaxed">
            I started with behavior cloning, which is plain supervised learning. I took the
            (observation, action) pairs from the expert rollouts and trained a two-layer MLP to
            predict the action from the observation. On Ant that gets most of the way there, about
            70% of expert return.
          </p>
          <Strip
            src="/media/robotlearning/Ant-v2.mp4"
            note="Ant. Cloning already walks, just slower and less steady than the expert."
          />
        </Section>

        <Section n="02" title="Where it breaks">
          <p className="text-sm text-theme-text-secondary leading-relaxed mb-4">
            Hopper reaches about 25%, then falls over. The cause is distribution shift. The training
            set only covered states the expert visits, and the expert never falls. At test time the
            policy drives itself, so one small error puts it in a state I never trained it on. Its
            action there is worse, which puts it further out, and the error compounds until the
            robot is on the floor.
          </p>
          <Strip
            src="/media/robotlearning/Hopper-v2.mp4"
            note="Hopper. Cloning tips over almost immediately. By round 3 it matches the expert."
          />
        </Section>

        <Section n="03" title="DAgger">
          <p className="text-sm text-theme-text-secondary leading-relaxed">
            DAgger (dataset aggregation) fixes the data rather than the model. I rolled out the
            current policy, asked the expert to label the states that policy actually visited,
            added those labels to the dataset, and retrained. Each round drags the training
            distribution toward the policy&apos;s own state distribution. Hopper went from 948 to
            3,768 in three rounds, against an expert at 3,773.
          </p>
          <Chart />
        </Section>

        <Section n="04" title="The humanoid problem">
          <p className="text-sm text-theme-text-secondary leading-relaxed">
            Humanoid stalled on me. Its observation is 376 numbers whose typical magnitudes run
            from near zero to over 200. Left raw, the large inputs dominated the gradients into the
            first layer and the small ones barely moved it, so no amount of DAgger helped and every
            round fell. I standardized each dimension by the dataset mean and standard deviation,
            and the same run tracked the expert.
          </p>
          <Strip
            src="/media/robotlearning/Humanoid-v2.mp4"
            note="Raw observations. Every round falls."
          />
          <Strip
            src="/media/robotlearning/Humanoid-v2_normalized.mp4"
            note="Standardized observations. Same training, now it keeps up."
          />
        </Section>

        <footer className="border-t border-white/10 pt-5">
          <p className="text-xs text-theme-text-secondary font-mono">
            PyTorch · MuJoCo · Behavior Cloning · DAgger
          </p>
          <p className="text-xs text-theme-text-secondary mt-2">
            Each strip is one robot five times from the same initial state. Red text in a panel
            means the episode terminated early, which here means it fell.
          </p>
        </footer>
      </main>
    </>
  );
}
