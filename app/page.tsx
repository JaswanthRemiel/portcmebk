"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ListeningSection from "./components/ListeningSection";
import WritingsSection from "./components/WritingsSection";
import ProjectsSection from "./components/ProjectsSection";
import WorkExperienceSection from "./components/WorkExperienceSection";
import CapturesSection from "./components/CapturesSection";
import ContactSection from "./components/ContactSection";

export default function Portfolio() {
  const [expandedWork, setExpandedWork] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visitorTime, setVisitorTime] = useState(new Date());
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const songs = [
    {
      title: "Perfect - Ed Sheeran",
      url: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v",
    },
    {
      title: "Golden hour - JVKE",
      url: "https://open.spotify.com/track/4yNk9iz9WVJikRFle3XEvn",
    },
    {
      title: "Monica - Anirudh Ravichander",
      url: "https://open.spotify.com/track/2t1pEpxPz91KldW7C0FyZv",
    },
  ];

  const workExperience = [
    {
      id: "ncompass",
      company: "NCompass",
      logo: "N",
      title: "SDE-1 (Software Development Engineer)",
      period: "Present",
      description:
        "Currently working as a Software Development Engineer at NCompass, developing scalable software solutions and contributing to product development. Focused on building robust applications using modern technologies and best practices in software engineering.",
    },
    {
      id: "awwwards",
      company: "Awwwards",
      logo: "A",
      title: "Young Jury",
      period: "Present",
      description:
        "Serving as a Young Jury member at Awwwards, evaluating and recognizing outstanding web design and development projects from around the world. Contributing to the assessment of creativity, functionality, and innovation in digital experiences.",
    },
    {
      id: "microsoft",
      company: "Microsoft",
      logo: "M",
      title: "Microsoft Learn Student Ambassador",
      period: "2024",
      description:
        "Became the first and only Microsoft Learn Student Ambassador (MLSA) at my college in 2024. Served as a Beta Ambassador, promoting Microsoft technologies and organizing technical workshops for fellow students. Conducted sessions on cloud computing, web development, and emerging technologies while building connections within the developer community.",
    },
    {
      id: "samsung",
      company: "Samsung R&D Institute India Bangalore",
      logo: "S",
      title: "PRISM Intern",
      period: "2024",
      description:
        "Participated in the PRISM internship program at Samsung R&D Institute India Bangalore, working on cutting-edge research and development projects. Gained exposure to innovative technologies and contributed to Samsung's research initiatives in software development and emerging tech solutions.",
    },
    {
      id: "iptif",
      company: "IIT Palakkad Technology IHub Foundation (IPTIF)",
      logo: "I",
      title: "Summer Intern",
      period: "2023",
      description:
        "Completed a summer internship at IIT Palakkad Technology IHub Foundation, working on technology innovation projects. Gained hands-on experience in research and development while collaborating with academic and industry experts on emerging technology solutions.",
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
      <Header />
      
      <main className="max-w-3xl mx-auto px-6 pb-16">
        <HeroSection isLoaded={isLoaded} />
        
        <ListeningSection 
          isLoaded={isLoaded} 
          songs={songs} 
          currentSongIndex={currentSongIndex} 
        />
        
        <WritingsSection isLoaded={isLoaded} />
        
        <ProjectsSection isLoaded={isLoaded} />
        
        <WorkExperienceSection 
          isLoaded={isLoaded} 
          workExperience={workExperience} 
          expandedWork={expandedWork} 
          toggleWorkExpansion={toggleWorkExpansion} 
        />
        
        <CapturesSection isLoaded={isLoaded} />
        
        <ContactSection 
          isLoaded={isLoaded} 
          visitorTime={visitorTime} 
          formatTime={formatTime} 
        />
      </main>
    </div>
  );
}
