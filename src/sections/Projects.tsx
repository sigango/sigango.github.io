import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiGithub, FiExternalLink, FiChevronRight, FiBriefcase } from 'react-icons/fi';
import { siteContent } from '../data/content';
import type { Project, ProjectCategory } from '../types/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Chip } from '../components/ui/Chip';
import { Modal } from '../components/ui/Modal';
import { AnimateOnScroll } from '../components/animations/AnimateOnScroll';
import { SectionBackground } from '../components/ui/SectionBackground';
import { SpotlightCard } from '../components/animations/SpotlightCard';
import { useLanguage } from '../hooks/useLanguage';

const ALL_CATEGORIES: ProjectCategory[] = [
  'Computer Vision', 'Generative AI', 'Multimodal AI', 'Forecasting', 'Research', 'Software Systems',
];

function CaseStudyCard({ project, isDark, onClick }: { project: Project; isDark: boolean; onClick: () => void }) {
  const { t } = useLanguage();
  return (
    <SpotlightCard isDark={isDark} className="group rounded-2xl overflow-hidden cursor-pointer p-8 md:p-12 border-l-4 border-l-primary-500">
      <div onClick={onClick} className="flex flex-col md:flex-row gap-8 items-start w-full relative z-10">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 text-[10px] font-mono tracking-widest uppercase rounded-full ${
              isDark ? 'bg-accent-500/10 text-accent-400 border border-accent-500/20' : 'bg-accent-50 text-accent-600 border border-accent-200'
            }`}>
              Featured Case Study
            </span>
            <div className="flex gap-2">
              {project.categories.slice(0, 2).map((cat) => (
                <Chip key={cat} label={cat} isDark={isDark} size="sm" />
              ))}
            </div>
          </div>
          
          <h3 className={`text-2xl md:text-3xl font-bold leading-tight group-hover:text-primary-400 transition-colors ${
            isDark ? 'text-surface-50' : 'text-surface-900'
          }`}>
            {project.title}
          </h3>
          
          <p className={`text-base md:text-lg leading-relaxed ${isDark ? 'text-surface-200/80' : 'text-surface-700/80'}`}>
            {project.summary}
          </p>
          
          <div className={`p-5 rounded-xl border ${isDark ? 'bg-surface-900/50 border-surface-700/50' : 'bg-surface-50 border-surface-200'}`}>
            <p className={`text-sm italic ${isDark ? 'text-surface-200/90' : 'text-surface-700'}`}>
              <span className="font-semibold not-italic">Key Learning:</span> {project.learnings}
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="flex items-center gap-2 group-hover:gap-3 transition-all text-sm font-semibold text-primary-500">
              {t.projects.details} <FiChevronRight />
            </button>
            <div className="flex gap-2 ml-auto">
              {project.githubUrl && project.githubUrl !== '#' && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                  className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-surface-800 text-surface-200 hover:text-primary-400' : 'bg-surface-100 text-surface-700 hover:text-primary-600'}`}>
                  <FiGithub size={18} />
                </a>
              )}
              {project.demoUrl && project.demoUrl !== '#' && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                  className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-surface-800 text-surface-200 hover:text-accent-400' : 'bg-surface-100 text-surface-700 hover:text-accent-600'}`}>
                  <FiExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}

