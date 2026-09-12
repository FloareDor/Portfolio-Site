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
            <h1 className="font-neue-montreal text-5xl leading-none tracking-[-0.04em] md:text-7xl">
              Blog<span className="text-theme-text-secondary">.</span>
            </h1>
          </header>

          <section>
            <Link
              href={ARTICLE_PATH}
              className="group grid gap-7 border-b border-white/15 py-8 transition-colors duration-300 hover:border-white/50 md:grid-cols-[1fr_auto] md:items-start md:py-11"
            >
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
