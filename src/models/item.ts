import { Gemstone } from "./gemstone.enum";
import { GemstoneCategory } from "./gemstone_category.enum";

// TODO : Refactor as a class

export interface BaseItem {
    material: string;
    color: string;
    name: string;
    category: string;
    tier: string;
    skin: string;
    id: string;
}

export interface Item extends BaseItem {
    stoneCategory: GemstoneCategory;
    stoneType: Gemstone;
    skinUrl: string
    buyPrice: number;
    sellPrice: number;
}