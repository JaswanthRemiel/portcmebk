interface ContactSectionProps {
  isLoaded: boolean;
  visitorTime: Date;
  formatTime: (date: Date) => string;
}

export default function ContactSection({
  isLoaded,
  visitorTime,
  formatTime,
}: ContactSectionProps) {
  return (
    <section
      className={`mb-12 transition-all duration-1000 delay-800 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <h2 className="text-sm font-medium mb-4 text-foreground">contact</h2>
      <div className="flex flex-wrap gap-4 sm:gap-6 text-sm mb-4">
        <a
          href="https://twitter.com/jaswanthremiel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          twitter / x
        </a>
        <a
          href="https://github.com/JaswanthRemiel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          github
        </a>
        <a
          href="https://linkedin.com/in/jaswanthremiel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          linkedin
        </a>
        <a
          href="mailto:jaswanthremiel@gmail.com"
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
  );
}
