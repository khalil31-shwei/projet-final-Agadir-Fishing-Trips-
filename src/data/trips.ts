export interface Trip {
    id: string;
    title: string;
    activity: 'Rod Fishing' | 'Spearfishing';
    region: string;
    location: string;
    duration: 'Full Day' | 'Half Day';
    maxPeople: number;
    priceMAD: number;
    priceEUR: number;
    image: string;
    description: string;
    included: string[];
    schedule: string[];
}

export const tripsData: Trip[] = [
    // Rod Fishing - Agadir City
    {
        id: 'rod-agadir-half',
        title: 'Coastal Casting Agadir',
        activity: 'Rod Fishing',
        region: 'Agadir City',
        location: 'Agadir Beach / Corniche',
        duration: 'Half Day',
        maxPeople: 6,
        priceMAD: 500,
        priceEUR: 50,
        image: '/rod_sunset.jpg',
        description: 'Perfect for beginners and families. Enjoy a relaxing morning casting from the iconic Agadir promenade.',
        included: ['Rods & Reels', 'Bait', 'Refreshments', 'Guide'],
        schedule: ['08:00 AM Meeting', '08:30 AM Setup', '09:00 AM Fishing', '12:00 PM Return']
    },
    {
        id: 'rod-anza-full',
        title: 'Anza Surfcasting Pro',
        activity: 'Rod Fishing',
        region: 'Agadir City',
        location: 'Anza Beach',
        duration: 'Full Day',
        maxPeople: 4,
        priceMAD: 1200,
        priceEUR: 120,
        image: '/blue_boats.jpg',
        description: 'Target sea bass and bream in the rich waters of Anza. A full day of professional surfcasting.',
        included: ['Pro Gear', 'Live Bait', 'Lunch Box', 'Transport', 'Guide'],
        schedule: ['07:00 AM Pickup', '08:00 AM First Cast', '13:00 PM Lunch', '17:00 PM Return']
    },

    // Rod Fishing - South
    {
        id: 'rod-tifnit-full',
        title: 'Tifnit Wild Fishing',
        activity: 'Rod Fishing',
        region: 'South of Agadir – Chtouka Ait Baha',
        location: 'Tifnit',
        duration: 'Full Day',
        maxPeople: 4,
        priceMAD: 1500,
        priceEUR: 150,
        image: '/agadir_kasbah.jpg',
        description: 'Experience the wild coast of Tifnit. Traditional fishing vibes in a stunning, secluded location.',
        included: ['4x4 Transport', 'Premium Tackle', 'Grilled Fish Lunch', 'Tea Ceremony'],
        schedule: ['06:30 AM Pickup', '08:00 AM Arrival Tifnit', 'Full Day Fishing', '18:00 PM Return']
    },

    // Rod Fishing - North
    {
        id: 'rod-taghazout-half',
        title: 'Taghazout Rock Fishing',
        activity: 'Rod Fishing',
        region: 'Imsouane – Taghazout',
        location: 'Taghazout',
        duration: 'Half Day',
        maxPeople: 5,
        priceMAD: 600,
        priceEUR: 60,
        image: '/rod_sunset.jpg',
        description: 'Combine surf vibes with rock fishing. Catch bream right off the famous surf points.',
        included: ['Light Tackle', 'Bait', 'Snacks'],
        schedule: ['15:00 PM Meeting', '15:30 PM Setup', 'Sunset Fishing', '19:00 PM End']
    },

    // Spearfishing
    {
        id: 'spear-mirleft-full',
        title: 'Mirleft Underwater Hunter',
        activity: 'Spearfishing',
        region: 'Sidi Ifni – Mirleft',
        location: 'Mirleft',
        duration: 'Full Day',
        maxPeople: 3,
        priceMAD: 2000,
        priceEUR: 200,
        image: '/legzira.jpg',
        description: 'Crystal clear waters and rocky reefs. The ultimate spearfishing challenge for experienced divers.',
        included: ['Spearguns', 'Wetsuits', 'Buoys', 'Safety Boat', 'Lunch'],
        schedule: ['07:00 AM Pickup', '09:00 AM Dive Briefing', '09:30 AM First Dive', '13:00 PM Lunch', '16:00 PM Return']
    },
    {
        id: 'spear-imsouane-full',
        title: 'Imsouane Reef Dive',
        activity: 'Spearfishing',
        region: 'Imsouane – Taghazout',
        location: 'Imsouane',
        duration: 'Full Day',
        maxPeople: 3,
        priceMAD: 1800,
        priceEUR: 180,
        image: '/blue_boats.jpg',
        description: 'Explore the bay of Imsouane from below. Rich marine life and manageable depths.',
        included: ['Equipment', 'Guide', 'Transport from Agadir', 'BBQ Lunch'],
        schedule: ['07:00 AM Pickup', '09:00 AM Arrival', '10:00 AM Dive Session', '14:00 PM BBQ']
    }
];
