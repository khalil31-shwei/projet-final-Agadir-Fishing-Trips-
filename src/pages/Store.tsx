import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { mockProducts } from '../data/mockProducts';
import ProductCard from '../components/ProductCard';
import {
    Search,
    X,
    ChevronRight,
    Filter,
    ChevronDown,
    ArrowUpDown
} from 'lucide-react';

const Store = () => {
    const { t } = useTranslation();
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
    const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');

    const categories = [
        "Matériel & Outillage de pêche",
        "Cannes à pêche",
        "Moulinets de pêche",
        "Leurres pêche en mer"
    ];

    const [activeCategory, setActiveCategory] = useState<string | 'All'>('All');
    const [activeSubcategory, setActiveSubcategory] = useState('All');

    const subcategories = useMemo(() => {
        if (activeCategory === 'All') return [];
        const subs = Array.from(new Set(
            mockProducts
                .filter(p => p.category === activeCategory)
                .map(p => p.subcategory)
        ));
        return subs;
    }, [activeCategory]);

    const filteredProducts = useMemo(() => {
        let filtered = mockProducts.filter(p => {
            const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
            const matchesSubcategory = activeSubcategory === 'All' || p.subcategory === activeSubcategory;
            const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesPrice = p.priceMAD >= priceRange[0] && p.priceMAD <= priceRange[1];

            return matchesCategory && matchesSubcategory && matchesSearch && matchesPrice;
        });

        if (sortBy === 'price-low') {
            filtered.sort((a, b) => a.priceMAD - b.priceMAD);
        } else if (sortBy === 'price-high') {
            filtered.sort((a, b) => b.priceMAD - a.priceMAD);
        }

        return filtered;
    }, [activeCategory, activeSubcategory, searchQuery, priceRange, sortBy]);

    const resetFilters = () => {
        setActiveCategory('All');
        setActiveSubcategory('All');
        setSearchQuery('');
        setPriceRange([0, 10000]);
        setSortBy('featured');
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-20">
            {/* Background Decor */}
            <div className="fixed inset-0 pointer-events-none opacity-5 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-slow-pulse" />
                <div className="absolute top-1/2 -left-24 w-64 h-64 bg-accent-500 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-slate-200 pb-8">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-6xl font-black text-slate-900 mb-4 uppercase tracking-tighter"
                        >
                            {t('nav.store')}
                        </motion.h1>
                        <p className="text-lg text-slate-500 font-medium max-w-xl">
                            {activeCategory === 'All'
                                ? "Professional gear for the serious angler. Tested in the Atlantic."
                                : activeCategory}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters - Desktop */}
                    <aside className="hidden lg:block w-72 flex-shrink-0">
                        <div className="sticky top-28 space-y-8">
                            <section>
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{t('store.search')}</h3>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                                    <input
                                        type="text"
                                        placeholder={t('store.search')}
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                                    />
                                </div>
                            </section>

                            <section>
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{t('store.categories')}</h3>
                                <div className="space-y-1">
                                    <button
                                        onClick={() => { setActiveCategory('All'); setActiveSubcategory('All'); }}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeCategory === 'All' ? 'bg-primary-950 text-white shadow-lg' : 'hover:bg-slate-100 text-slate-600'
                                            }`}
                                    >
                                        <span>{t('store.all_products')}</span>
                                        {activeCategory === 'All' && <ChevronRight className="w-4 h-4" />}
                                    </button>
                                    {categories.map((cat) => (
                                        <div key={cat} className="space-y-1">
                                            <button
                                                onClick={() => {
                                                    setActiveCategory(cat);
                                                    setActiveSubcategory('All');
                                                }}
                                                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeCategory === cat ? 'bg-primary-50 text-primary-950' : 'hover:bg-slate-100 text-slate-600'
                                                    }`}
                                            >
                                                <span className="truncate">{cat}</span>
                                                {activeCategory === cat ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                                            </button>

                                            <AnimatePresence>
                                                {activeCategory === cat && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="ml-4 pl-4 border-l-2 border-slate-200 mt-1 space-y-1 py-1 overflow-hidden"
                                                    >
                                                        <button
                                                            onClick={() => setActiveSubcategory('All')}
                                                            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all ${activeSubcategory === 'All' ? 'bg-accent-500 text-primary-950' : 'text-slate-500 hover:text-slate-900'
                                                                }`}
                                                        >
                                                            {t('store.view_all_in')} {cat}
                                                        </button>
                                                        {subcategories.map(sub => (
                                                            <button
                                                                key={sub}
                                                                onClick={() => setActiveSubcategory(sub)}
                                                                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all ${activeSubcategory === sub ? 'bg-accent-500 text-primary-950' : 'text-slate-500 hover:text-slate-900'
                                                                    }`}
                                                            >
                                                                {sub}
                                                            </button>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('store.price_range')}</h3>
                                    <span className="text-xs font-black text-primary-600">{priceRange[1]} MAD</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="10000"
                                    step="100"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-600 mb-2"
                                />
                                <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase">
                                    <span>0 MAD</span>
                                    <span>10000 MAD</span>
                                </div>
                            </section>

                            <button
                                onClick={resetFilters}
                                className="w-full py-4 text-xs font-black text-slate-500 border-2 border-slate-200 rounded-2xl hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all uppercase tracking-widest shadow-sm"
                            >
                                {t('store.reset')}
                            </button>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1">
                        {/* Toolbar */}
                        <div className="flex flex-wrap items-center justify-between mb-8 gap-4 pb-6 border-b border-slate-200">
                            <button
                                onClick={() => setIsFilterOpen(true)}
                                className="lg:hidden flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold shadow-sm hover:shadow-md transition-all"
                            >
                                <Filter className="w-4 h-4 text-primary-600" /> {t('store.filter_title')}
                            </button>

                            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                                <span className="bg-primary-950 text-white px-3 py-1 rounded-lg text-xs font-black">{filteredProducts.length}</span> {t('store.results_found')}
                            </div>

                            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-sm">
                                <ArrowUpDown className="w-4 h-4 text-slate-400" />
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as any)}
                                    className="bg-transparent text-sm font-black text-slate-700 outline-none cursor-pointer min-w-[140px]"
                                >
                                    <option value="featured">{t('store.featured')}</option>
                                    <option value="price-low">{t('store.price_low')}</option>
                                    <option value="price-high">{t('store.price_high')}</option>
                                </select>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <motion.div
                            layout
                            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                        >
                            <AnimatePresence mode='popLayout'>
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-32 bg-white rounded-[2rem] border-2 border-dashed border-slate-200 shadow-inner">
                                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                    <Search className="w-10 h-10 text-slate-200" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">{t('store.no_results')}</h3>
                                <p className="text-slate-500 mb-10 max-w-xs mx-auto font-medium">{t('store.try_adjusting')}</p>
                                <button
                                    onClick={resetFilters}
                                    className="px-10 py-4 bg-primary-950 text-white rounded-2xl text-sm font-black uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all"
                                >
                                    {t('store.reset')}
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>

            {/* Mobile Filter Drawer */}
            <AnimatePresence>
                {isFilterOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsFilterOpen(false)}
                            className="fixed inset-0 bg-primary-950/40 backdrop-blur-md z-[1000]"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 w-full max-w-xs bg-white z-[1001] p-8 shadow-2xl overflow-y-auto"
                        >
                            <div className="flex items-center justify-between mb-10">
                                <h2 className="text-3xl font-black uppercase text-slate-900 tracking-tighter">{t('store.filter_title')}</h2>
                                <button onClick={() => setIsFilterOpen(false)} className="p-3 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all">
                                    <X className="w-6 h-6 text-slate-900" />
                                </button>
                            </div>

                            <div className="space-y-10 pb-10">
                                <section>
                                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 font-bold">{t('store.search')}</h3>
                                    <div className="relative">
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            placeholder={t('store.search')}
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary-500 outline-none font-bold"
                                        />
                                    </div>
                                </section>

                                <section>
                                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 font-bold">{t('store.categories')}</h3>
                                    <div className="flex flex-col gap-2">
                                        <button
                                            onClick={() => { setActiveCategory('All'); setActiveSubcategory('All'); }}
                                            className={`w-full text-left px-5 py-4 rounded-2xl text-sm font-black transition-all ${activeCategory === 'All' ? 'bg-primary-950 text-white shadow-xl translate-x-1' : 'bg-slate-50 text-slate-600'
                                                }`}
                                        >
                                            {t('store.all_products')}
                                        </button>
                                        {categories.map((cat) => (
                                            <div key={cat} className="space-y-2">
                                                <button
                                                    onClick={() => {
                                                        setActiveCategory(cat);
                                                        setActiveSubcategory('All');
                                                    }}
                                                    className={`w-full text-left px-5 py-4 rounded-2xl text-sm font-black transition-all ${activeCategory === cat ? 'bg-primary-950 text-white shadow-xl translate-x-1' : 'bg-slate-50 text-slate-600'
                                                        }`}
                                                >
                                                    {cat}
                                                </button>

                                                {activeCategory === cat && (
                                                    <div className="ml-4 pl-4 border-l-4 border-primary-100 space-y-2 py-2">
                                                        <button
                                                            onClick={() => setActiveSubcategory('All')}
                                                            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-black transition-all ${activeSubcategory === 'All' ? 'bg-accent-400 text-primary-950 shadow-md' : 'bg-white border-2 border-slate-100 text-slate-500'
                                                                }`}
                                                        >
                                                            {t('store.view_all_in')}
                                                        </button>
                                                        {subcategories.map(sub => (
                                                            <button
                                                                key={sub}
                                                                onClick={() => setActiveSubcategory(sub)}
                                                                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-black transition-all ${activeSubcategory === sub ? 'bg-accent-400 text-primary-950 shadow-md' : 'bg-white border-2 border-slate-100 text-slate-500'
                                                                    }`}
                                                            >
                                                                {sub}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section>
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest font-bold">{t('store.price_range')}</h3>
                                        <span className="text-sm font-black text-primary-600">{priceRange[1]} MAD</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="10000"
                                        step="100"
                                        value={priceRange[1]}
                                        onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                                        className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-primary-600"
                                    />
                                </section>

                                <div className="pt-10 space-y-4">
                                    <button
                                        onClick={() => setIsFilterOpen(false)}
                                        className="w-full py-5 bg-primary-950 text-white rounded-[2rem] text-sm font-black uppercase tracking-widest shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                                    >
                                        {t('store.show_results', { count: filteredProducts.length })}
                                    </button>
                                    <button
                                        onClick={resetFilters}
                                        className="w-full py-4 text-xs font-black text-slate-400 uppercase tracking-widest hover:text-primary-600 transition-colors"
                                    >
                                        {t('store.reset')}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Store;
