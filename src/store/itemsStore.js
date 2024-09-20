import { create } from "zustand";
import { initialItems } from "../lib/constants";
import { persist } from "zustand/middleware";

export const useItemsStore = create(
    persist((set) => ({
        items: initialItems,
        onToggleItem: (id) => {
            set((state) => {
                const newItems = state.items.map((item) => {
                    if (item.id === id) {
                        return { ...item, packed: !item.packed };
                    }
                    return item;
                });

                return { items: newItems };
            })

        },
        onDeleteItem: (id) => {
            set((state) => {
                const newItems = state.items.filter((item) => item.id !== id);
                return { items: newItems };
            })

        },
        onAddItem: (itemText) => {
            const newItem = {
                id: new Date().getTime(),
                name: itemText,
                packed: false,
            };
            set((state) => {
                return { items: [...state.items, newItem] };
            })
        },
        onMarkAllComplete: () => {
            set((state) => {

                const newItems = state.items.map((item) => {
                    return { ...item, packed: true };
                });

                return { items: newItems };
            })
        },
        onMarkAllInComplete: () => {
            set((state) => {
                const newItems = state.items.map((item) => {
                    return { ...item, packed: false };
                });
                return { items: newItems };
            })

        },
        onResetToInitial: () => {
            set(() => ({ items: initialItems }));

        },
        onRemoveAllitem: () => {
            set(() => ({ items: [] }));
        }
    }), {
        name: "items"
    }));