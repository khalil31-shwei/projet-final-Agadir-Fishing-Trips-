import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-950 text-white relative overflow-hidden pt-24 pb-12">
            <div className="absolute inset-0 bg-mesh opacity-5" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link to="/" className="flex items-center mb-8">
                            <span className="text-4xl mr-3">🎣</span>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black uppercase tracking-tighter">Agadir Fishing</span>
                                <span className="text-xs font-bold text-accent-400 uppercase tracking-widest">Atlantic Masters</span>
                            </div>
                        </Link>
                        <p className="text-primary-200 font-light leading-relaxed max-w-sm mb-8 text-lg">
                            {t('footer.description')}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-500 hover:text-primary-950 transition-all">📘</a>
                            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-500 hover:text-primary-950 transition-all">📷</a>
                            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-500 hover:text-primary-950 transition-all">💬</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-accent-500 font-bold uppercase tracking-widest text-sm mb-8">{t('footer.quickLinks')}</h3>
                        <ul className="space-y-4">
                            {['home', 'trips', 'about', 'contact'].map((key) => (
                                <li key={key}>
                                    <Link
                                        to={key === 'home' ? '/' : `/${key}`}
                                        className="text-primary-100 hover:text-accent-400 transition-colors font-medium"
                                    >
                                        {t(`nav.${key}`)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-accent-500 font-bold uppercase tracking-widest text-sm mb-8">{t('footer.contact')}</h3>
                        <div className="space-y-6 text-primary-100 font-medium">
                            <div className="flex items-start gap-4">
                                <span className="text-xl">📍</span>
                                <p className="text-sm leading-snug">Agadir Marina, Building B<br />Agadir, Morocco</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xl">📞</span>
                                <p className="text-sm font-bold">+212 600-000000</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xl">📧</span>
                                <p className="text-sm">info@agadirfishing.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-primary-400 text-xs font-bold uppercase tracking-widest">
                    <p>© {currentYear} Agadir Fishing Trips</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
