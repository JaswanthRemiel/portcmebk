"use client";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const [expandedWork, setExpandedWork] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visitorTime, setVisitorTime] = useState(new Date());
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const songs = [
    {
      title: "monica - coolie",
      url: "https://open.spotify.com/track/2t1pEpxPz91KldW7C0FyZv?si=5a20ce63655147bc",
    },
    {
      title: "espresso - sabrina",
      url: "https://open.spotify.com/track/2qSkIjg1o9h3YT9RAgYN75?si=2be37c1fa4364e94",
    },
  ];
  const workExperience = [
    {
      id: "vercel",
      company: "Vercel",
      logo: "V",
      title: "Senior Frontend Engineer",
      period: "2023 - Present",
      description:
        "Leading the development of next-generation web applications using React, Next.js, and modern deployment strategies. Collaborated with design teams to create seamless user experiences and optimized performance across global edge networks. Mentored junior developers and contributed to open-source projects that serve millions of developers worldwide.",
    },
    {
      id: "stripe",
      company: "Stripe",
      logo: "S",
      title: "Full Stack Developer",
      period: "2021 - 2023",
      description:
        "Built and maintained critical payment infrastructure serving thousands of businesses globally. Developed robust APIs, implemented security protocols, and created developer tools that simplified payment integration. Worked closely with product teams to launch new features and improve developer experience across multiple programming languages.",
    },
    {
      id: "startup",
      company: "TechFlow",
      logo: "T",
      title: "Founding Engineer",
      period: "2019 - 2021",
      description:
        "As one of the first engineers, I architected and built the entire platform from ground up using modern web technologies. Established engineering practices, hired and mentored the initial development team, and scaled the application to handle thousands of concurrent users. Led technical decisions that enabled rapid growth and successful funding rounds.",
    },
  ];
  useEffect(() => {
    setIsLoaded(true);

    // Update time every second
    const timer = setInterval(() => {
      const now = new Date();
      setVisitorTime(now);
    }, 1000);

    const carouselTimer = setInterval(() => {
      setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(carouselTimer);
    };
  }, []);

  const toggleWorkExpansion = (workId: string) => {
    setExpandedWork(expandedWork === workId ? null : workId);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: true,
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      {/* Header with theme toggle */}
      <header className="flex justify-end p-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="h-9 w-9"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </header>

      {/* Main content */}
      <main className="max-w-3xl mx-auto px-6 pb-16">
        {/* Hero section */}
        <div
          className={`mb-6 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="text-4xl font-light mb-4 leading-relaxed">
            hola, i'm{" "}
            <span className="font-semibold relative group cursor-pointer">
              remiel
            </span>
          </h1>
          <p className="text-muted-foreground  text-2XL text-justify leading-relaxed">
            a fullstack developer, designer at heart, and ex microsoft student
            ambassador. i build cool stuff, explain tech without the jargon, and
            occasionally wonder if my Wi-Fi antenna research was just the
            universe trolling me.
          </p>
          <p className="text-muted-foreground text-justify  text-2XL leading-relaxed">
            you can find me across the web sharing projects, ideas, and lessons
            learned. whether it’s code on github, thoughts on my blog, or
            updates on linkedin, these links are the best way to connect.
          </p>
        </div>
        <div
          className={`mb-8 transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-wrap gap-4 font-semibold text-1xl text-green-600">
            <a href="/resume">resume/cv</a>
            <a href="/blog">blog</a>
            <Link href="/guestbook">guestbook</Link>
          </div>
        </div>

        {/* Listening to */}
        <section
          className={`mb-12 transition-all duration-1000 delay-325 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-sm font-medium mb-2 text-foreground">
            listening to
          </h2>

          <div className="hidden sm:flex sm:flex-row sm:gap-6">
            {songs.map((song, index) => (
              <div key={index} className="flex items-center gap-2">
                <span
                  className="text-lg animate-spin"
                  style={{ animationDuration: `${2 + index * 0.5}s` }}
                >
                  💿
                </span>
                <a
                  href={song.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-sm hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  {song.title}
                </a>
              </div>
            ))}
          </div>
          <div className="sm:hidden">
            <div className="flex items-center gap-2">
              <span
                className="text-lg animate-spin"
                style={{ animationDuration: "2s" }}
              >
                💿
              </span>
              <a
                href={songs[currentSongIndex].url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sm hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                {songs[currentSongIndex].title}{" "}
              </a>
            </div>
          </div>
        </section>

        {/* Writings */}
        <section
          className={`mb-12 transition-all duration-1000 delay-350 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-sm font-medium mb-6 text-foreground">writings</h2>
          <div className="space-y-6">
            <div className="flex gap-4 hover:translate-x-1 transition-transform duration-200">
              <div className="w-8 h-8 bg-muted rounded flex items-center justify-center text-xs">
                ✍️
              </div>
              <div>
                <a
                  href="https://medium.com/@jaswanthremiel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="font-medium text-sm mb-1 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    building scalable react applications{" "}
                    <span className="text-muted-foreground">↗</span>
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    lessons learned from architecting large-scale frontend
                    applications and managing state complexity.
                  </p>
                </a>
              </div>
            </div>

            <div className="flex gap-4 hover:translate-x-1 transition-transform duration-200">
              <div className="w-8 h-8 bg-muted rounded flex items-center justify-center text-xs">
                🔗
              </div>
              <div>
                <a
                  href="https://medium.com/@jaswanthremiel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="font-medium text-sm mb-1 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    web3 development fundamentals{" "}
                    <span className="text-muted-foreground">↗</span>
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    a practical guide to blockchain development, smart
                    contracts, and decentralized applications.
                  </p>
                </a>
              </div>
            </div>

            <div className="flex gap-4 hover:translate-x-1 transition-transform duration-200">
              <div className="w-8 h-8 bg-muted rounded flex items-center justify-center text-xs">
                🎨
              </div>
              <div>
                <a
                  href="https://medium.com/@jaswanthremiel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="font-medium text-sm mb-1 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    design systems for developers{" "}
                    <span className="text-muted-foreground">↗</span>
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    bridging the gap between design and development through
                    systematic component architecture.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section
          className={`mb-12 transition-all duration-1000 delay-400 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-sm font-light mb-6 text-foreground">
            work experience
          </h2>
          {/* Timeline design */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-muted"></div>

            <div className="space-y-8">
              {workExperience.map((work, index) => (
                <div key={work.id} className="relative flex items-start gap-6">
                  {/* Timeline dot */}
                  <div className="relative z-10 w-3 h-3 bg-foreground rounded-full mt-2"></div>

                  <div className="flex-1 min-w-0">
                    <div
                      className="cursor-pointer group"
                      onClick={() => toggleWorkExpansion(work.id)}
                    >
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-sm font-medium group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                          {work.title}
                        </h3>
                        <span className="text-xs text-muted-foreground">
                          at
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {work.company}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        {work.period}
                      </p>
                    </div>

                    {expandedWork === work.id && (
                      <div className="mt-3 animate-in slide-in-from-top-2 duration-200">
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {work.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`mb-12 transition-all duration-1000 delay-600 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-sm font-medium mb-6 text-foreground">projects</h2>
          <div className="space-y-6">
            <div className="flex gap-4 hover:translate-x-1 transition-transform duration-200 group">
              <div className="w-8 h-8 bg-muted rounded flex items-center justify-center text-xs">
                📝
              </div>
              <div className="relative">
                <div className="absolute -top-20 left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                  <div className="bg-white dark:bg-gray-100 p-2 shadow-xl rounded-lg">
                    <img
                      src="/modern-blog-interface.png"
                      alt="Blog project"
                      className="w-32 h-18 object-cover rounded-md shadow-md"
                    />
                  </div>
                </div>
                <h3 className="font-medium text-sm mb-1">
                  blogging website ( full stack ){" "}
                  <span className="text-muted-foreground">↗</span>
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  a blogging site for exploring code, sharing knowledge, and
                  building the future.
                </p>
              </div>
            </div>

            <div className="flex gap-4 hover:translate-x-1 transition-transform duration-200 group">
              <div className="w-8 h-8 bg-muted rounded flex items-center justify-center text-xs">
                {}
              </div>
              <div className="relative">
                <div className="absolute -top-20 left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                  <div className="bg-white dark:bg-gray-100 p-2 shadow-xl rounded-lg">
                    <img
                      src="/web-development-roadmap.png"
                      alt="Learn web dev"
                      className="w-32 h-18 object-cover rounded-md shadow-md"
                    />
                  </div>
                </div>
                <h3 className="font-medium text-sm mb-1">
                  learn web dev <span className="text-muted-foreground">↗</span>
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  a basic roadmap and resources for learning web development.
                </p>
              </div>
            </div>

            <div className="flex gap-4 hover:translate-x-1 transition-transform duration-200 group">
              <div className="w-8 h-8 bg-muted rounded flex items-center justify-center text-xs font-medium">
                T
              </div>
              <div className="relative">
                <div className="absolute -top-20 left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                  <div className="bg-white dark:bg-gray-100 p-2 shadow-xl rounded-lg">
                    <img
                      src="/question-answer-platform.png"
                      alt="Ask me anything"
                      className="w-32 h-18 object-cover rounded-md shadow-md"
                    />
                  </div>
                </div>
                <h3 className="font-medium text-sm mb-1">
                  ask me anything{" "}
                  <span className="text-muted-foreground">↗</span>
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  for getting all the doubts and question at one place.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Captures */}
        <section
          className={`mb-12 transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-sm font-medium mb-6 text-foreground">captures</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="polaroid-photo rotate-[-2deg] hover:rotate-0 hover:scale-105 transition-all duration-300">
              <div className="bg-white dark:bg-gray-100 p-3 shadow-lg">
                <img
                  src="/urban-street-scene.png"
                  alt="Street photography"
                  className="w-full h-24 object-cover mb-2"
                />
                <p className="text-xs text-gray-600 text-center font-handwriting">
                  urban vibes
                </p>
              </div>
            </div>

            <div className="polaroid-photo rotate-[3deg] hover:rotate-0 hover:scale-105 transition-all duration-300">
              <div className="bg-white dark:bg-gray-100 p-3 shadow-lg">
                <img
                  src="/mountain-landscape.png"
                  alt="Nature landscape"
                  className="w-full h-24 object-cover mb-2"
                />
                <p className="text-xs text-gray-600 text-center font-handwriting">
                  mountain escape
                </p>
              </div>
            </div>

            <div className="polaroid-photo rotate-[1deg] hover:rotate-0 hover:scale-105 transition-all duration-300">
              <div className="bg-white dark:bg-gray-100 p-3 shadow-lg">
                <img
                  src="/warm-coffee-shop.png"
                  alt="Coffee shop"
                  className="w-full h-24 object-cover mb-2"
                />
                <p className="text-xs text-gray-600 text-center font-handwriting">
                  morning ritual
                </p>
              </div>
            </div>

            <div className="polaroid-photo rotate-[-3deg] hover:rotate-0 hover:scale-105 transition-all duration-300">
              <div className="bg-white dark:bg-gray-100 p-3 shadow-lg">
                <img
                  src="/sunset-golden-hour-silhouette.png"
                  alt="Sunset silhouette"
                  className="w-full h-24 object-cover mb-2"
                />
                <p className="text-xs text-gray-600 text-center font-handwriting">
                  golden hour
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          className={`mb-12 transition-all duration-1000 delay-800 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-sm font-medium mb-4 text-foreground">contact</h2>
          <div className="flex flex-wrap gap-4 sm:gap-6 text-sm mb-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              twitter / x
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              github
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              linkedin
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              say hello
            </a>
          </div>
          <div className="text-xs text-muted-foreground">
            <span className="font-medium">your time:</span>{" "}
            {formatTime(visitorTime)}
          </div>
        </section>
      </main>
    </div>
  );
}
