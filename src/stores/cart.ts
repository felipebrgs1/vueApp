import { defineStore } from 'pinia';
import type { Product } from '../models/Product';
interface CartState{
    items: Product[];
}

export const useCartStore = defineStore('cart', {
    state: (): CartState => ({
        items: []
    }),

    getters: {
        totalPrice(): number {
            return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
    
        cartLength(): number {
            return this.items.length;
        }
    },

    actions: {
        addItem(item: Product) {
            const existingItem = this.items.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                existingItem.quantity += item.quantity;
                if (existingItem.quantity <= 0) {
                    this.removeItem(existingItem); 
                }
            } else if (item.quantity > 0) {
                this.items.push(item);
            }
        }
        ,
        removeItem(item: any) {
            const index = this.items.findIndex(cartItem => cartItem.id === item.id);
            if (index !== -1) {
                this.items.splice(index, 1);
            }
        },
    },
});
