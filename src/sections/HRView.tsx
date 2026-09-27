import { useState } from 'react';
import { siteContent } from '../data/content';
import { useLanguage } from '../hooks/useLanguage';
import {
  FiDownload,
  FiCopy,
  FiCheck,
  FiPrinter,
  FiMail,
  FiMapPin,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiBookOpen,
  FiBox,
  FiAward,
} from 'react-icons/fi';
import { SiGooglescholar } from 'react-icons/si';

interface HRViewProps {
  isDark: boolean;
  onSwitchToInteractive: () => void;
}

export function HRView({ isDark, onSwitchToInteractive }: HRViewProps) {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(siteContent.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`min-h-screen py-8 sm:py-12 transition-colors duration-200 ${isDark ? 'bg-surface-950 text-surface-100' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top HR Mode Header Bar */}
        <div className={`p-4 sm:p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
          isDark ? 'bg-surface-900/90 border-primary-500/30 shadow-lg shadow-black/40' : 'bg-white border-slate-200 shadow-md'
        }`}>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <h2 className="text-sm font-bold uppercase tracking-wider font-mono text-emerald-400">
                {t.hrView.badge}
              </h2>
            </div>
            <p className={`text-xs mt-1 ${isDark ? 'text-surface-300' : 'text-slate-600'}`}>
              {t.hrView.switchDesc}
            </p>
          </div>

          <button
            onClick={onSwitchToInteractive}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-primary-600 via-indigo-600 to-accent-600 text-white shadow-md hover:shadow-primary-500/20 transition-all flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <FiBox size={14} />
            <span>{t.hrView.switchToInteractive}</span>
          </button>
        </div>

        {/* Executive Profile Card */}
        <section className={`p-6 sm:p-8 rounded-2xl border ${
          isDark ? 'bg-surface-900/60 border-surface-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6 pb-6 border-b border-surface-800/40 dark:border-surface-800">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {siteContent.name}
              </h1>
              <p className="text-base sm:text-lg font-medium text-primary-400 mt-1">
                {siteContent.title}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono opacity-80 mt-2">
                <span className="flex items-center gap-1.5">
                  <FiMapPin size={13} className="text-primary-400" />
                  {siteContent.location || 'Darmstadt, Germany'}
                </span>
                <span className="flex items-center gap-1.5">
                  <FiMail size={13} className="text-primary-400" />
                  {siteContent.contactEmail}
                </span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap sm:flex-col items-stretch gap-2 w-full sm:w-auto">
              <a
                href={siteContent.cvUrl}
                download="Linh_Phuc_Ngo_CV.pdf"
                className="flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-primary-600 hover:bg-primary-500 text-white transition-all shadow-sm"
              >
                <FiDownload size={13} />
                <span>{t.hrView.downloadCV}</span>
              </a>

              <button
                onClick={copyEmailToClipboard}
                className={`flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  copiedEmail
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : isDark
                      ? 'bg-surface-800 text-surface-200 border-surface-700 hover:bg-surface-700'
                      : 'bg-slate-100 text-slate-800 border-slate-200 hover:bg-slate-200'
                }`}
              >
                {copiedEmail ? <FiCheck size={13} className="text-emerald-400" /> : <FiCopy size={13} />}
                <span>{copiedEmail ? t.hrView.copied : t.hrView.copyEmail}</span>
              </button>

              <button
                onClick={handlePrint}
                className={`flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  isDark ? 'bg-surface-800 text-surface-300 border-surface-700 hover:bg-surface-700' : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
              >
                <FiPrinter size={13} />
                <span>{t.hrView.print}</span>
              </button>
            </div>
          </div>

          {/* Social / External Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-4 text-xs font-mono">
            <a
              href="https://linkedin.com/in/linhngo1012/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
            >
              <FiLinkedin size={13} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/sigango"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-800 text-surface-200 border border-surface-700 hover:bg-surface-700 transition-colors"
            >
              <FiGithub size={13} />
              <span>GitHub (sigango)</span>
            </a>
            <a
              href="https://scholar.google.com/citations?user=oNDaKAQAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 transition-colors"
            >
              <SiGooglescholar size={13} />
              <span>Google Scholar</span>
            </a>
            <a
              href="https://sigango.github.io"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
            >
              <FiExternalLink size={13} />
              <span>Portfolio Website</span>
            </a>
          </div>

          {/* Executive Research Summary */}
          <div className="mt-6 pt-6 border-t border-surface-800/40 dark:border-surface-800">
            <h3 className="text-xs font-bold uppercase tracking-wider font-mono text-primary-400 mb-2">
              {t.hrView.executiveSummary}
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-surface-200' : 'text-slate-700'}`}>
              {siteContent.longAbout}
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className={`p-6 sm:p-8 rounded-2xl border space-y-6 ${
          isDark ? 'bg-surface-900/60 border-surface-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex items-center gap-2 border-b pb-3 border-surface-800/40 dark:border-surface-800">
            <FiBookOpen className="text-primary-400" size={18} />
            <h2 className="text-lg font-bold tracking-tight">
              {t.hrView.educationTitle}
            </h2>
          </div>

          <div className="space-y-6">
            {siteContent.education.map((edu) => (
              <div key={edu.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-base font-bold">
                    {edu.institution}
                  </h3>
                  <span className="text-xs font-mono opacity-70">
                    {edu.period} · {edu.location}
                  </span>
                </div>
                <p className="text-sm font-semibold text-primary-400">
                  {edu.degree}
                </p>
                {edu.details && (
                  <ul className="list-disc list-inside space-y-1 text-xs leading-relaxed opacity-80 pt-1">
                    {edu.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Peer-Reviewed Publication */}
        <section className={`p-6 sm:p-8 rounded-2xl border space-y-4 ${
          isDark ? 'bg-surface-900/60 border-surface-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex items-center gap-2 border-b pb-3 border-surface-800/40 dark:border-surface-800">
            <FiAward className="text-emerald-400" size={18} />
            <h2 className="text-lg font-bold tracking-tight">
              {t.hrView.publicationsTitle}
            </h2>
          </div>

          <div className="p-4 sm:p-5 rounded-xl border bg-surface-800/30 dark:bg-surface-800/20 border-surface-700/50 space-y-2">
            <span className="inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              Springer Nature (2025) · Peer-Reviewed
            </span>
            <h3 className="text-sm sm:text-base font-bold leading-snug">
              {siteContent.publication.title}
            </h3>
            <p className="text-xs opacity-75 font-mono">
              {siteContent.publication.authors} ({siteContent.publication.year}). {siteContent.publication.venue}
            </p>
            <p className="text-xs leading-relaxed opacity-85 pt-1">
              {siteContent.publication.summary}
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <a
                href={siteContent.publication.url}
                target="_blank"
                rel="noreferrer"
                className="text-primary-400 hover:underline flex items-center gap-1"
              >
                DOI: {siteContent.publication.doi} <FiExternalLink size={11} />
              </a>
            </div>
          </div>
        </section>

        {/* Featured Research Projects */}
        <section className={`p-6 sm:p-8 rounded-2xl border space-y-6 ${
          isDark ? 'bg-surface-900/60 border-surface-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex items-center gap-2 border-b pb-3 border-surface-800/40 dark:border-surface-800">
            <FiBox className="text-cyan-400" size={18} />
            <h2 className="text-lg font-bold tracking-tight">
              {t.hrView.researchProjectsTitle}
            </h2>
          </div>

          <div className="space-y-6">
            {siteContent.projects.slice(0, 3).map((proj) => (
              <div key={proj.id} className="space-y-2 pb-5 border-b border-surface-800/30 last:border-b-0 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-base font-bold flex items-center gap-2">
                    {proj.title}
                  </h3>
                  <span className="text-xs font-mono opacity-70">
                    {proj.dateRange || 'Current'}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs">
                  {proj.role && (
                    <span className="font-semibold text-primary-400">
                      {proj.role}
                    </span>
                  )}
                  {proj.status && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {proj.status}
                    </span>
                  )}
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-surface-200' : 'text-slate-700'}`}>
                  {proj.summary}
                </p>

                <div className="text-xs space-y-1 pt-1 opacity-90">
                  <p><strong>Problem:</strong> {proj.problem}</p>
                  <p><strong>Method:</strong> {proj.approach}</p>
                  <p><strong>Key Insight:</strong> {proj.learnings || proj.outcome}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        isDark ? 'bg-surface-800 text-surface-300 border-surface-700' : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className={`p-6 sm:p-8 rounded-2xl border space-y-6 ${
          isDark ? 'bg-surface-900/60 border-surface-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex items-center gap-2 border-b pb-3 border-surface-800/40 dark:border-surface-800">
            <FiBox className="text-purple-400" size={18} />
            <h2 className="text-lg font-bold tracking-tight">
              {t.hrView.experienceTitle}
            </h2>
          </div>

          <div className="space-y-6">
            {siteContent.experiences.map((exp) => (
              <div key={exp.id} className="space-y-2 pb-5 border-b border-surface-800/30 last:border-b-0 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-base font-bold">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-mono opacity-70">
                    {exp.dateRange} · {exp.location}
                  </span>
                </div>
                <p className="text-sm font-semibold text-primary-400">
                  {exp.organization}
                </p>

                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm leading-relaxed opacity-90 pt-1">
                  {exp.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        isDark ? 'bg-surface-800 text-surface-300 border-surface-700' : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Engagement & Selected Programs */}
        <section className={`p-6 sm:p-8 rounded-2xl border space-y-5 ${
          isDark ? 'bg-surface-900/60 border-surface-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex items-center gap-2 border-b pb-3 border-surface-800/40 dark:border-surface-800">
            <FiAward className="text-amber-400" size={18} />
            <h2 className="text-lg font-bold tracking-tight">
              {t.hrView.academicEngagementTitle}
            </h2>
          </div>

          <div className="space-y-4">
            {siteContent.academicEngagement.map((item) => (
              <div key={item.id} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-sm sm:text-base font-bold">
                    {item.program} — <span className="text-primary-400 font-semibold">{item.role}</span>
                  </h3>
                  <span className="text-xs font-mono opacity-70">
                    {item.period} · {item.location}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs opacity-85 leading-relaxed">
                  {item.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills & Competencies */}
        <section className={`p-6 sm:p-8 rounded-2xl border space-y-5 ${
          isDark ? 'bg-surface-900/60 border-surface-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex items-center gap-2 border-b pb-3 border-surface-800/40 dark:border-surface-800">
            <FiBox className="text-blue-400" size={18} />
            <h2 className="text-lg font-bold tracking-tight">
              {t.hrView.skillsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {siteContent.skillCategories.map((cat) => (
              <div
                key={cat.name}
                className={`p-4 rounded-xl border ${
                  isDark ? 'bg-surface-800/30 border-surface-700/50' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-primary-400 mb-2">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-2 py-0.5 rounded font-mono ${
                        isDark ? 'bg-surface-800 text-surface-200 border border-surface-700' : 'bg-white text-slate-800 border border-slate-200'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Direct Footer Action Bar */}
        <div className="py-8 text-center space-y-4">
          <button
            onClick={onSwitchToInteractive}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 via-indigo-600 to-accent-600 text-white font-medium text-sm shadow-xl shadow-primary-500/20 hover:scale-105 transition-all cursor-pointer"
          >
            <FiBox size={16} />
            <span>{t.hrView.switchToInteractive}</span>
          </button>
          <p className="text-xs font-mono opacity-50">
            Designed for high performance, accessibility, and zero-latency recruitment review.
          </p>
        </div>

      </div>
    </div>
  );
}
