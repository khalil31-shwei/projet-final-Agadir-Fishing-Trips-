import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const TripDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';

    const [people, setPeople] = useState(1);
    const [date, setDate] = useState('');

    // Mock data - in a real app, this would come from an API or context
    const tripData: { [key: string]: any } = {
        '1': {
            title: isArabic ? 'رحلة صيد ساحلية' : 'Half-Day Coastal Fishing',
            description: isArabic ? 'تجربة مريحة للعائلات والمبتدئين على طول ساحل أكادير.' : 'Relaxing coastal experience for families and beginners along the beautiful Agadir coastline.',
            duration: '4 hours',
            priceValue: 500,
            capacity: '1-6 people',
            images: ['/family_fishing_trip_1769678782051.png', '/agadir_fishing_hero_1769678716870.png'],
            included: [
                'Professional fishing equipment',
                'Safety gear and life jackets',
                'Experienced local guide',
                'Bait and tackle',
                'Refreshments and water',
            ],
            schedule: [
                'Pick-up from your hotel',
                'Safety briefing and equipment setup',
                'Fishing session along the coast',
                'Return to harbor',
            ],
        },
        '2': {
            title: isArabic ? 'صيد الأعماق للمحترفين' : 'Deep Sea Big Game',
            description: isArabic ? 'مطاردة التونة والمارلين في أعماق المحيط الأطلسي.' : 'The ultimate challenge for fishing enthusiasts. Target massive Tuna and Marlin with our professional crew.',
            duration: '8 hours',
            priceValue: 1500,
            capacity: '1-8 people',
            images: ['/deep_sea_fishing_trip_1769678745974.png', '/agadir_fishing_hero_1769678716870.png'],
            included: [
                'Professional deep-sea equipment',
                'Full insurance coverage',
                'Expert captain and crew',
                'Premium bait and tackle',
                'Lunch and beverages on board',
                'Fish cleaning service',
            ],
            schedule: [
                'Early morning departure',
                'Depart to deep-sea grounds',
                'Full day professional session',
                'Lunch break on the ocean',
                'Return to harbor',
            ],
        },
    };

    const trip = tripData[id || '1'];

    if (!trip) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Trip not found</h2>
                    <Link to="/trips" className="btn-premium">Back to Trips</Link>
                </div>
            </div>
        );
    }

    const priceFormatted = isArabic ? `${trip.priceValue} MAD` : `${trip.priceValue / 10} €`;

    return (
        <div className="min-h-screen bg-slate-50 pt-10 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb / Back */}
                <Link to="/trips" className="inline-flex items-center text-slate-500 hover:text-primary-600 mb-8 transition-colors font-medium">
                    <span className={isArabic ? 'ml-2' : 'mr-2'}>←</span>
                    {isArabic ? 'العودة للرحلات' : 'Back to Trips'}
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
                        >
                            {trip.title}
                        </motion.h1>

                        {/* Gallery Mock */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="rounded-3xl overflow-hidden aspect-video relative group"
                            >
                                <img src={trip.images[0]} alt="Gallery 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </motion.div>
                            <div className="grid grid-rows-2 gap-4">
                                <div className="rounded-3xl overflow-hidden relative">
                                    <img src={trip.images[1]} alt="Gallery 2" className="w-full h-full object-cover" />
                                </div>
                                <div className="bg-primary-950 rounded-3xl flex items-center justify-center text-white font-bold p-4 text-center">
                                    +5 Photos of Recent Catch
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none text-slate-600 font-light leading-relaxed mb-12">
                            <p>{trip.description}</p>
                        </div>

                        {/* Inclusions */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="p-2 bg-primary-100 rounded-lg">✅</span>
                                {isArabic ? 'ماذا تشمل الرحلة' : 'What\'s Included'}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {trip.included.map((item: string, i: number) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                        <span className="text-green-500 font-bold">✓</span>
                                        <span className="text-slate-700 text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Schedule */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="p-2 bg-accent-100 rounded-lg">🕒</span>
                                {isArabic ? 'برنامج الرحلة' : 'Trip Schedule'}
                            </h2>
                            <div className="space-y-4 relative before:absolute before:inset-y-0 before:left-4 before:w-0.5 before:bg-slate-200">
                                {trip.schedule.map((item: string, i: number) => (
                                    <div key={i} className="relative pl-10">
                                        <div className="absolute left-2.5 top-2 w-3 h-3 bg-primary-600 rounded-full border-2 border-white" />
                                        <p className="text-slate-700 font-medium">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Sticky Booking Box */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="sticky top-24 bg-white rounded-[2.5rem] p-8 shadow-premium border border-slate-100"
                        >
                            <div className="mb-8">
                                <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-1">{t('common.price_starting')}</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-black text-primary-950">{priceFormatted}</span>
                                    <span className="text-slate-400 font-medium">{t('common.per_person')}</span>
                                </div>
                            </div>

                            <div className="space-y-6 mb-8">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Select Date</label>
                                    <input
                                        type="date"
                                        className="w-full p-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary-500 transition-all outline-none font-medium"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Number of People</label>
                                    <div className="flex items-center gap-4 bg-slate-50 rounded-2xl p-2">
                                        <button
                                            onClick={() => setPeople(Math.max(1, people - 1))}
                                            className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-primary-50 transition-colors"
                                        >-</button>
                                        <span className="flex-1 text-center font-bold text-lg">{people}</span>
                                        <button
                                            onClick={() => setPeople(people + 1)}
                                            className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-primary-50 transition-colors"
                                        >+</button>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <button className="btn-accent w-full py-4 text-lg">
                                    Confirm Booking
                                </button>
                                <a
                                    href={`https://wa.me/212XXXXXXXXX?text=Hi, I want to book ${trip.title} for ${people} people on ${date}`}
                                    target="_blank"
                                    className="btn-premium w-full py-4 text-lg bg-green-500 hover:bg-green-600 border-none"
                                >
                                    Book via WhatsApp
                                </a>
                            </div>

                            <p className="text-center text-xs text-slate-400 mt-6 font-medium">
                                No immediate payment required. We will confirm availability via WhatsApp.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TripDetails;
