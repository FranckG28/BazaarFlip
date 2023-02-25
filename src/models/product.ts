export interface Products {
    [productId: string]: Product;
}

export interface Product {
    product_id: string;
    quick_status: {
        buyPrice: number;
        sellPrice: number;
    };
}