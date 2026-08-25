import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="h-screen w-screen relative overflow-hidden bg-theme-bg-primary">
      <div className="relative z-30">
        <Navbar className="bg-transparent" titleStyle="text-theme-text-primary" />
      </div>

      <div className="relative z-0 flex h-full flex-col items-center justify-center px-6 pb-14 text-center">
        <h1
          className="font-neue-montreal text-4xl text-transparent bg-clip-text sm:text-5xl"
          style={{ backgroundImage: "linear-gradient(to left, var(--text-gradient-from), var(--text-gradient-via), var(--text-gradient-to))" }}
        >
          Hi, I&apos;m Ravi.
        </h1>
        <p className="mt-3 font-neue-montreal text-sm text-theme-text-secondary sm:text-base">
          Software engineer working on autonomy, ml systems and creative tools.
        </p>
      </div>
    </main>
  );
}
