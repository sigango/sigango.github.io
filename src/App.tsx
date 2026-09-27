import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { EducationSection } from './sections/Education';
import { Experience } from './sections/Experience';
import { EngineeringProcess } from './sections/EngineeringProcess';
import { Projects } from './sections/Projects';
import { Research } from './sections/Research';
import { Skills } from './sections/Skills';
import { InteractiveAI } from './sections/InteractiveAI';
import { Contact } from './sections/Contact';
import { HRView } from './sections/HRView';
import { useTheme } from './hooks/useTheme';
import { useViewMode } from './hooks/useViewMode';
import { LanguageProvider } from './hooks/useLanguage';

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const { viewMode, setViewMode, toggleViewMode } = useViewMode();

  return (
    <LanguageProvider>
      <div className={`min-h-screen transition-colors duration-200 ${isDark ? 'dark bg-surface-950 text-surface-50' : 'bg-surface-50 text-surface-900'}`}>
        <Navbar
          isDark={isDark}
          toggleTheme={toggleTheme}
          viewMode={viewMode}
          toggleViewMode={toggleViewMode}
        />

        <main className="relative">
          {viewMode === 'hr' ? (
            <HRView
              isDark={isDark}
              onSwitchToInteractive={() => setViewMode('interactive')}
            />
          ) : (
            <>
              <Hero isDark={isDark} />
              <About isDark={isDark} />
              <EducationSection isDark={isDark} />
              <Experience isDark={isDark} />
              <Research isDark={isDark} />
              <Skills isDark={isDark} />
              <Projects isDark={isDark} />
              <EngineeringProcess isDark={isDark} />
              <InteractiveAI isDark={isDark} />
              <Contact isDark={isDark} />
            </>
          )}
        </main>

        <Footer isDark={isDark} />
      </div>
    </LanguageProvider>
  );
}
