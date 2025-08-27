interface WritingsSectionProps {
  isLoaded: boolean;
}

export default function WritingsSection({ isLoaded }: WritingsSectionProps) {
  return (
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
                my journey as a microsoft student ambassador{" "}
                <span className="text-muted-foreground">↗</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                experiences, learnings, and community building through the
                microsoft student ambassador program.
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
                from wi-fi research to web development{" "}
                <span className="text-muted-foreground">↗</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                how my background in antenna research led me to discover my
                passion for web technologies and development.
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
                building better developer experiences{" "}
                <span className="text-muted-foreground">↗</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                thoughts on creating intuitive interfaces and tools that
                make developers' lives easier and more productive.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
