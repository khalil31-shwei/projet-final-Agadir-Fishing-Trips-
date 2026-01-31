import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Trips = () => {
    const { i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';

    const activities = [
        {
            id: 'rod-fishing',
            title: 'Rod Fishing',
            titleAr: 'صيد بالقصبة',
            description: 'Traditional fishing from shore or boat. Perfect for all skill levels.',
            descriptionAr: 'الصيد التقليدي من الشاطئ أو القارب. مثالي لجميع المستويات.',
            image: '/rod_sunset.jpg',
            icon: '🎣',
            color: 'from-primary-600 to-ocean-600'
        },
        {
            id: 'spearfishing',
            title: 'Spearfishing',
            titleAr: 'صيد تحت الماء',
            description: 'Underwater hunting for experienced divers. Explore the Atlantic depths.',
            descriptionAr: 'الصيد تحت الماء للغواصين ذوي الخبرة. استكشف أعماق المحيط الأطلسي.',
            image: '/legzira.jpg',
            icon: '🤿',
            color: 'from-ocean-600 to-primary-800'
        },
        {
            id: 'octopus-fishing',
            title: 'Traditional Octopus Fishing',
            titleAr: 'صيد الأخطبوط التقليدي',
            description: 'Ancient local technique. A cultural fishing experience unique to Morocco.',
            descriptionAr: 'تقنية محلية قديمة. تجربة صيد ثقافية فريدة من نوعها في المغرب.',
            image: '/blue_boats.jpg',
            icon: '🐙',
            color: 'from-accent-600 to-primary-900'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-20 pb-24">
            {/* Header */}
            <div className="bg-primary-950 text-white pb-32 pt-16 relative overflow-hidden rounded-b-[3rem] shadow-premium">
                <div className="absolute inset-0 bg-mesh opacity-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                            {isArabic ? 'اختر نشاطك' : 'Choose Your Activity'}
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-200 font-light max-w-3xl mx-auto">
                            {isArabic
                                ? 'ثلاث تجارب صيد أصيلة في مياه أكادير الأطلسية'
                                : 'Three authentic fishing experiences in the Atlantic waters of Agadir'}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Activity Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={activity.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className="group bg-white rounded-[2.5rem] overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500 border-2 border-slate-100 hover:border-primary-200 flex flex-col"
                        >
                            {/* Image */}
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <img
                                    src={activity.image}
                                    alt={activity.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />

                                {/* Icon Badge */}
                                <div className="absolute top-6 left-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                    <span className="text-4xl">{activity.icon}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 group-hover:text-primary-600 transition-colors">
                                    {isArabic ? activity.titleAr : activity.title}
                                </h2>
                                <p className="text-slate-600 text-base font-light leading-relaxed mb-8 flex-grow">
                                    {isArabic ? activity.descriptionAr : activity.description}
                                </p>

                                {/* CTA Button */}
                                <Link
                                    to={`/trips/${activity.id}`}
                                    className="btn-accent w-full py-4 text-center text-base font-bold uppercase tracking-widest"
                                >
                                    {isArabic ? 'استكشف النشاط' : 'Explore Activity'}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Info Banner */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-gradient-to-br from-primary-950 to-ocean-900 text-white rounded-[2rem] p-8 md:p-12 text-center shadow-premium"
                >
                    <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight">
                        {isArabic ? 'لست متأكدًا من أين تبدأ؟' : 'Not Sure Where to Start?'}
                    </h3>
                    <p className="text-lg text-primary-100 font-light mb-6 max-w-2xl mx-auto">
                        {isArabic
                            ? 'تواصل مع فريقنا للحصول على توصيات مخصصة بناءً على خبرتك وتفضيلاتك'
                            : 'Contact our team for personalized recommendations based on your experience and preferences'}
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-accent-500 text-primary-950 font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-95"
                    >
                        {isArabic ? 'اتصل بنا' : 'Contact Us'}
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Trips;
