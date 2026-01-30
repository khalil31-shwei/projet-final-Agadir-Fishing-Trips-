import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { Product } from '../data/mockProducts';

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';

    const displayPrice = isArabic
        ? `${product.priceMAD} MAD`
        : `${product.priceEUR} €`;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500 border border-slate-100"
        >
            {/* Badges */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {product.isNew && (
                    <span className="bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">New</span>
                )}
                {product.isFlashSale && (
                    <span className="bg-accent-500 text-primary-950 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Sale</span>
                )}
            </div>

            {/* Image Container */}
            <div className="aspect-square overflow-hidden relative">
                <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/20 transition-colors duration-500" />

                {/* Quick View Button (subtle glow effect) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button className="bg-white/90 backdrop-blur-md text-primary-950 font-bold py-2 px-6 rounded-full shadow-xl hover:scale-110 transition-transform active:scale-95">
                        Quick View
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{product.subcategory}</p>
                <h3 className="text-lg font-bold text-slate-900 mb-2 truncate group-hover:text-primary-600 transition-colors">
                    {product.name}
                </h3>
                <p className="text-sm text-slate-500 font-light line-clamp-2 mb-4">
                    {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                    <div>
                        <p className="text-2xl font-black text-primary-950">
                            {displayPrice}
                        </p>
                    </div>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-slate-50 text-slate-900 rounded-full flex items-center justify-center hover:bg-primary-950 hover:text-white transition-all duration-300"
                    >
                        <span className="text-xl">🛒</span>
                    </motion.button>
                </div>
            </div>

            {/* Subtle border animation */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/20 rounded-3xl transition-colors duration-500 pointer-events-none" />
        </motion.div>
    );
};

export default ProductCard;
