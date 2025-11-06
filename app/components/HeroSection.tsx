import Link from "next/link";

interface HeroSectionProps {
  isLoaded: boolean;
}

export default function HeroSection({ isLoaded }: HeroSectionProps) {
  return (
    <>
      {/* Hero section */}
      <div
        className={`mb-6 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h1 className="text-3xl sm:text-5xl mb-4 font-advercase-regular font-light leading-relaxed">
          hola, soy{" "}
          <span className="font-bold group">
            remiel<span className="text-orange-500">*</span>
          </span>
        </h1>
        <p className="text-shadow-muted-foreground text-sm sm:text-base text-justify leading-relaxed">
          a fullstack developer, *designer at heart, and ex microsoft student
          ambassador. i build cool stuff, explain tech without the jargon, and
          occasionally wonder if my Wi-Fi antenna research was just the universe
          trolling me. you can find me across the web sharing projects, ideas,
          and lessons learned. whether it's code on github, thoughts on my blog,
          or updates on linkedin, these links are the best way to connect.
        </p>
      </div>
      <div
        className={`mb-8 transition-all duration-1000 delay-300 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex flex-wrap gap-3 font-semibold text-sm sm:text-base text-green-600">
          <a href="https://drive.google.com/file/d/1iV-bwfZufebtiIIT98ZEZFaEtS7VDDCV/view?usp=sharing">
            resume
          </a>
          <a href="https://jaswanthremiel.medium.com">blog</a>
          <Link href="/guestbook">guestbook</Link>
        </div>
      </div>
    </>
  );
}
