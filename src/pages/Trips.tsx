import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Trip {
    id: number;
    title: string;
    description: string;
    duration: string;
    price: string;
    capacity: string;
    image: string;
    tag: string;
}

const Trips = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';

    const trips: Trip[] = [
        {
            id: 1,
            title: isArabic ? 'رحلة صيد ساحلية' : 'Half-Day Coastal Fishing',
            description: isArabic ? 'تجربة مريحة للعائلات والمبتدئين على طول ساحل أكادير.' : 'Relaxing coastal experience for families and beginners.',
            duration: '4 hours',
            price: isArabic ? '500 MAD' : '50 €',
            capacity: '1-6 people',
            image: '/family_fishing_trip_1769678782051.png',
            tag: isArabic ? 'مفضل العائلات' : 'Family Favorite'
        },
        {
            id: 2,
            title: isArabic ? 'صيد الأعماق للمحترفين' : 'Deep Sea Big Game',
            description: isArabic ? 'مطاردة التونة والمارلين في أعماق المحيط الأطلسي.' : 'Chasing tuna and marlin in the deep blue Atlantic.',
            duration: '8 hours',
            price: isArabic ? '1500 MAD' : '150 €',
            capacity: '1-8 people',
            image: '/deep_sea_fishing_trip_1769678745974.png',
            tag: isArabic ? 'مغامرة للمحترفين' : 'Pro Adventure'
        },
        {
            id: 3,
            title: isArabic ? 'تجربة صيد وقت الغروب' : 'Sunset Fishing Experience',
            description: isArabic ? 'امزج بين الصيد ومشاهدة غروب الشمس الساحر.' : 'Combine fishing with breathtaking sunset views.',
            duration: '3 hours',
            price: isArabic ? '400 MAD' : '40 €',
            capacity: '1-4 people',
            image: '/agadir_fishing_hero_1769678716870.png',
            tag: isArabic ? 'رومانسي' : 'Romantic'
        },
        {
            id: 4,
            title: isArabic ? 'قارب خاص' : 'Private Charter',
            description: isArabic ? 'خصص رحلة الصيد الخاصة بك بالكامل.' : 'Fully customize your own fishing adventure.',
            duration: 'Flexible',
            price: isArabic ? 'Custom' : 'Custom',
            capacity: '1-10 people',
            image: '/agadir_fishing_hero_1769678716870.png',
            tag: isArabic ? 'حصري' : 'Exclusive'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900"
                    >
                        {t('nav.trips')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-600 font-light"
                    >
                        {isArabic ? t('trips.local_msg') : t('trips.tourist_msg')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {trips.map((trip) => (
                        <motion.div
                            key={trip.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group relative bg-white rounded-[2rem] overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500"
                        >
                            <div className="aspect-[16/10] overflow-hidden relative">
                                <img
                                    src={trip.image}
                                    alt={trip.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-sm font-bold text-primary-950 shadow-sm">
                                    {trip.tag}
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2 transition-colors group-hover:text-primary-600">{trip.title}</h3>
                                        <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                                            <span className="flex items-center gap-1">⏱️ {trip.duration}</span>
                                            <span className="flex items-center gap-1">👥 {trip.capacity}</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">{t('common.price_starting')}</p>
                                        <p className="text-3xl font-black text-primary-950">{trip.price}</p>
                                        <p className="text-[10px] text-slate-400 font-bold">{t('common.per_person')}</p>
                                    </div>
                                </div>

                                <p className="text-slate-600 mb-8 line-clamp-2 font-light leading-relaxed">
                                    {trip.description}
                                </p>

                                <div className="flex gap-3">
                                    <Link to={`/trips/${trip.id}`} className="btn-premium flex-1 group">
                                        View Details
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </Link>
                                    <a href="https://wa.me/212XXXXXXXXX" className="p-3 bg-green-50 text-green-600 rounded-full hover:bg-green-100 transition-colors">
                                        <span className="text-xl">💬</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Trips;
