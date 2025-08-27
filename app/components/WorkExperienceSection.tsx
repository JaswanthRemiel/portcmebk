interface WorkExperience {
  id: string;
  company: string;
  logo: string;
  title: string;
  period: string;
  description: string;
}

interface WorkExperienceSectionProps {
  isLoaded: boolean;
  workExperience: WorkExperience[];
  expandedWork: string | null;
  toggleWorkExpansion: (workId: string) => void;
}

export default function WorkExperienceSection({ 
  isLoaded, 
  workExperience, 
  expandedWork, 
  toggleWorkExpansion 
}: WorkExperienceSectionProps) {
  return (
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
  );
}
