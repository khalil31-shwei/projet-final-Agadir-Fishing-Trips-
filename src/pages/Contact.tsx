import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <section className="premium-gradient text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-mesh opacity-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter"
                    >
                        {t('nav.contact')}
                    </motion.h1>
                    <p className="text-xl text-primary-200 max-w-2xl mx-auto font-light">
                        Ready to start your adventure? Contact our team of local experts.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* Contact Info */}
                        <div className="lg:col-span-4 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-primary-950 rounded-[2.5rem] p-10 text-white shadow-premium relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
                                    <span className="text-9xl">🎣</span>
                                </div>

                                <h2 className="text-3xl font-bold mb-10 relative z-10">Get in Touch</h2>

                                <div className="space-y-8 relative z-10">
                                    <div className="flex items-start gap-4">
                                        <span className="bg-white/10 p-3 rounded-2xl text-2xl">📍</span>
                                        <div>
                                            <h3 className="font-bold text-accent-500 uppercase tracking-widest text-xs mb-1">Our Base</h3>
                                            <p className="text-primary-100 font-medium">Agadir Marina, Morocco</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="bg-white/10 p-3 rounded-2xl text-2xl">📞</span>
                                        <div>
                                            <h3 className="font-bold text-accent-500 uppercase tracking-widest text-xs mb-1">Call Us</h3>
                                            <p className="text-primary-100 font-bold text-lg">+212 600-000000</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="bg-white/10 p-3 rounded-2xl text-2xl">✉️</span>
                                        <div>
                                            <h3 className="font-bold text-accent-500 uppercase tracking-widest text-xs mb-1">Email</h3>
                                            <p className="text-primary-100 font-medium">booking@agadirfishing.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-12 border-t border-white/10">
                                    <p className="text-sm font-bold text-accent-500 uppercase tracking-widest mb-4">Follow the Catch</p>
                                    <div className="flex gap-4">
                                        <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent-500 transition-colors">📷</a>
                                        <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent-500 transition-colors">📘</a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* WhatsApp Quick Link */}
                            <motion.a
                                href="https://wa.me/212600000000"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-6 p-8 bg-green-500 rounded-[2rem] text-white shadow-xl hover:-translate-y-1 transition-transform group"
                            >
                                <span className="text-5xl animate-bounce">💬</span>
                                <div>
                                    <h3 className="text-xl font-black leading-none mb-1 uppercase tracking-tighter">Fast Booking</h3>
                                    <p className="text-green-50 font-medium">Chat on WhatsApp now</p>
                                </div>
                                <span className="ml-auto text-2xl group-hover:translate-x-2 transition-transform">→</span>
                            </motion.a>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-premium border border-slate-100"
                            >
                                <h2 className="text-3xl font-black text-slate-900 mb-10">Send a Message</h2>

                                {submitted ? (
                                    <div className="bg-green-50 border border-green-200 p-8 rounded-3xl text-center">
                                        <span className="text-5xl block mb-4">✅</span>
                                        <h3 className="text-2xl font-bold text-green-800 mb-2">Message Received!</h3>
                                        <p className="text-green-600">Our captain will get back to you within 2 hours.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-sm font-black text-slate-700 uppercase tracking-widest">Full Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full p-5 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-50/50 transition-all outline-none font-medium"
                                                    placeholder="Captain Ahab"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-sm font-black text-slate-700 uppercase tracking-widest">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    className="w-full p-5 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-50/50 transition-all outline-none font-medium"
                                                    placeholder="+212 600-000000"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-sm font-black text-slate-700 uppercase tracking-widest">Message</label>
                                            <textarea
                                                rows={6}
                                                required
                                                className="w-full p-5 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-50/50 transition-all outline-none font-medium resize-none"
                                                placeholder="Tell us about your dream fishing trip..."
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            />
                                        </div>
                                        <button type="submit" className="btn-premium w-full py-5 text-xl">
                                            Send to Captain
                                        </button>
                                    </form>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="px-4 pb-24">
                <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 h-[500px] relative shadow-premium border-8 border-white">
                    <div className="absolute inset-0 bg-primary-950/20 z-10 pointer-events-none" />
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13759.261841356!2d-9.6191763!3d30.4133464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6f0e4b7b7b7%3A0x7d7d7d7d7d7d7d7!2sMarina%20Agadir!5e0!3m2!1sen!2sma!4v1627546546321!5m2!1sen!2sma"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        title="Agadir Marina Map"
                    />
                </div>
            </section>
        </div>
    );
};

export default Contact;
