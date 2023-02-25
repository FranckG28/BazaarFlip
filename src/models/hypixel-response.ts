import { BaseItem, Item } from "./item";
import { Products } from "./product";

interface HypixelResponse<T> {
    success: boolean;
    lastUpdated: number;
}

export interface ItemResponse extends HypixelResponse<BaseItem[]> {
    items: BaseItem[];
}

export interface BazaarResponse extends HypixelResponse<Products> {
    products: Products;
}
