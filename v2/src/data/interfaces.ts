export interface item {
    img: string;
    store: Store;
    item: string;
   favicon: string;
   tags?: string[];
};

// should I make this a type?
export enum Store {
    Amazon = "Amazon",
    Shein = "Shein",
    FashionNova = "FashionNova",
    Dillards = "Dillards",
    FightClub = "FightClub",
    Asos = "Asos"
};

export enum Category {
    Top = "Top",
    Bottom = "Bottom",
    Shoe = "Shoe",
    Dress = "Dress",
    Skirt = "Skirt",
    Short = "Short",
    Jewelry = "Jewelry"
}

export type dropdownPlaceholders = "PRICE" | "STORE" | "COLOR" | "CATEGORY" | "SEASON" | "BRAND";