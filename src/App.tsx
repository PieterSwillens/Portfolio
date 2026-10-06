import { useMemo } from 'react'
import './styles/global.css'
import './styles/tokens.css'
import './styles/motion.css'

import { profile } from '@/content/profile'
import { projects } from '@/content/projects'
import { featuredSkill, relations, skillCategories, skills } from '@/content/skills'
import { Hero } from '@/sections/hero/Hero'
import { Skills } from '@/sections/skills/Skills'
import { Projects } from '@/sections/projects/Projects'
import { useIsMobile } from "@/hooks/useIsMobile.ts";
import { Navigation } from "@/sections/navigation/Navigation.tsx";
import { navLinks, sectionIds } from "@/content/navigation.ts";
import { Contact } from "@/sections/contact/Contact.tsx";
import { contact } from "@/content/contact.ts";
import { Footer } from "@/sections/footer/Footer.tsx";

export default function App() {
  const isMobile = useIsMobile();

  const particlesConfig = useMemo(() => isMobile
    ? { quantity: 120, connectionDistance: 40 }
    : { quantity: 500, connectionDistance: 50 }, [isMobile])

  return (
    <>
      <nav>
        <Navigation links={ navLinks }/>
      </nav>

      <main>
        <Hero sectionId={ sectionIds.top } profile={ profile } particlesConfig={ particlesConfig }/>
        <Skills sectionId={ sectionIds.skills } skills={ skills } relations={ relations } categories={ skillCategories }
                featuredSkillKey={ featuredSkill }/>
        <Projects sectionId={ sectionIds.projects } projects={ projects }/>
        <Contact sectionId={ sectionIds.contact } contact={ contact }/>
      </main>

      <footer>
        <Footer name={ profile.name } topAnchor={ sectionIds.top }/>
      </footer>
    </>
  )
}