function ProjectCard({ project, isDark, onClick }: { project: Project; isDark: boolean; onClick: () => void }) {
  const { t } = useLanguage();
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`group rounded-xl flex flex-col h-full overflow-hidden cursor-pointer card-gradient-hover ${
        isDark
          ? 'bg-surface-800/60 border border-surface-700/50 hover:shadow-xl hover:shadow-primary-500/5'
          : 'bg-white border border-surface-200 shadow-sm hover:shadow-xl'
      }`}
      onClick={onClick}
    >
      <div className="h-[2px] w-full bg-gradient-to-r from-primary-500 via-violet-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="p-6 relative z-10 flex flex-col h-full">
        <h3 className={`text-lg font-semibold mb-3 group-hover:text-primary-400 transition-colors ${isDark ? 'text-surface-50' : 'text-surface-900'}`}>
          {project.title}
        </h3>
        <p className={`text-sm leading-relaxed mb-6 flex-1 line-clamp-4 ${isDark ? 'text-surface-200/60' : 'text-surface-700/70'}`}>
          {project.summary}
        </p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.slice(0, 3).map((tech) => (
              <Chip key={tech} label={tech} isDark={isDark} variant="outline" />
            ))}
            {project.techStack.length > 3 && (
              <Chip label={`+${project.techStack.length - 3}`} isDark={isDark} variant="outline" />
            )}
          </div>
          <div className="flex items-center justify-between border-t transition-colors pt-4 mt-auto border-surface-200/10 dark:border-surface-700/50 group-hover:border-primary-500/20">
            <span className={`text-xs font-semibold flex items-center gap-1 group-hover:text-primary-500 transition-colors ${isDark ? 'text-surface-400' : 'text-surface-500'}`}>
              {t.projects.details} <FiChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectDetail({ project, isDark }: { project: Project; isDark: boolean }) {
  const { t } = useLanguage();
  return (
    <div className="space-y-6">
      <p className={`text-sm leading-relaxed ${isDark ? 'text-surface-200/70' : 'text-surface-700'}`}>{project.summary}</p>
      
      {project.caseStudy && (
        <div className={`p-4 rounded-xl border-l-2 border-accent-500 ${isDark ? 'bg-accent-500/10 text-accent-200' : 'bg-accent-50 text-accent-700'}`}>
          <h4 className="text-xs font-bold uppercase tracking-wider mb-2">Technical Insight</h4>
          <p className="text-sm">{project.learnings}</p>
          {project.future && <p className="text-sm mt-2 opacity-80">{project.future}</p>}
        </div>
      )}

      {[
        { label: t.projects.problem, content: project.problem },
        { label: t.projects.approach, content: project.approach },
        { label: t.projects.outcome, content: project.outcome },
      ].map((s) => (
        <div key={s.label}>
          <h4 className={`text-sm font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-surface-200/50' : 'text-surface-700/50'}`}>{s.label}</h4>
          <p className={`text-sm leading-relaxed ${isDark ? 'text-surface-200/70' : 'text-surface-700'}`}>{s.content}</p>
        </div>
      ))}
      <div>
        <h4 className={`text-sm font-semibold uppercase tracking-wider mb-3 mt-8 ${isDark ? 'text-surface-200/50' : 'text-surface-700/50'}`}>{t.projects.techStack}</h4>
        <div className="flex flex-wrap gap-2">{project.techStack.map((tech) => (<Chip key={tech} label={tech} isDark={isDark} size="md" />))}</div>
      </div>
      <div className="flex gap-3 pt-6 border-t mt-6 border-surface-200/10 dark:border-surface-700/50">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl transition-colors ${isDark ? 'bg-surface-800 text-surface-200 border border-surface-700 hover:bg-surface-700' : 'bg-surface-100 text-surface-900 border border-surface-200 hover:bg-surface-200'}`}
        ><FiGithub size={18} /> {t.projects.github}</a>
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-500 hover:to-primary-400 shadow-lg shadow-primary-500/20 transition-all"
        ><FiExternalLink size={18} /> {t.projects.liveDemo}</a>
      </div>
    </div>
  );
}

export function Projects({ isDark }: { isDark: boolean }) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useLanguage();

  const filteredProjects = activeFilter === 'All'
    ? siteContent.projects
    : siteContent.projects.filter((p) => p.categories.includes(activeFilter));

  const caseStudies = filteredProjects.filter(p => p.caseStudy);
  const standardProjects = filteredProjects.filter(p => !p.caseStudy);

  return (
    <section id="projects" className="relative py-24 section-padding overflow-hidden">
      <SectionBackground isDark={isDark} opacity={0.03} />
      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        <AnimateOnScroll>
          <SectionHeading title={t.projects.title} subtitle={t.projects.subtitle} isDark={isDark} />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button onClick={() => setActiveFilter('All')}
              className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer ${
                activeFilter === 'All'
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/20'
                  : isDark ? 'bg-surface-800/60 text-surface-200 border border-surface-700/50 hover:border-primary-500/30' : 'bg-white text-surface-700 border border-surface-200 hover:border-primary-300'
              }`}>{t.projects.all}</button>
            {ALL_CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/20'
                    : isDark ? 'bg-surface-800/60 text-surface-200 border border-surface-700/50 hover:border-primary-500/30' : 'bg-white text-surface-700 border border-surface-200 hover:border-primary-300'
                }`}>{cat}</button>
            ))}
          </div>
        </AnimateOnScroll>

        {caseStudies.length > 0 && (
          <AnimatePresence mode="popLayout">
            <motion.div layout className="flex flex-col gap-8 mb-16">
              {caseStudies.map(project => (
                <CaseStudyCard key={project.id} project={project} isDark={isDark} onClick={() => setSelectedProject(project)} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {standardProjects.length > 0 && (
          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {standardProjects.map((project) => (
                <ProjectCard key={project.id} project={project} isDark={isDark} onClick={() => setSelectedProject(project)} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} isDark={isDark} title={selectedProject?.title}>
          {selectedProject && <ProjectDetail project={selectedProject} isDark={isDark} />}
        </Modal>
      </div>
    </section>
  );
}
