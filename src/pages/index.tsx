import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import { ArrowUpRight } from "lucide-react";

interface WorkRow {
  date: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  external?: boolean;
}

const workRows: WorkRow[] = [
  {
    date: "2026",
    title: "CMU Lunabotics — Autonomy Lead",
    description:
      "Autonomy on a lunar excavation rover that digs and dumps regolith while evading obstacles, advised by Prof. Wenshan Wang — NASA Autonomy Award, first-year team. ROS2 nav stack, GPU MPPI control (~100x faster than CPU), YOLOv8 obstacle detection quantized for Jetson Orin, LiDAR-camera fusion.",
    tags: ["ROS2", "MPPI", "YOLOv8", "TensorRT", "LiDAR"],
    href: "/work/lunabotics",
  },
  {
    date: "2025–",
    title: "Adversarial Robustness of Drone Perception",
    description:
      "AirLab, CMU Robotics Institute, working with Eungchang Mason Lee. Agentic test bench in NVIDIA Isaac Sim that generates scenarios and surfaces failure modes in learning-based UAV perception and obstacle avoidance.",
    tags: ["Isaac Sim", "UAV Perception", "SLAM"],
  },
  {
    date: "2025",
    title: "Evaluating a Level-4 Self-Driving Stack",
    description:
      "Autonomy ML Systems Intern, Motional. Kinematics-aware, multimodal evaluation metrics for trajectory prediction and a production regression dashboard over ~1 PB of driving logs.",
    tags: ["SQL", "AWS Athena", "Polars"],
  },
  {
    date: "2024–2025",
    title: "CMR Driverless & F1TENTH",
    description:
      "LiDAR-camera cone detection for Carnegie Mellon Racing's driverless Formula SAE car, plus reactive obstacle avoidance and path tracking on a 1/10-scale autonomous racer.",
    tags: ["ROS2", "LiDAR", "Motion Planning"],
  },
  {
    date: "2024",
    title: "gitask.org",
    description:
      "Offline, in-browser RAG tool — chat with any GitHub repo by swapping the URL. Local LLM inference via WebGPU, AST chunking, binary-quantized embeddings. Zero data leaves the browser. 200+ users.",
    tags: ["WebGPU", "TypeScript", "RAG"],
    href: "https://gitask.org",
    external: true,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Sai Ravi Teja Gangavarapu</title>
        <meta
          name="description"
          content="MSE (Scalable Systems) student at Carnegie Mellon. Robotics, ML, and vision — AirLab, CMU Lunabotics, previously Motional."
        />
      </Head>

      <Navbar />

      <main className="max-w-2xl mx-auto px-6 pt-32 pb-24 text-theme-text-primary">
        <section className="mb-16">
          <h1 className="text-2xl font-semibold mb-4">Sai Ravi Teja Gangavarapu</h1>
          <div className="flex flex-col gap-4 text-theme-text-secondary leading-relaxed">
            <p>
              I&apos;m pursuing a Master of Software Engineering (Scalable Systems) at{" "}
              <span className="text-theme-text-primary">Carnegie Mellon University</span>.
            </p>
            <p>
              Currently, I&apos;m at CMU&apos;s <span className="text-theme-text-primary">AirLab</span>,
              working with Eungchang Mason Lee to break drone perception systems before they break
              themselves. I also work on autonomy for{" "}
              <Link
                href="/work/lunabotics"
                className="text-theme-text-primary underline underline-offset-4 decoration-white/30 hover:decoration-white"
              >
                CMU Lunabotics
              </Link>
              , a lunar excavation robot team, under Prof. Wenshan Wang.
            </p>
            <p>
              Previously, I interned on the autonomy team at{" "}
              <span className="text-theme-text-primary">Motional</span>. I&apos;m interested in the
              intersection of robotics, ML, and vision — and in making machine learning run on
              actual hardware. I also make music sometimes.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xs uppercase tracking-widest text-theme-text-secondary mb-4">
            Work
          </h2>
          <div className="flex flex-col">
            {workRows.map((row) => {
              const inner = (
                <>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-medium group-hover:underline underline-offset-4">
                      {row.title}
                    </h3>
                    <span className="text-xs text-theme-text-secondary shrink-0 font-mono">
                      {row.date}
                    </span>
                  </div>
                  <p className="text-sm text-theme-text-secondary leading-relaxed mt-1">
                    {row.description}
                  </p>
                  <p className="text-xs text-theme-text-secondary mt-2 font-mono">
                    {row.tags.join(" · ")}
                  </p>
                </>
              );

              const rowClass =
                "group py-5 border-b border-white/10" +
                (row.href ? " cursor-pointer" : "");

              if (!row.href) {
                return (
                  <div className={rowClass} key={row.title}>
                    {inner}
                  </div>
                );
              }

              if (row.external) {
                return (
                  <a
                    className={rowClass}
                    key={row.title}
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {inner}
                  </a>
                );
              }

              return (
                <Link className={rowClass} key={row.title} href={row.href}>
                  {inner}
                </Link>
              );
            })}
          </div>
          <p className="text-sm text-theme-text-secondary mt-6">
            30+ more projects — hackathons, research, music & art — in the{" "}
            <Link href="/left-brain" className="underline underline-offset-4 hover:text-theme-text-primary">
              engineering archive
            </Link>{" "}
            and{" "}
            <Link href="/right-brain" className="underline underline-offset-4 hover:text-theme-text-primary">
              music &amp; art archive
            </Link>
            .
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-xs uppercase tracking-widest text-theme-text-secondary mb-4">
            Also
          </h2>
          <p className="text-sm text-theme-text-secondary leading-relaxed">
            I make ambient/experimental electronic music, inspired by Porter Robinson, Kasbo, and
            Tourist.{" "}
            <a
              href="https://soundcloud.com/raven-714331711"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-theme-text-primary inline-flex items-center gap-1"
            >
              Listen on SoundCloud <ArrowUpRight size={12} />
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-widest text-theme-text-secondary mb-4">
            Contact
          </h2>
          <div className="flex flex-wrap gap-x-2 gap-y-1 text-sm">
            <a className="underline underline-offset-4 hover:text-theme-text-primary" href="mailto:sairavig@cs.cmu.edu">
              Email
            </a>
            <span className="text-theme-text-secondary">·</span>
            <a
              className="underline underline-offset-4 hover:text-theme-text-primary"
              href="https://github.com/floaredor"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <span className="text-theme-text-secondary">·</span>
            <a
              className="underline underline-offset-4 hover:text-theme-text-primary"
              href="https://linkedin.com/in/sai-ravi-teja-gangavarapu"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className="text-theme-text-secondary">·</span>
            <a
              className="underline underline-offset-4 hover:text-theme-text-primary"
              href="https://www.instagram.com/floare_dor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <span className="text-theme-text-secondary">·</span>
            <a
              className="underline underline-offset-4 hover:text-theme-text-primary"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé
            </a>
            <span className="text-theme-text-secondary">·</span>
            <a
              className="underline underline-offset-4 hover:text-theme-text-primary"
              href="/cv-full.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Full CV
            </a>
          </div>
          <p className="text-xs text-theme-text-secondary mt-8">
            © {new Date().getFullYear()} Sai Ravi Teja Gangavarapu
          </p>
        </section>
      </main>
    </>
  );
}
