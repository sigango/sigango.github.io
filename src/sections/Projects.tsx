import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiGithub, FiExternalLink, FiChevronRight } from 'react-icons/fi';
import { siteContent } from '../data/content';
import type { Project, ProjectCategory } from '../types/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Chip } from '../components/ui/Chip';
import { Modal } from '../components/ui/Modal';
import { AnimateOnScroll } from '../components/animations/AnimateOnScroll';
import { SectionBackground } from '../components/ui/SectionBackground';
import { useLanguage } from '../hooks/useLanguage';

const ALL_CATEGORIES: ProjectCategory[] = [
  'Computer Vision', 'Generative AI', 'Multimodal AI', 'Forecasting', 'Research', 'Software Systems',
];

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
      className={`group rounded-xl overflow-hidden cursor-pointer card-gradient-hover ${
        isDark
          ? 'bg-surface-800/60 border border-surface-700/50 hover:shadow-xl hover:shadow-primary-500/5'
          : 'bg-white border border-surface-200 shadow-sm hover:shadow-xl'
      }`}
      onClick={onClick}
    >
      {/* Top gradient accent line */}
      <div className="h-[2px] bg-gradient-to-r from-primary-500 via-violet-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="p-6 relative z-10">
        <h3 className={`text-lg font-semibold mb-2 group-hover:text-primary-400 transition-colors ${isDark ? 'text-surface-50' : 'text-surface-900'}`}>
          {project.title}
        </h3>
        <p className={`text-sm leading-relaxed mb-4 line-clamp-3 ${isDark ? 'text-surface-200/60' : 'text-surface-700/70'}`}>
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <Chip key={tech} label={tech} isDark={isDark} variant="outline" />
          ))}
          {project.techStack.length > 4 && (
            <Chip label={`+${project.techStack.length - 4}`} isDark={isDark} variant="outline" />
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {project.githubUrl && project.githubUrl !== '#' && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                className={`p-1.5 rounded-lg transition-colors ${isDark ? 'text-surface-200/50 hover:text-primary-400' : 'text-surface-700/50 hover:text-primary-600'}`}
                aria-label={`GitHub: ${project.title}`}><FiGithub size={16} /></a>
            )}
            {project.demoUrl && project.demoUrl !== '#' && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                className={`p-1.5 rounded-lg transition-colors ${isDark ? 'text-surface-200/50 hover:text-accent-400' : 'text-surface-700/50 hover:text-accent-600'}`}
                aria-label={`Demo: ${project.title}`}><FiExternalLink size={16} /></a>
            )}
          </div>
          <span className={`text-xs font-medium flex items-center gap-1 ${isDark ? 'text-primary-400/60' : 'text-primary-600/60'}`}>
            {t.projects.details} <FiChevronRight size={12} />
          </span>
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
        <h4 className={`text-sm font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-surface-200/50' : 'text-surface-700/50'}`}>{t.projects.techStack}</h4>
        <div className="flex flex-wrap gap-2">{project.techStack.map((tech) => (<Chip key={tech} label={tech} isDark={isDark} size="md" />))}</div>
      </div>
      <div>
        <h4 className={`text-sm font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-surface-200/50' : 'text-surface-700/50'}`}>{t.projects.categories}</h4>
        <div className="flex flex-wrap gap-2">{project.categories.map((cat) => (<Chip key={cat} label={cat} isDark={isDark} variant="outline" size="md" />))}</div>
      </div>
      <div className="flex gap-3 pt-2">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl transition-colors ${isDark ? 'bg-surface-800 text-surface-200 border border-surface-700 hover:bg-surface-700' : 'bg-surface-100 text-surface-900 border border-surface-200 hover:bg-surface-200'}`}
        ><FiGithub size={16} /> {t.projects.github}</a>
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-500 hover:to-primary-400 transition-all"
        ><FiExternalLink size={16} /> {t.projects.liveDemo}</a>
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

  return (
    <section id="projects" className="relative py-24 section-padding overflow-hidden">
      <SectionBackground isDark={isDark} opacity={0.03} />
      <div className="relative z-10 max-w-7xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading title={t.projects.title} subtitle={t.projects.subtitle} isDark={isDark} />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
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

        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isDark={isDark} onClick={() => setSelectedProject(project)} />
            ))}
          </motion.div>
        </AnimatePresence>

        <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} isDark={isDark} title={selectedProject?.title}>
          {selectedProject && <ProjectDetail project={selectedProject} isDark={isDark} />}
        </Modal>
      </div>
    </section>
  );
}
