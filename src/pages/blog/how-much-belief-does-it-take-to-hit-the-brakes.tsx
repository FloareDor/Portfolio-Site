import Head from "next/head";

export default function BeliefAndBrakesArticle() {
  return (
    <>
      <Head>
        <title>How Much Belief Does It Take to Hit the Brakes?</title>
        <meta
          name="description"
          content="A controlled experiment on which motion-prediction errors actually change a planner's decision."
        />
      </Head>

      <iframe
        src="/blog/belief-and-brakes-article.html"
        title="How Much Belief Does It Take to Hit the Brakes?"
        className="block h-screen w-full border-0 bg-[#f5f2ea]"
      />
    </>
  );
}
