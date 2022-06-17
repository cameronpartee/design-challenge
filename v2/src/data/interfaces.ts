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
};
