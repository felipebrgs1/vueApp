import { defineStore } from "pinia";
import { ref } from "vue";
import { faker } from "@faker-js/faker";
import type { Product } from "../models/Product";

export const useProductStore = defineStore("product", {
	state: () => ({
		products: ref<Product[]>([]),
	}),

	actions: {
		fetchProducts() {
			// Simulação de dados
			this.products = Array.from({ length: 10 }, () => ({
				id: faker.string.uuid(),
				title: faker.commerce.productName(),
				imageUrl: faker.image.url(),
				price: Number.parseFloat(faker.commerce.price()),
				quantity: 1,
				description: faker.commerce.productDescription(),
				buttonText: "Add to Cart",
			}));
		},
	},

	getters: {
		allProducts: (state) => state.products,
	},
});
