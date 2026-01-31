export interface Product {
    id: string;
    name: string;
    category: string;
    subcategory: string;
    description: string;
    priceMAD: number;
    priceEUR: number;
    image: string;
    isNew?: boolean;
    isFlashSale?: boolean;
}

const categories = {
    material: "Matériel & Outillage de pêche",
    rods: "Cannes à pêche",
    reels: "Moulinets de pêche",
    lures: "Leurres pêche en mer"
};

const subcategories = {
    material: [
        "Boites de rangement pêche", "Epuisette de pêche", "Sacs, sacoches de pêche",
        "Outils de pêche", "Fils de pêche", "Hameçons", "Bas de ligne",
        "Plombs", "Emerillons et agrafes", "Lampes frontales", "Flotteurs", "Têtes plombées"
    ],
    rods: ["Canne Surfcasting", "Canne Spinning", "Canne Jig", "Canne Black-bass", "Canne Pelote"],
    reels: ["Moulinet Surfcasting", "Moulinet Spinning", "Moulinet Jig", "Moulinet Black-bass"],
    lures: ["Leurres durs", "Leurres souples", "Casting jigs", "Appâts souples"]
};

const generateProducts = (): Product[] => {
    const products: Product[] = [];
    let idCounter = 1;

    // Helper to get random image based on category
    const getPlaceholder = (cat: string) => {
        const images: { [key: string]: string } = {
            material: "/blue_boats.jpg",
            rods: "/rod_sunset.jpg",
            reels: "/agadir_kasbah.jpg",
            lures: "/legzira.jpg"
        };
        return images[cat] || images.material;
    };

    Object.entries(subcategories).forEach(([catKey, subList]) => {
        subList.forEach(sub => {
            for (let i = 1; i <= 5; i++) {
                const catName = categories[catKey as keyof typeof categories];
                products.push({
                    id: `p${idCounter++}`,
                    name: `${sub} Pro Series Gen-${i}`,
                    category: catName,
                    subcategory: sub,
                    description: `High-performance ${sub.toLowerCase()} designed for the Atlantic currents of Agadir. Premium durability and precision.`,
                    priceMAD: Math.floor(Math.random() * 2000) + 100,
                    priceEUR: 0, // Will calculate below
                    image: getPlaceholder(catKey),
                    isNew: Math.random() > 0.8,
                    isFlashSale: Math.random() > 0.9
                });
            }
        });
    });

    return products.map(p => ({ ...p, priceEUR: Math.round(p.priceMAD / 10.5) }));
};

export const mockProducts = generateProducts();
