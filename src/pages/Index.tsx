import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Achievements } from "@/components/portfolio/Achievements";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { profile } from "@/data/portfolio";

const Index = () => {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    description: profile.tagline,
    sameAs: [profile.socials.github, profile.socials.linkedin, profile.socials.instagram],
  };

  return (
    <div className="min-h-screen bg-void text-text-main">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Achievements />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
