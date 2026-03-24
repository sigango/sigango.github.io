import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { EngineeringProcess } from './sections/EngineeringProcess';
import { Projects } from './sections/Projects';
import { Research } from './sections/Research';
import { Skills } from './sections/Skills';
import { InteractiveAI } from './sections/InteractiveAI';
import { Contact } from './sections/Contact';
import { useTheme } from './hooks/useTheme';
import { LanguageProvider } from './hooks/useLanguage';

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <main>
          <Hero isDark={isDark} />
          <About isDark={isDark} />
          <Experience isDark={isDark} />
          <Research isDark={isDark} />
          <Skills isDark={isDark} />
          <Projects isDark={isDark} />
          <EngineeringProcess isDark={isDark} />
          <InteractiveAI isDark={isDark} />
          <Contact isDark={isDark} />
        </main>
        <Footer isDark={isDark} />
      </div>
    </LanguageProvider>
  );
}
