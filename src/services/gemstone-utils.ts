import { Gemstone } from "@/models/gemstone.enum";
import { GemstoneCategory } from "@/models/gemstone_category.enum";
import { Item } from "@/models/item";

export class GemstoneUtils {

    static gemstoneCategoryOrder: GemstoneCategory[] = [
        GemstoneCategory.ROUGH,
        GemstoneCategory.FLAWED,
        GemstoneCategory.FINE,
        GemstoneCategory.FLAWLESS,
        GemstoneCategory.PERFECT,
    ]

    static getGemstoneType(name: string): Gemstone {
        for (const gemstone of Object.values(Gemstone)) {
            if (name.includes(gemstone)) {
                return gemstone;
            }
        }
        throw new Error(`Gemstone not found for ${name}`);
    }

    static getGemstoneCategory(name: string): GemstoneCategory {
        for (const category of Object.values(GemstoneCategory)) {
            if (name.includes(category)) {
                return category;
            }
        }
        throw new Error(`Gemstone category not found for ${name}`);
    }

    static sortByCategory(a: Item, b: Item): number {
        if (a.stoneCategory === b.stoneCategory) {
            return 0;
        }
        return (GemstoneUtils.gemstoneCategoryOrder.indexOf(a.stoneCategory) < GemstoneUtils.gemstoneCategoryOrder.indexOf(b.stoneCategory)) ? -1 : 1;
    }

}