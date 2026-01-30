import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Home = () => {
    const { t } = useTranslation();

    const trustIndicators = [
        { icon: '🛡️', title: 'Safe Trips', desc: 'Full insurance & safety gear' },
        { icon: '👨‍✈️', title: 'Local Masters', desc: 'Guides with 20+ years experience' },
        { icon: '🗺️', title: 'Top Spots', desc: 'Secret locations only locals know' },
        { icon: '⭐', title: 'Premium Gear', desc: 'World-class rods & tackle' },
    ];

    const seasons = [
        { name: t('seasons.summer'), icon: '☀️' },
        { name: t('seasons.autumn'), icon: '🍂' },
        { name: t('seasons.winter'), icon: '❄️' },
        { name: t('seasons.spring'), icon: '🌸' },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Premium Hero Section */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                {/* Background Image / Gradient */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 to-transparent z-10" />
                    <img
                        src="/agadir_fishing_hero_1769678716870.png"
                        alt="Agadir Fishing"
                        className="w-full h-full object-cover scale-105 animate-slow-pulse"
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight text-balance">
                            {t('hero.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-100 mb-10 text-balance font-light">
                            {t('hero.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <Link to="/trips" className="btn-accent text-lg">
                                {t('hero.cta')}
                                <span className="ml-2">→</span>
                            </Link>
                            <a
                                href="https://wa.me/212XXXXXXXXX"
                                target="_blank"
                                className="btn-premium border border-white/20 bg-white/10 backdrop-blur-md text-lg"
                            >
                                <span>💬</span>
                                {t('hero.whatsapp')}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-12 bg-primary-950 relative -mt-10 mx-4 rounded-3xl z-30 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-mesh opacity-10" />
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {trustIndicators.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center md:text-left flex flex-col md:flex-row items-center gap-4"
                        >
                            <span className="text-4xl bg-white/10 p-3 rounded-2xl">{item.icon}</span>
                            <div>
                                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                <p className="text-primary-300 text-sm">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Seasonal Calendar */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl mb-4">{t('seasons.title')}</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Plan your perfect trip based on Agadir's unique marine cycle.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {seasons.map((season, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="glass-card p-8 rounded-3xl border-slate-100 group transition-all"
                            >
                                <span className="text-5xl block mb-6 group-hover:scale-110 transition-transform">{season.icon}</span>
                                <p className="text-lg font-semibold text-slate-800 leading-snug">{season.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-24 premium-gradient relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-mesh rotate-180" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to cast your line?</h2>
                    <p className="text-xl text-primary-200 mb-12 max-w-2xl mx-auto font-light">
                        Whether you are a seasoned pro or a family looking for fun, we have the perfect boat waiting for you.
                    </p>
                    <Link to="/contact" className="btn-accent px-12 py-4 text-xl inline-flex">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
