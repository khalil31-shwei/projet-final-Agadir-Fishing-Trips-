import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const location = useLocation();

    const languages = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'ar', name: 'العربية', flag: '🇲🇦' },
    ];

    const navLinks = [
        { path: '/', label: t('nav.home') },
        { path: '/trips', label: t('nav.trips') },
        { path: '/store', label: t('nav.store') },
        { path: '/about', label: t('nav.about') },
        { path: '/contact', label: t('nav.contact') },
    ];

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsLangOpen(false);
    };

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="bg-white/90 backdrop-blur-xl sticky top-0 z-[100] border-b border-slate-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <motion.div
                            whileHover={{ rotate: -10 }}
                            className="text-3xl filter drop-shadow-md"
                        >
                            🎣
                        </motion.div>
                        <div className="ml-3 flex flex-col">
                            <span className="text-xl font-black text-primary-950 leading-none tracking-tighter uppercase">
                                Agadir Fishing
                            </span>
                            <span className="text-[10px] font-bold text-accent-600 uppercase tracking-widest leading-none mt-1">
                                Atlantic Masters
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all rounded-full ${isActive(link.path)
                                    ? 'text-primary-600 bg-primary-50'
                                    : 'text-slate-500 hover:text-primary-600 hover:bg-slate-50'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <div className="w-px h-6 bg-slate-200 mx-4" />

                        {/* Language Selector */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all"
                            >
                                <span>{languages.find((l) => l.code === i18n.language)?.flag}</span>
                                <span className="uppercase">{i18n.language}</span>
                            </button>

                            <AnimatePresence>
                                {isLangOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute right-0 mt-3 w-40 bg-white rounded-2xl shadow-premium py-2 border border-slate-100 overflow-hidden"
                                    >
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => changeLanguage(lang.code)}
                                                className={`w-full text-left px-4 py-3 hover:bg-slate-50 flex items-center gap-3 transition-colors ${i18n.language === lang.code ? 'bg-primary-50 text-primary-700' : 'text-slate-600'
                                                    }`}
                                            >
                                                <span className="text-lg">{lang.flag}</span>
                                                <span className="text-sm font-bold">{lang.name}</span>
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link to="/trips" className="btn-premium ml-4 px-6 py-2.5 text-sm uppercase">
                            {t('hero.cta')}
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-3 rounded-2xl bg-slate-50 text-slate-900"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100"
                    >
                        <div className="px-6 py-8 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block text-2xl font-black uppercase tracking-tighter ${isActive(link.path) ? 'text-primary-600' : 'text-slate-900'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-100">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            changeLanguage(lang.code);
                                            setIsOpen(false);
                                        }}
                                        className={`p-3 rounded-2xl text-center flex flex-col items-center gap-1 ${i18n.language === lang.code ? 'bg-primary-50 border-2 border-primary-500' : 'bg-slate-50 border-2 border-transparent'
                                            }`}
                                    >
                                        <span className="text-2xl">{lang.flag}</span>
                                        <span className="text-[10px] font-bold uppercase">{lang.code}</span>
                                    </button>
                                ))}
                            </div>

                            <Link
                                to="/trips"
                                onClick={() => setIsOpen(false)}
                                className="btn-accent w-full py-4 text-center mt-6"
                            >
                                {t('hero.cta')}
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
