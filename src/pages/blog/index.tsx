import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";

const ARTICLE_PATH = "/blog/how-much-belief-does-it-take-to-hit-the-brakes";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog — Ravi Gangavarapu</title>
        <meta
          name="description"
          content="Research notes and essays by Ravi Gangavarapu."
        />
      </Head>

      <main className="min-h-screen bg-theme-bg-primary text-theme-text-primary">
        <Navbar className="bg-theme-bg-primary/90" />

        <div className="mx-auto max-w-5xl px-5 pb-24 pt-36 md:px-8 md:pt-44">
          <header className="mb-16 max-w-2xl md:mb-24">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.28em] text-theme-text-secondary">
              Notes / experiments / things I&apos;m learning
            </p>
            <h1 className="font-neue-montreal text-5xl leading-none tracking-[-0.04em] md:text-7xl">
              Blog<span className="text-theme-text-secondary">.</span>
            </h1>
          </header>

          <section aria-labelledby="latest-writing">
            <div className="mb-6 flex items-center justify-between border-b border-white/15 pb-3">
              <h2
                id="latest-writing"
                className="font-mono text-xs uppercase tracking-[0.2em] text-theme-text-secondary"
              >
                Latest writing
              </h2>
              <span className="font-mono text-xs text-theme-text-secondary">01</span>
            </div>

            <Link
              href={ARTICLE_PATH}
              className="group grid gap-7 border-b border-white/15 py-8 transition-colors duration-300 hover:border-white/50 md:grid-cols-[9rem_1fr_auto] md:items-start md:py-11"
            >
              <div className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.16em] text-theme-text-secondary">
                <p>Research note</p>
                <p>Motion planning</p>
              </div>

              <div className="max-w-2xl">
                <h3 className="font-neue-montreal text-3xl leading-[1.02] tracking-[-0.025em] transition-transform duration-300 group-hover:translate-x-1 md:text-5xl">
                  How Much Belief Does It Take to Hit the Brakes?
                </h3>
                <p className="mt-5 max-w-xl text-base leading-7 text-theme-text-secondary md:text-lg">
                  A controlled experiment on which motion-prediction errors
                  actually change a planner&apos;s decision.
                </p>
              </div>

              <span
                aria-hidden="true"
                className="text-2xl text-theme-text-secondary transition-all duration-300 group-hover:translate-x-1 group-hover:text-theme-text-primary"
              >
                ↗
              </span>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
