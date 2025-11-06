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
      <h2 className="text-lg font-medium mb-6 text-foreground">writings</h2>
      <div className="space-y-6">
        <div className="flex gap-4 hover:translate-x-1 transition-transform duration-200">
          <div>
            <a
              href="https://medium.com/design-bootcamp/how-being-a-designer-made-me-a-better-backend-dev-d41bb3ed0da3"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h3 className="font-medium text-l mb-1 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                how being a designer made me a better backend dev
              </h3>
              <p className="text-l justify-normal text-muted-foreground leading-relaxed">
                my journey into the dark, mysterious world of backend
                development, a land of cryptic commands and humming servers, did
                not start with a black hoodie and a glowing terminal.
              </p>
            </a>
          </div>
        </div>

        <div className="flex gap-4 hover:translate-x-1 transition-transform duration-200">
          <div>
            <a
              href="https://uxplanet.org/stop-calling-yourself-a-frontend-developer-its-killing-your-career-9e0150196b99"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h3 className="font-medium text-l mb-1 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                stop calling yourself a frontend developer. it's killing your
                career
              </h3>
              <p className="text-l justify-normal text-muted-foreground leading-relaxed">
                i’m on the awwwards young jury and i see hundreds of technically
                perfect but utterly soulless websites. don’t let yours be one of
                them.
              </p>
            </a>
          </div>
        </div>

        <div className="flex gap-4 hover:translate-x-1 transition-transform duration-200">
          <div>
            <a
              href="https://medium.com/design-bootcamp/the-5-mistakes-that-ux-beginners-make-1c131598cff3"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h3 className="font-medium text-l mb-1 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                the 5 mistakes that UX beginners make
              </h3>
              <p className="text-l justify-normal text-muted-foreground leading-relaxed">
                if you’re new to ux design like i was when i started out, it can
                be difficult to examine what are the most common mistakes and
                how you can avoid them in your own work. here are the five
                biggest mistakes that ux beginners make.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
