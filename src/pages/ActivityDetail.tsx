import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { regions } from '../data/locations';
import { calculatePrice, formatPrice, type ActivityType, type DurationType } from '../utils/pricing';

const ActivityDetail = () => {
    const { activityId } = useParams<{ activityId: string }>();
    const { i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';

    // Filter states
    const [selectedLocation, setSelectedLocation] = useState('Agadir Beach / Corniche');
    const [duration, setDuration] = useState<'Half Day' | 'Full Day'>('Half Day');
    const [people, setPeople] = useState(2);

    // Activity data
    const activities: Record<string, any> = {
        'rod-fishing': {
            title: 'Rod Fishing',
            titleAr: 'صيد بالقصبة',
            icon: '🎣',
            skillLevel: 'Beginner Friendly',
            skillLevelAr: 'مناسب للمبتدئين',
            image: '/rod_sunset.jpg',
            description: `Experience the timeless art of rod fishing along the stunning Agadir coastline. Whether you're a complete beginner or an experienced angler, our expert guides will help you master the techniques of casting, reeling, and landing your catch.

From the golden beaches to rocky outcrops, you'll explore prime fishing spots where Atlantic waters meet the Moroccan shore. Target species include sea bass, bream, and grouper depending on the season.

Our trips include all professional equipment, bait, and guidance. Just bring your enthusiasm and prepare for an unforgettable day on the water.`,
            descriptionAr: 'استمتع بفن الصيد الخالد بالقصبة على طول ساحل أكادير المذهل. سواء كنت مبتدئًا تمامًا أو صيادًا ذا خبرة، سيساعدك مرشدونا الخبراء على إتقان تقنيات الإلقاء والبكرة وهبوط الصيد.',
            highlights: [
                'Professional fishing rods and reels',
                'Live bait and tackle included',
                'Expert local guide',
                'Perfect for families and groups',
                'All skill levels welcome'
            ],
            highlightsAr: [
                'قضبان صيد ومكائن احترافية',
                'طعم حي ومعدات مضمنة',
                'مرشد محلي خبير',
                'مثالي للعائلات والمجموعات',
                'جميع المستويات مرحب بها'
            ]
        },
        'spearfishing': {
            title: 'Spearfishing',
            titleAr: 'صيد تحت الماء',
            icon: '🤿',
            skillLevel: 'Intermediate / Advanced',
            skillLevelAr: 'متوسط / متقدم',
            image: '/legzira.jpg',
            description: `Dive into the crystal-clear Atlantic waters and hunt like a true ocean predator. Spearfishing is the ultimate test of skill, patience, and underwater prowess.

Our spearfishing expeditions take you to hidden reefs and rocky formations where fish are abundant. You'll learn breath-hold techniques, stalking methods, and ethical hunting practices from certified freedivers.

This activity requires basic swimming ability and comfort in open water. We provide all equipment including spearguns, wetsuits, fins, and safety buoys.`,
            descriptionAr: 'اغطس في مياه المحيط الأطلسي الصافية واصطاد مثل المفترس الحقيقي. الصيد بالرمح هو الاختبار النهائي للمهارة والصبر والبراعة تحت الماء.',
            highlights: [
                'Professional speargun and wetsuit',
                'Certified freediving instructor',
                'Safety equipment and boat support',
                'Prime underwater locations',
                'Swimming ability required'
            ],
            highlightsAr: [
                'بندقية رمح وبدلة غوص احترافية',
                'مدرب غوص حر معتمد',
                'معدات السلامة ودعم القارب',
                'مواقع تحت الماء ممتازة',
                'مطلوب القدرة على السباحة'
            ]
        },
        'octopus-fishing': {
            title: 'Traditional Octopus Fishing',
            titleAr: 'صيد الأخطبوط التقليدي',
            icon: '🐙',
            skillLevel: 'Beginner Friendly',
            skillLevelAr: 'مناسب للمبتدئين',
            image: '/blue_boats.jpg',
            description: `Step back in time and learn an ancient Moroccan fishing technique passed down through generations. Traditional octopus fishing is a cultural experience as much as a sporting one.

Using handmade clay pots and traditional methods, you'll discover how local fishermen have sustainably harvested octopus for centuries. This gentle, meditative practice connects you with Morocco's maritime heritage.

Perfect for those seeking an authentic, low-impact fishing experience. No prior experience needed – our local expert will guide you through every step.`,
            descriptionAr: 'تعود بالزمن إلى الوراء وتعلم تقنية الصيد المغربية القديمة التي تم تناقلها عبر الأجيال. صيد الأخطبوط التقليدي هو تجربة ثقافية بقدر ما هو رياضة.',
            culturalContext: `Octopus fishing in Morocco is deeply rooted in Berber coastal traditions. Fishermen use "kharita" (clay pots) as artificial shelters that octopuses naturally inhabit. This sustainable method has been practiced for over 500 years and represents a harmonious relationship between humans and the ocean.

During your experience, you'll learn about tidal patterns, lunar cycles, and the respect Moroccan fishermen hold for marine life. Many families in coastal villages still rely on this method for their livelihood, making it a living tradition you can be part of.`,
            culturalContextAr: 'يتجذر صيد الأخطبوط في المغرب بعمق في تقاليد الساحل الأمازيغي. يستخدم الصيادون "الخريطة" (أواني طينية) كملاجئ اصطناعية يسكنها الأخطبوط بشكل طبيعي.',
            highlights: [
                'Authentic Berber fishing method',
                'Handmade clay pot technique',
                'Cultural storytelling',
                'Sustainable and ethical',
                'Connect with local traditions'
            ],
            highlightsAr: [
                'طريقة الصيد الأمازيغية الأصيلة',
                'تقنية الأواني الطينية المصنوعة يدويًا',
                'سرد القصص الثقافية',
                'مستدام وأخلاقي',
                'تواصل مع التقاليد المحلية'
            ]
        }
    };

    const activity = activities[activityId || 'rod-fishing'];

    if (!activity) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Activity not found</h2>
                    <Link to="/trips" className="btn-premium">Back to Activities</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-20 pb-24">
            {/* Hero Section */}
            <div className="relative h-[40vh] overflow-hidden">
                <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/70 to-transparent" />

                <div className="absolute inset-0 flex items-end">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
                        <Link to="/trips" className="inline-flex items-center text-white hover:text-accent-400 mb-6 transition-colors font-medium">
                            <span className={isArabic ? 'ml-2' : 'mr-2'}>←</span>
                            {isArabic ? 'العودة للأنشطة' : 'Back to Activities'}
                        </Link>
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                                <span className="text-5xl">{activity.icon}</span>
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-6xl font-black text-white mb-2">
                                    {isArabic ? activity.titleAr : activity.title}
                                </h1>
                                <div className="inline-block bg-accent-500 text-primary-950 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                                    {isArabic ? activity.skillLevelAr : activity.skillLevel}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Content Column */}
                    <div className="lg:col-span-7">
                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-[2rem] p-8 shadow-lg mb-8"
                        >
                            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                <span className="text-3xl">📖</span>
                                {isArabic ? 'عن هذا النشاط' : 'About This Activity'}
                            </h2>
                            <p className="text-slate-600 leading-relaxed whitespace-pre-line text-lg font-light">
                                {isArabic ? activity.descriptionAr : activity.description}
                            </p>
                        </motion.div>

                        {/* Cultural Context (for Octopus Fishing) */}
                        {activityId === 'octopus-fishing' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-[2rem] p-8 shadow-lg mb-8 border-2 border-accent-200"
                            >
                                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🏺</span>
                                    {isArabic ? 'السياق الثقافي' : 'Cultural Heritage'}
                                </h2>
                                <p className="text-slate-700 leading-relaxed whitespace-pre-line text-base font-light">
                                    {isArabic ? activity.culturalContextAr : activity.culturalContext}
                                </p>
                            </motion.div>
                        )}

                        {/* Highlights */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-[2rem] p-8 shadow-lg"
                        >
                            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                <span className="text-3xl">✨</span>
                                {isArabic ? 'مميزات' : 'What\'s Included'}
                            </h2>
                            <div className="space-y-4">
                                {(isArabic ? activity.highlightsAr : activity.highlights).map((item: string, i: number) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white text-sm">✓</span>
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Filter Sidebar */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-[2rem] p-8 shadow-premium border-2 border-primary-100 sticky top-24"
                        >
                            <h3 className="text-2xl font-black text-primary-950 mb-6">
                                {isArabic ? 'حدد خياراتك' : 'Customize Your Trip'}
                            </h3>

                            {/* Step 1: Location */}
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-950 flex items-center justify-center font-black">1</div>
                                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                                        {isArabic ? 'اختر الشاطئ' : 'Choose Beach'}
                                    </label>
                                </div>
                                <select
                                    value={selectedLocation}
                                    onChange={(e) => setSelectedLocation(e.target.value)}
                                    className="w-full p-4 bg-slate-50 rounded-2xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-primary-500 appearance-none cursor-pointer hover:bg-slate-100 transition-colors"
                                >
                                    {regions.map(region => (
                                        <optgroup key={region.name} label={region.name}>
                                            {region.locations.map((loc: string) => (
                                                <option key={loc} value={loc}>{loc}</option>
                                            ))}
                                        </optgroup>
                                    ))}
                                </select>
                            </div>

                            {/* Step 2: Duration */}
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-950 flex items-center justify-center font-black">2</div>
                                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                                        {isArabic ? 'اختر المدة' : 'Choose Duration'}
                                    </label>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {(['Half Day', 'Full Day'] as const).map((dur) => (
                                        <button
                                            key={dur}
                                            onClick={() => setDuration(dur)}
                                            className={`p-4 rounded-2xl font-bold transition-all ${duration === dur
                                                ? 'bg-primary-950 text-white shadow-lg scale-105'
                                                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                                                }`}
                                        >
                                            {dur}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Step 3: People */}
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-950 flex items-center justify-center font-black">3</div>
                                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                                        {isArabic ? 'عدد الأشخاص' : 'Number of People'}
                                    </label>
                                </div>
                                <div className="flex items-center justify-between bg-slate-50 rounded-2xl p-4">
                                    <button
                                        onClick={() => setPeople(Math.max(1, people - 1))}
                                        className="w-12 h-12 bg-white rounded-xl shadow-sm text-lg font-bold hover:bg-slate-100 disabled:opacity-50"
                                        disabled={people <= 1}
                                    >
                                        -
                                    </button>
                                    <span className="text-3xl font-black text-primary-950">{people}</span>
                                    <button
                                        onClick={() => setPeople(Math.min(6, people + 1))}
                                        className="w-12 h-12 bg-white rounded-xl shadow-sm text-lg font-bold hover:bg-slate-100 disabled:opacity-50"
                                        disabled={people >= 6}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Price Calculation */}
                            {(() => {
                                // Map activityId to ActivityType
                                const activityTypeMap: Record<string, ActivityType> = {
                                    'rod-fishing': 'Rod Fishing',
                                    'spearfishing': 'Spearfishing',
                                    'octopus-fishing': 'Traditional Octopus Fishing'
                                };

                                const activityType = activityTypeMap[activityId || 'rod-fishing'];
                                const pricing = calculatePrice(activityType, duration as DurationType, selectedLocation, people);
                                const currency = isArabic ? 'MAD' : 'EUR';

                                return (
                                    <>
                                        {/* Price Breakdown */}
                                        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 mb-6 space-y-4">
                                            <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">
                                                {isArabic ? 'تفاصيل السعر' : 'Price Breakdown'}
                                            </h4>

                                            <div className="space-y-3">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-slate-600">{isArabic ? 'السعر الأساسي / شخص' : 'Base price / person'}</span>
                                                    <motion.span
                                                        key={pricing.basePrice}
                                                        initial={{ scale: 1.2, color: '#0e8ceb' }}
                                                        animate={{ scale: 1, color: '#475569' }}
                                                        className="font-bold"
                                                    >
                                                        {formatPrice(pricing.basePrice, currency)}
                                                    </motion.span>
                                                </div>

                                                {pricing.locationModifier > 0 && (
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-slate-600">{isArabic ? 'رسوم الموقع' : 'Location fee'}</span>
                                                        <motion.span
                                                            key={pricing.locationModifier}
                                                            initial={{ scale: 1.2, color: '#0e8ceb' }}
                                                            animate={{ scale: 1, color: '#475569' }}
                                                            className="font-bold"
                                                        >
                                                            +{formatPrice(pricing.locationModifier, currency)}
                                                        </motion.span>
                                                    </div>
                                                )}

                                                <div className="h-px bg-slate-200 my-2" />

                                                <div className="flex justify-between text-sm">
                                                    <span className="text-slate-600">{isArabic ? 'المجموع الفرعي / شخص' : 'Subtotal / person'}</span>
                                                    <span className="font-bold text-slate-900">{formatPrice(pricing.subtotalPerPerson, currency)}</span>
                                                </div>

                                                {pricing.groupMultiplier !== 1 && (
                                                    <div className="flex justify-between text-sm items-center">
                                                        <span className="text-slate-600 flex items-center gap-1">
                                                            {isArabic ? 'خصم / رسوم المجموعة' : pricing.groupDiscountLabel}
                                                            <span className="text-xs">
                                                                {people === 1 ? '⚠️' : '🎉'}
                                                            </span>
                                                        </span>
                                                        <span className={`font-bold ${people === 1 ? 'text-orange-600' : 'text-green-600'}`}>
                                                            {people === 1 ? '+20%' : '-10%'}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Final Price Display */}
                                        <div className="bg-gradient-to-br from-primary-950 to-primary-800 text-white rounded-2xl p-6 mb-6">
                                            <p className="text-xs uppercase tracking-widest font-bold opacity-80 mb-2">
                                                {isArabic ? 'السعر لكل شخص' : 'Price per person'}
                                            </p>
                                            <motion.p
                                                key={pricing.pricePerPerson}
                                                initial={{ scale: 1.1 }}
                                                animate={{ scale: 1 }}
                                                className="text-4xl font-black mb-4"
                                            >
                                                {formatPrice(pricing.pricePerPerson, currency)}
                                            </motion.p>

                                            <div className="h-px bg-white/20 my-4" />

                                            <div className="flex justify-between items-center">
                                                <span className="text-sm font-medium opacity-90">
                                                    {isArabic ? `المجموع لـ ${people} ${people === 1 ? 'شخص' : 'أشخاص'}` : `Total for ${people} ${people === 1 ? 'person' : 'people'}`}
                                                </span>
                                                <motion.span
                                                    key={pricing.totalPrice}
                                                    initial={{ scale: 1.1 }}
                                                    animate={{ scale: 1 }}
                                                    className="text-2xl font-black"
                                                >
                                                    {formatPrice(pricing.totalPrice, currency)}
                                                </motion.span>
                                            </div>
                                        </div>
                                    </>
                                );
                            })()}

                            {/* CTA */}
                            <button className="btn-accent w-full py-4 text-lg">
                                {isArabic ? 'احجز الآن' : 'Book Now'}
                            </button>
                            <p className="text-xs text-slate-400 text-center mt-4">
                                {isArabic ? 'تأكيد التوافر عبر واتساب' : 'Availability confirmed via WhatsApp'}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivityDetail;
