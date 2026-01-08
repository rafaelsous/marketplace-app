import { create } from "zustand";

export interface FilterState {
  searchText: string | null;
  minValue: number | null;
  maxValue: number | null;
  selectedCategories: number[];
}

interface FilterStoreProps {
  appliedFilterState: FilterState;
  filterState: FilterState;

  updateFilter: (props: {
    key: keyof FilterState;
    value: string | number | number[];
  }) => void;

  applyFilters: () => void;
  resetFilters: () => void;
}

const defaultFilters: FilterState = {
  searchText: "",
  minValue: null,
  maxValue: null,
  selectedCategories: [],
};

export const useFilterStore = create<FilterStoreProps>((set) => ({
  appliedFilterState: defaultFilters,
  filterState: defaultFilters,

  updateFilter: ({ key, value }) => {
    set((state) => ({
      filterState: { ...state.filterState, [key]: value },
    }));
  },

  applyFilters: () =>
    set((state) => ({
      appliedFilterState: state.filterState,
    })),

  resetFilters: () =>
    set({
      appliedFilterState: defaultFilters,
      filterState: defaultFilters,
    }),
}));
