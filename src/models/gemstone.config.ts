import { GemstoneCategory } from "./gemstone_category.enum";

export interface GemstoneConfig {
    quantityToPerfect: number;
}

export const GEMSTONE_CONFIG: {
    [category in GemstoneCategory]: GemstoneConfig;
} = {
    [GemstoneCategory.ROUGH]: {
        quantityToPerfect: 2560000,
    },
    [GemstoneCategory.FLAWED]: {
        quantityToPerfect: 32000,
    },
    [GemstoneCategory.FINE]: {
        quantityToPerfect: 400,
    },
    [GemstoneCategory.FLAWLESS]: {
        quantityToPerfect: 5,
    },
    [GemstoneCategory.PERFECT]: {
        quantityToPerfect: 1,
    },
}