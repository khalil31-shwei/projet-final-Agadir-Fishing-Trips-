export interface Region {
    name: string;
    locations: string[];
}

export const regions: Region[] = [
    {
        name: "Imsouane – Taghazout",
        locations: ["Imsouane", "Taghazout", "Imourane", "Ourir", "Tamri"]
    },
    {
        name: "Agadir City",
        locations: ["Anza", "Anza Beach", "Agadir Beach / Corniche"]
    },
    {
        name: "South of Agadir – Chtouka Ait Baha",
        locations: ["Tifnit", "Sidi Toual", "Sidi Wassay", "Aglou", "Massa (outside protected areas)", "Sidi Rbat (outside the park)"]
    },
    {
        name: "Sidi Ifni – Mirleft",
        locations: ["Sidi Ifni Beach", "Legzira", "Mirleft"]
    }
];
