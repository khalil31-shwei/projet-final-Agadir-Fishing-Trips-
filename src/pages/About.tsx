import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
    useTranslation();

    const captains = [
        {
            name: 'Captain Mohammed',
            role: 'Master of Deep Sea',
            bio: '25 years of experience navigating the Atlantic. Former commercial fisherman turned guide.',
            icon: '⚓',
            image: '/rod_sunset.jpg'
        },
        {
            name: 'Captain Hassan',
            role: 'Coastal Specialist',
            bio: 'Nobody knows the Agadir reefs better than Hassan. Expert in light tackle and family fun.',
            icon: '🎣',
            image: '/blue_boats.jpg'
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="bg-primary-950 text-white py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-mesh opacity-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6"
                    >
                        The Agadir Legacy
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-primary-200 font-light max-w-3xl mx-auto">
                        Born from the sea, dedicated to the thrill. Discover the hearts behind the rods.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase tracking-tight">Our Journey</h2>
                            <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed">
                                <p>
                                    Agadir Fishing Trips wasn't built in an office. It was forged in the saltwater spray of the Atlantic,
                                    carrying on a tradition of Moroccan seamanship that goes back generations.
                                </p>
                                <p>
                                    What started as a single wooden dory has evolved into a fleet of modern, professional fishing
                                    vessels. Yet, our soul remains the same: a deep respect for the ocean and a passion for the
                                    unforgettable moment when the line goes taut.
                                </p>
                                <p>
                                    Today, we bridge the gap between local artisanal knowledge and international tourism standards,
                                    offering an experience that is both authentic and world-class.
                                </p>
                            </div>
                        </motion.div>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, rotate: -5 }}
                                whileInView={{ opacity: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                className="rounded-[3rem] overflow-hidden shadow-premium border-8 border-white"
                            >
                                <img src="/agadir_kasbah.jpg" alt="Legacy" className="w-full h-full object-cover" />
                            </motion.div>
                            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent-500 rounded-full flex items-center justify-center text-primary-950 font-black text-center p-6 shadow-xl rotate-12">
                                EST. 1998<br />AGADIR MARINA
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Captains */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-4">Meet the Captains</h2>
                    <p className="text-slate-500 font-medium">Your safety and success are in the hands of the best.</p>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {captains.map((cap, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="group bg-slate-50 rounded-[3rem] p-10 flex flex-col md:flex-row gap-10 items-center hover:bg-white hover:shadow-premium transition-all duration-500 border border-transparent hover:border-slate-100"
                        >
                            <div className="w-48 h-48 rounded-[2rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-lg">
                                <img src={cap.image} alt={cap.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="text-center md:text-left flex-1">
                                <span className="text-4xl mb-4 block">{cap.icon}</span>
                                <h3 className="text-2xl font-black text-slate-900 mb-1">{cap.name}</h3>
                                <p className="text-primary-600 font-bold text-sm uppercase tracking-widest mb-4">{cap.role}</p>
                                <p className="text-slate-600 font-light leading-relaxed">{cap.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Values */}
            <section className="py-24 premium-gradient text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="space-y-4">
                            <span className="text-5xl">💎</span>
                            <h3 className="text-xl font-bold">Uncompromising Quality</h3>
                            <p className="text-primary-200 font-light">From our rods to our refreshments, only the premium tier.</p>
                        </div>
                        <div className="space-y-4">
                            <span className="text-5xl">⚓</span>
                            <h3 className="text-xl font-bold">Deep Authenticity</h3>
                            <p className="text-primary-200 font-light">Real techniques, real spots, and the true Agadir spirit.</p>
                        </div>
                        <div className="space-y-4">
                            <span className="text-5xl">🌊</span>
                            <h3 className="text-xl font-bold">Eco-Conscious</h3>
                            <p className="text-primary-200 font-light">We respect the quotas to ensure fishing for future generations.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
