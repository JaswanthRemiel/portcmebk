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
        <h1 className="text-4xl font-light mb-4 leading-relaxed">
          hola, soy{" "}
          <span className="font-bold relative group cursor-pointer">
            remiel*
          </span>
        </h1>
        <p className="text-shadow-muted-foreground font-semibold text-justify  text-2XL leading-relaxed">
          a fullstack developer, *designer at heart, and ex microsoft student
          ambassador. i build cool stuff, explain tech without the jargon, and
          occasionally wonder if my Wi-Fi antenna research was just the universe
          trolling me.
        </p>
        <p className="text-shadow-muted-foreground font-semibold text-justify  text-2XL leading-relaxed">
          you can find me across the web sharing projects, ideas, and lessons
          learned. whether it's code on github, thoughts on my blog, or updates
          on linkedin, these links are the best way to connect.
        </p>
      </div>
      <div
        className={`mb-8 transition-all duration-1000 delay-300 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex flex-wrap gap-4 font-semibold text-1xl text-green-600">
          <a href="https://drive.google.com/file/d/1iV-bwfZufebtiIIT98ZEZFaEtS7VDDCV/view?usp=sharing">
            resume/cv
          </a>
          <a href="https://jaswanthremiel.medium.com">blog</a>
          <Link href="/guestbook">guestbook</Link>
        </div>
      </div>
    </>
  );
}
