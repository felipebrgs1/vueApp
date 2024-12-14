import { defineStore } from 'pinia';
import type { Product } from '../models/Product';

interface CartState {
    items: Product[];
}

export const useCartStore = defineStore('cart', {
    state: (): CartState => ({
        // Inicializa o estado a partir do localStorage
        items: JSON.parse(localStorage.getItem('cartItems') || '[]') as Product[],
    }),

    getters: {
        totalPrice(): number {
            return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        cartLength(): number {
            return this.items.length;
        },
    },

    actions: {
        // Adicionar item ao carrinho
        addItem(item: Product) {
            const existingItem = this.items.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else if (item.quantity > 0) {
                this.items.push(item);
            }
            this.saveToLocalStorage(); // Salva os itens no localStorage
        },

        // Remover item do carrinho
        removeItem(item: Product) {
            const index = this.items.findIndex((cartItem) => cartItem.id === item.id);
            if (index !== -1) {
                const removedItem = this.items[index];
                this.items.splice(index, 1);
                removedItem.quantity = 1; // Reseta a quantidade ao remover
            }
            this.saveToLocalStorage(); // Atualiza o localStorage
        },

        // Limpar o carrinho
        clearCart() {
            this.items = [];
            this.saveToLocalStorage(); // Atualiza o localStorage
        },

        // Método para salvar os itens no localStorage
        saveToLocalStorage() {
            localStorage.setItem('cartItems', JSON.stringify(this.items));
        },
    },
});
