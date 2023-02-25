import { Gemstone } from "./gemstone.enum";
import { GemstoneCategory } from "./gemstone_category.enum";

export interface BaseItem {
    material: string;
    color: string;
    name: string;
    category: string;
    tier: string;
    id: string;
}

export interface Item extends BaseItem {
    stoneCategory: GemstoneCategory;
    stoneType: Gemstone;
    buyPrice: number;
    sellPrice: number;
}