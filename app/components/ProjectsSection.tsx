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
      <h2 className="text-lg font-medium mb-6 text-foreground flex items-center gap-3">
        projects
      </h2>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 hover:translate-x-1 transition-transform duration-200 items-start sm:items-center">
          <img
            src="/modern-blog-interface.png"
            alt="Blog project"
            className="w-full sm:w-48 h-40 sm:h-24 object-cover rounded-md shadow-md flex-shrink-0"
          />
          <div className="w-full">
            <a
              href="https://github.com/JaswanthRemiel/linkdescrip-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h3 className="font-medium text-l mb-1">linkdescrip-ai</h3>
              <p className="text-l text-muted-foreground leading-relaxed">
                linkdescrip ai is a web application that helps users generate
                optimized linkedin headlines based on their professional bios.
                by utilizing the power of natural language processing models.
              </p>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 hover:translate-x-1 transition-transform duration-200 items-start sm:items-center">
          <img
            src="/web-development-roadmap.png"
            alt="Learn web dev"
            className="w-full sm:w-48 h-40 sm:h-24 object-cover rounded-md shadow-md flex-shrink-0"
          />
          <div className="w-full">
            <a
              href="https://github.com/JaswanthRemiel/batmode"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h3 className="font-medium text-l mb-1">batmode extension</h3>
              <p className="text-l text-muted-foreground leading-relaxed">
                batmode is a chrome extension that instantly enables dark mode
                across any website, giving your eyes the comfort they deserve.
              </p>
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 hover:translate-x-1 transition-transform duration-200 items-start sm:items-center">
          <img
            src="/web-development-roadmap.png"
            alt="Learn web dev"
            className="w-full sm:w-48 h-40 sm:h-24 object-cover rounded-md shadow-md flex-shrink-0"
          />
          <div className="w-full">
            <a
              href="https://www.npmjs.com/package/gitsush"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h3 className="font-medium text-l mb-1">gitsush</h3>
              <p className="text-l text-muted-foreground leading-relaxed">
                a quirky and efficient cli tool that wraps git add, commit, and
                push into a single command. with gshh, you can handle your git
                workflow like a sushi chef fast, clean, and with style.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
