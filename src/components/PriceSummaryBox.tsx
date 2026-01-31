import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { PricingBreakdown } from '../utils/pricing';
import { formatPrice } from '../utils/pricing';

interface PriceSummaryBoxProps {
    activity: string;
    location: string;
    duration: string;
    breakdown: PricingBreakdown;
}

const PriceSummaryBox = ({ activity, location, duration, breakdown }: PriceSummaryBoxProps) => {
    const { i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    const currency = isArabic ? 'MAD' : 'EUR';

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2rem] p-8 shadow-premium border-2 border-primary-100 sticky top-24"
        >
            {/* Header */}
            <div className="mb-6 pb-6 border-b border-slate-100">
                <h3 className="text-2xl font-black text-primary-950 mb-2">Price Estimate</h3>
                <p className="text-sm text-slate-500">Live calculation based on your selection</p>
            </div>

            {/* Selection Summary */}
            <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500 font-medium">Activity</span>
                    <span className="text-sm font-bold text-slate-900">{activity}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500 font-medium">Location</span>
                    <span className="text-sm font-bold text-slate-900">{location}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500 font-medium">Duration</span>
                    <span className="text-sm font-bold text-slate-900">{duration}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500 font-medium">Guests</span>
                    <span className="text-sm font-bold text-slate-900">{breakdown.numberOfPeople} {breakdown.numberOfPeople === 1 ? 'person' : 'people'}</span>
                </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-slate-50 rounded-2xl p-6 mb-6 space-y-3">
                <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600">Base price / person</span>
                    <motion.span
                        key={breakdown.basePrice}
                        initial={{ scale: 1.2, color: '#0e8ceb' }}
                        animate={{ scale: 1, color: '#475569' }}
                        className="font-bold"
                    >
                        {formatPrice(breakdown.basePrice, currency)}
                    </motion.span>
                </div>

                {breakdown.locationModifier > 0 && (
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-600">Location fee</span>
                        <motion.span
                            key={breakdown.locationModifier}
                            initial={{ scale: 1.2, color: '#0e8ceb' }}
                            animate={{ scale: 1, color: '#475569' }}
                            className="font-bold"
                        >
                            +{formatPrice(breakdown.locationModifier, currency)}
                        </motion.span>
                    </div>
                )}

                <div className="h-px bg-slate-200 my-2" />

                <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600">Subtotal / person</span>
                    <span className="font-bold text-slate-900">{formatPrice(breakdown.subtotalPerPerson, currency)}</span>
                </div>

                {breakdown.groupMultiplier !== 1 && (
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-600 flex items-center gap-1">
                            {breakdown.groupDiscountLabel}
                            <span className="text-xs">
                                {breakdown.numberOfPeople === 1 ? '⚠️' : '🎉'}
                            </span>
                        </span>
                        <span className={`font-bold ${breakdown.numberOfPeople === 1 ? 'text-orange-600' : 'text-green-600'}`}>
                            {breakdown.numberOfPeople === 1 ? '+20%' : '-10%'}
                        </span>
                    </div>
                )}
            </div>

            {/* Final Price */}
            <div className="bg-gradient-to-br from-primary-950 to-primary-800 text-white rounded-2xl p-6 mb-6">
                <p className="text-xs uppercase tracking-widest font-bold opacity-80 mb-2">Price per person</p>
                <motion.p
                    key={breakdown.pricePerPerson}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-4xl font-black mb-4"
                >
                    {formatPrice(breakdown.pricePerPerson, currency)}
                </motion.p>

                <div className="h-px bg-white/20 my-4" />

                <div className="flex justify-between items-center">
                    <span className="text-sm font-medium opacity-90">Total for {breakdown.numberOfPeople} {breakdown.numberOfPeople === 1 ? 'person' : 'people'}</span>
                    <motion.span
                        key={breakdown.totalPrice}
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        className="text-2xl font-black"
                    >
                        {formatPrice(breakdown.totalPrice, currency)}
                    </motion.span>
                </div>
            </div>

            {/* Info Note */}
            <p className="text-xs text-slate-400 text-center leading-relaxed">
                Final price confirmed after booking. Prices include equipment and guide. Additional transport fees may apply.
            </p>
        </motion.div>
    );
};

export default PriceSummaryBox;
