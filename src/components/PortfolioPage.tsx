'use client'
import React from 'react';
import { ExternalLink, ChevronRight, Music, Code, Brain, Award, Microscope } from 'lucide-react';
import InstagramEmbed from './InstagramEmbed';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-purple-900 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Sai Ravi Teja Gangavarapu</h1>
          <p className="text-xl mb-6">Music Technology Researcher & Software Engineer</p>
          <p className="text-lg opacity-90">Exploring the intersection of AI, Music, and Human-Computer Interaction</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Research Publications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Microscope className="w-6 h-6" />
            Research Publications
          </h2>
          <div className="bg-gray-900 rounded-lg shadow-xl p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">IEEE WCCI 2024 (CEC)</h3>
              <p className="text-gray-400 mb-4">
                "Emotion Aligned Music Composition from Sound Fundamentals Using Differential Evolution"
              </p>
              <ul className="list-disc pl-6 text-gray-300">
                <li className="mb-2">Developed novel differential evolution system for emotion-aligned sound synthesis</li>
                <li className="mb-2">Combined music information retrieval with evolutionary computation</li>
                <li>Achieved 90% classification accuracy using self-organizing maps and fuzzy clustering</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Music Technology Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Music className="w-6 h-6" />
            Music Technology Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-lg shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Samplebox</h3>
              <p className="text-gray-400 mb-4">Desktop application to generate sample packs from any song for inspiration (30+ active users)</p>
              <ul className="list-disc pl-6 text-gray-300">
                <li className="mb-2">Stem separation and drum kit extraction</li>
                <li className="mb-2">algorithmic variations of harmonic samples that sound good</li>
                <li>Built with Electron.js, FastAPI, and Librosa</li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Text-to-Synthesizer System</h3>
              <p className="text-gray-400 mb-4">Parameter mapping using LAION-CLAP embeddings</p>
              <ul className="list-disc pl-6 text-gray-300">
                <li className="mb-2">PyTorch implementation with differential evolution</li>
                <li className="mb-2">Natural language control of synthesizer parameters</li>
                <li>STFT-based timbre matching capabilities</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Music Compositions & Media */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Music className="w-6 h-6" />
            Music Compositions & Media
          </h2>
          <div className="grid gap-6">
            <div className="bg-gray-900 rounded-lg shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Featured Works</h3>
              <div className="space-y-6">
                <iframe
                  width="100%"
                  height="300"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1197833611&color=%23040406&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                ></iframe>
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1212479563&color=%23040406&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                ></iframe>
                <div className="mt-4 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <InstagramEmbed url="https://www.instagram.com/p/CXgLeW5hTUT/" />
                    <InstagramEmbed url="https://www.instagram.com/reel/CmFQdRwsQAf/" />
                  </div>
                  <h4 className="text-lg font-semibold mt-8 mb-4">GAN Art Showcase + DJ set (5th and 6th page)</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <InstagramEmbed url="https://www.instagram.com/p/Cpk381-BgGM/" />
                    <InstagramEmbed url="https://www.instagram.com/tv/CluZbX5ANTj" />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-gray-400">
                  My music draws inspiration from artists like Flume, Kasbo, Petit Biscuit, and Tourist, 
                  blending ethereal soundscapes with intricate electronic production. I'm particularly 
                  passionate about experimental sound design, with granular synthesis being one of my 
                  favorite techniques for creating atmospheric pads and textures. My work explores the 
                  space between melodic electronic music and experimental sound design, always pushing 
                  to find new and interesting ways to craft surprising yet pleasing sonic experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Research */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Brain className="w-6 h-6" />
            Technical Research
          </h2>
          <div className="bg-gray-900 rounded-lg shadow-xl p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Michigan State University Research</h3>
              <p className="text-gray-400 mb-4">Working on emotional music transitions and therapeutic music generation</p>
              <ul className="list-disc pl-6 text-gray-300">
                <li className="mb-2">Multi-objective optimization for raga-based music generation</li>
                <li className="mb-2">Implementation of iso principle for mood transitions</li>
                <li>Collaboration with Prof. Kalyanmoy Dev and Prof. Arya Kumar</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Software Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Code className="w-6 h-6" />
            Software Engineering Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-lg shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Project RECON</h3>
              <p className="text-gray-400 mb-4">8-pi compute cluster serving 400+ students</p>
              <ul className="list-disc pl-6 text-gray-300">
                <li className="mb-2">Implemented VLANs and distributed storage</li>
                <li className="mb-2">$2000 funded university infrastructure project</li>
                <li>GlusterFS and OpenMPI implementation</li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Co-Write</h3>
              <p className="text-gray-400 mb-4">AI-powered learning platform with academic integrity focus</p>
              <ul className="list-disc pl-6 text-gray-300">
                <li className="mb-2">Custom RAG model implementation</li>
                <li className="mb-2">Next.js, FastAPI, and LangChain stack</li>
                <li>Professor-defined AI assistance boundaries</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award className="w-6 h-6" />
            Notable Achievements
          </h2>
          <div className="bg-gray-900 rounded-lg shadow-xl p-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <ChevronRight className="w-5 h-5 mt-1 text-blue-400 flex-shrink-0" />
                <div>
                  <span className="font-semibold">First Place, WaffleHacks 2024</span>
                  <p className="text-gray-400">Chrome extension with RAG system for personalized learning</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-5 h-5 mt-1 text-blue-400 flex-shrink-0" />
                <div>
                  <span className="font-semibold">First Place, Noderunner Hackathon</span>
                  <p className="text-gray-400">Implemented Raft consensus protocol in 18 hours</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-5 h-5 mt-1 text-blue-400 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Finalist, NVIDIA Student Ambassador Program</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Connect</h2>
          <div className="flex flex-wrap gap-4">
            <a href="https://linkedin.com/in/sai-ravi-teja-gangavarapu" 
               className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
              <ExternalLink className="w-4 h-4" />
              LinkedIn
            </a>
            <a href="https://soundcloud.com/raven-714331711/popular-tracks" 
               className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
              <ExternalLink className="w-4 h-4" />
              SoundCloud
            </a>
            <a href="https://github.com/yourgithub" 
               className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
              <ExternalLink className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2024 Sai Ravi Teja Gangavarapu</p>
        </div>
      </footer>
    </div>
  );
}