import { create } from "zustand";

interface FilterState {
  searchText: string | null;
  minValue: number | null;
  maxValue: number | null;
  selectedCategories: number[];
}

interface FilterStoreProps {
  appliedFilterState: FilterState;

  updateFilter: (props: {
    key: keyof FilterState;
    value: string | number | number[];
  }) => void;

  resetFilter: () => void;
}

const defaultFilters: FilterState = {
  searchText: "",
  minValue: null,
  maxValue: null,
  selectedCategories: [],
};

export const filterStore = create<FilterStoreProps>((set) => ({
  appliedFilterState: defaultFilters,

  updateFilter: ({ key, value }) => {
    set((state) => ({
      appliedFilterState: { ...state.appliedFilterState, [key]: value },
    }));
  },

  resetFilter: () =>
    set({
      appliedFilterState: defaultFilters,
    }),
}));
