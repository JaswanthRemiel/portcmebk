interface ProjectsSectionProps {
  isLoaded: boolean;
}

export default function ProjectsSection({ isLoaded }: ProjectsSectionProps) {
  return (
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
            <a
              href="https://github.com/JaswanthRemiel"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h3 className="font-medium text-sm mb-1">
                personal portfolio website{" "}
                <span className="text-muted-foreground">↗</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                this very website - a modern, responsive portfolio built
                with next.js, tailwind css, and thoughtful ux design.
              </p>
            </a>
          </div>
        </div>

        <div className="flex gap-4 hover:translate-x-1 transition-transform duration-200 group">
          <div className="w-8 h-8 bg-muted rounded flex items-center justify-center text-xs">
            🎓
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
            <a
              href="https://github.com/JaswanthRemiel"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h3 className="font-medium text-sm mb-1">
                student workshop materials{" "}
                <span className="text-muted-foreground">↗</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                educational resources and workshop content created during my
                time as a microsoft student ambassador.
              </p>
            </a>
          </div>
        </div>

        <div className="flex gap-4 hover:translate-x-1 transition-transform duration-200 group">
          <div className="w-8 h-8 bg-muted rounded flex items-center justify-center text-xs font-medium">
            📡
          </div>
          <div className="relative">
            <div className="absolute -top-20 left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
              <div className="bg-white dark:bg-gray-100 p-2 shadow-xl rounded-lg">
                <img
                  src="/question-answer-platform.png"
                  alt="Research project"
                  className="w-32 h-18 object-cover rounded-md shadow-md"
                />
              </div>
            </div>
            <h3 className="font-medium text-sm mb-1">
              wi-fi antenna research{" "}
              <span className="text-muted-foreground">📊</span>
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              academic research project on antenna design and wireless
              communication optimization - my pre-web development journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
