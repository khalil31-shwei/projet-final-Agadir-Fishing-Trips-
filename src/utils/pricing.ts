export type ActivityType = 'Rod Fishing' | 'Spearfishing' | 'Traditional Octopus Fishing';
export type DurationType = 'Half Day' | 'Full Day';

// Base prices per person in MAD
const BASE_PRICES: Record<ActivityType, Record<DurationType, number>> = {
    'Rod Fishing': {
        'Half Day': 300,
        'Full Day': 500
    },
    'Spearfishing': {
        'Half Day': 400,
        'Full Day': 700
    },
    'Traditional Octopus Fishing': {
        'Half Day': 250,
        'Full Day': 450
    }
};

// Location modifiers in MAD
const LOCATION_MODIFIERS: Record<string, number> = {
    // Near Agadir (+0 MAD)
    'Anza': 0,
    'Anza Beach': 0,
    'Agadir Beach / Corniche': 0,

    // Medium Distance (+50 MAD)
    'Taghazout': 50,
    'Ourir': 50,
    'Imourane': 50,

    // Far / Special Locations (+100 MAD)
    'Imsouane': 100,
    'Tamri': 100,
    'Tifnit': 100,
    'Sidi Ifni Beach': 100,
    'Legzira': 100,
    'Mirleft': 100,
    'Sidi Toual': 100,
    'Sidi Wassay': 100,
    'Aglou': 100,
    'Massa (outside protected areas)': 100,
    'Sidi Rbat (outside the park)': 100
};

// Group pricing multipliers
const getGroupMultiplier = (numberOfPeople: number): number => {
    if (numberOfPeople === 1) return 1.2; // +20% surcharge
    if (numberOfPeople >= 2 && numberOfPeople <= 3) return 1.0; // standard
    if (numberOfPeople >= 4 && numberOfPeople <= 6) return 0.9; // -10% discount
    return 1.0;
};

export interface PricingBreakdown {
    basePrice: number;
    locationModifier: number;
    subtotalPerPerson: number;
    groupMultiplier: number;
    pricePerPerson: number;
    numberOfPeople: number;
    totalPrice: number;
    groupDiscountLabel: string;
}

export const calculatePrice = (
    activity: ActivityType,
    duration: DurationType,
    location: string,
    numberOfPeople: number
): PricingBreakdown => {
    // Get base price
    const basePrice = BASE_PRICES[activity][duration];

    // Get location modifier
    const locationModifier = LOCATION_MODIFIERS[location] || 0;

    // Calculate subtotal per person (base + location)
    const subtotalPerPerson = basePrice + locationModifier;

    // Get group multiplier
    const groupMultiplier = getGroupMultiplier(numberOfPeople);

    // Calculate final price per person
    const pricePerPerson = Math.round(subtotalPerPerson * groupMultiplier);

    // Calculate total
    const totalPrice = pricePerPerson * numberOfPeople;

    // Get group discount label
    let groupDiscountLabel = '';
    if (numberOfPeople === 1) {
        groupDiscountLabel = 'Solo traveler surcharge (+20%)';
    } else if (numberOfPeople >= 4 && numberOfPeople <= 6) {
        groupDiscountLabel = 'Group discount (-10%)';
    } else {
        groupDiscountLabel = 'Standard pricing';
    }

    return {
        basePrice,
        locationModifier,
        subtotalPerPerson,
        groupMultiplier,
        pricePerPerson,
        numberOfPeople,
        totalPrice,
        groupDiscountLabel
    };
};

// Convert MAD to EUR (approximate rate: 1 EUR ≈ 10.5 MAD)
export const convertToEUR = (mad: number): number => {
    return Math.round(mad / 10.5);
};

// Format price with currency
export const formatPrice = (amount: number, currency: 'MAD' | 'EUR'): string => {
    if (currency === 'EUR') {
        return `${convertToEUR(amount)} €`;
    }
    return `${amount} MAD`;
};
