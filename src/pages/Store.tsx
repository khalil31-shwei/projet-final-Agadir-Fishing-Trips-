import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { mockProducts } from '../data/mockProducts';
import ProductCard from '../components/ProductCard';

const Store = () => {
    const { t } = useTranslation();

    const categories = [
        "Matériel & Outillage de pêche",
        "Cannes à pêche",
        "Moulinets de pêche",
        "Leurres pêche en mer"
    ];

    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [activeSubcategory, setActiveSubcategory] = useState('All');

    const subcategories = useMemo(() => {
        const subs = Array.from(new Set(
            mockProducts
                .filter(p => p.category === activeCategory)
                .map(p => p.subcategory)
        ));
        return ['All', ...subs];
    }, [activeCategory]);

    const filteredProducts = useMemo(() => {
        return mockProducts.filter(p =>
            p.category === activeCategory &&
            (activeSubcategory === 'All' || p.subcategory === activeSubcategory)
        );
    }, [activeCategory, activeSubcategory]);

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-20">
            {/* Background Decor */}
            <div className="fixed inset-0 pointer-events-none opacity-5 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-slow-pulse" />
                <div className="absolute top-1/2 -left-24 w-64 h-64 bg-accent-500 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter"
                    >
                        {t('nav.store')}
                    </motion.h1>
                    <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
                        Professional gear for the serious angler. Tested in the Atlantic, trusted by locals.
                    </p>
                </div>

                {/* Categories Tab */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setActiveCategory(cat);
                                setActiveSubcategory('All');
                            }}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === cat
                                ? 'bg-primary-950 text-white shadow-xl scale-105'
                                : 'bg-white text-slate-500 hover:bg-slate-100'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Subcategories Filter */}
                <div className="flex overflow-x-auto pb-6 mb-12 gap-2 scrollbar-hide no-scrollbar">
                    {subcategories.map((sub) => (
                        <button
                            key={sub}
                            onClick={() => setActiveSubcategory(sub)}
                            className={`whitespace-nowrap px-6 py-2 rounded-2xl text-xs font-bold transition-all ${activeSubcategory === sub
                                ? 'bg-accent-500 text-primary-950 shadow-md'
                                : 'bg-white/50 text-slate-400 border border-slate-100 hover:bg-white hover:text-slate-600'
                                }`}
                        >
                            {sub}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <span className="text-6xl block mb-4">🔍</span>
                        <p className="text-slate-400 font-medium">No products found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Store;
