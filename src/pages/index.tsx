import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import { ArrowUpRight } from "lucide-react";

interface WorkRow {
  title: string;
  description: string;
  tags?: string[];
  href?: string;
  external?: boolean;
}

const workRows: WorkRow[] = [
  {
    title: "CMU Lunabotics",
    description:
      "A lunar excavation rover that drives itself across simulated regolith, digs, hauls, and dumps its load while steering around rocks and craters, with no human in the loop. We were lucky enough to pick up an autonomy award at NASA's competition.",
    tags: ["ROS2", "MPPI", "YOLOv8", "TensorRT", "LiDAR"],
    href: "/work/lunabotics",
  },
  {
    title: "Self-Supervised Offroad Autonomous Driving",
    description:
      "AirLab, CMU Robotics Institute. Self-supervised approaches to offroad autonomous driving, learning from unlabeled driving data instead of hand-annotated supervision.",
    tags: ["Self-Supervised Learning", "Offroad Autonomy", "Perception"],
  },
  {
    title: "Autonomy ML Evals for Self-Driving Taxi 🚕",
    description:
      "Motional. Evaluating how well transformer-based trajectory prediction models anticipate what other agents on the road are about to do.",
  },
  {
    title: "CMR Driverless & F1TENTH",
    description:
      "LiDAR-camera cone detection for Carnegie Mellon Racing's driverless Formula SAE car, plus reactive obstacle avoidance and path tracking on a 1/10-scale autonomous racer.",
    tags: ["ROS2", "LiDAR", "Motion Planning"],
  },
  {
    title: "gitask.org",
    description:
      "Offline, in-browser RAG tool: chat with any GitHub repo by swapping the URL. Local LLM inference via WebGPU, AST chunking, binary-quantized embeddings. Zero data leaves the browser. 200+ users.",
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
          content="Master's student at the School of Computer Science, Carnegie Mellon University. Robotics and ML: AirLab, CMU Lunabotics, previously Motional."
        />
      </Head>

      <Navbar />

      <main className="max-w-2xl mx-auto px-6 pt-32 pb-24 text-theme-text-primary">
        <section className="mb-16">
          <h1 className="text-2xl font-semibold mb-4">Sai Ravi Teja Gangavarapu</h1>
          <div className="flex flex-col gap-4 text-theme-text-secondary leading-relaxed">
            <p>
              I&apos;m pursuing a Master&apos;s at the School of Computer Science at{" "}
              <span className="text-theme-text-primary">Carnegie Mellon University</span>.
            </p>
            <p>
              Currently, I&apos;m at CMU&apos;s <span className="text-theme-text-primary">AirLab</span>,
              working on self-supervised offroad autonomous driving. I also work on autonomy
              for{" "}
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
              intersection of robotics and ML, and in making machine learning run on actual
              hardware. I also make music sometimes.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <Link href="/work/lunabotics" className="group block">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
              <Image
                src="/media/lunabotics_selfie.jpeg"
                alt="With the CMU Lunabotics rover"
                fill
                priority
                className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                sizes="(max-width: 768px) 100vw, 42rem"
              />
            </div>
            <p className="text-xs text-theme-text-secondary mt-2">
              With the CMU Lunabotics rover.{" "}
              <span className="underline underline-offset-4 group-hover:text-theme-text-primary">
                Read about the autonomy stack
              </span>
            </p>
          </Link>
        </section>

        <section className="mb-16">
          <h2 className="text-xs uppercase tracking-widest text-theme-text-secondary mb-4">
            Work
          </h2>
          <div className="flex flex-col">
            {workRows.map((row) => {
              const inner = (
                <>
                  <h3 className="font-medium group-hover:underline underline-offset-4">
                    {row.title}
                  </h3>
                  <p className="text-sm text-theme-text-secondary leading-relaxed mt-1">
                    {row.description}
                  </p>
                  {row.tags && row.tags.length > 0 && (
                    <p className="text-xs text-theme-text-secondary mt-2 font-mono">
                      {row.tags.join(" · ")}
                    </p>
                  )}
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
            30+ more projects (hackathons, research, music &amp; art) in the{" "}
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
