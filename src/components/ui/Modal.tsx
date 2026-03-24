import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiX } from 'react-icons/fi';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  isDark: boolean;
  title?: string;
}

export function Modal({ isOpen, onClose, children, isDark, title }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl ${
              isDark
                ? 'bg-surface-900 border border-surface-700/50'
                : 'bg-white border border-surface-200'
            }`}
          >
            {/* Header */}
            <div className={`sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b ${
              isDark ? 'bg-surface-900/95 border-surface-700/50' : 'bg-white/95 border-surface-200'
            } backdrop-blur-sm`}>
              {title && (
                <h3 className={`text-lg font-semibold pr-8 ${isDark ? 'text-surface-100' : 'text-surface-900'}`}>
                  {title}
                </h3>
              )}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className={`p-2 rounded-lg transition-colors ${
                  isDark
                    ? 'text-surface-200/60 hover:text-white hover:bg-white/10'
                    : 'text-surface-700/60 hover:text-surface-900 hover:bg-surface-100'
                }`}
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-6">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
