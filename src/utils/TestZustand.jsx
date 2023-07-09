import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useBearStore = create(
	persist(
		(set, get) => ({
			bears: 0,
			setBears: (number) =>
				set((state) => ({
					bears: state.bears + number,
				})),
			removeAllBears: () =>
				set({ bears: 0 }),
			print: () =>
				console.log(get().bears),
		}),
		{ name: "bear-storage" },
	),
);
