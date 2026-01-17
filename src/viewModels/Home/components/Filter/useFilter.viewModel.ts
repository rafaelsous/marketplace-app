import { useFilterStore } from "@/shared/store/filter-store";
import { useBottomSheetStore } from "@/shared/store/bottomsheet-store";
import { useGetProductCategoriesQuery } from "@/shared/queries/product/use-get-product-categories.query";

export function useFilterViewModel() {
  const { data: productCategories, isLoading } = useGetProductCategoriesQuery();

  const { close } = useBottomSheetStore();
  const { updateFilter, filterState, applyFilters, resetFilters } =
    useFilterStore();

  function handleSearchTextChange(text: string) {
    updateFilter({ key: "searchText", value: text });
  }

  function handleMinValueChange(value: number) {
    updateFilter({ key: "minValue", value });
  }

  function handleMaxValueChange(value: number) {
    updateFilter({ key: "maxValue", value });
  }

  function handleCategoryToggle(selectedCategoryId: number) {
    const categoryIdAlreadyIncluded =
      filterState.selectedCategories.includes(selectedCategoryId);

    categoryIdAlreadyIncluded
      ? updateFilter({
          key: "selectedCategories",
          value: filterState.selectedCategories.filter(
            (categoryId) => categoryId !== selectedCategoryId,
          ),
        })
      : updateFilter({
          key: "selectedCategories",
          value: [...filterState.selectedCategories, selectedCategoryId],
        });
  }

  function handleApplyFilters() {
    applyFilters();
    close();
  }

  function handleResetFilters() {
    close();
    resetFilters();
  }

  return {
    isLoading,
    productCategories,
    selectedCategories: filterState.selectedCategories,
    handleApplyFilters,
    handleResetFilters,
    handleCategoryToggle,
    handleMinValueChange,
    handleMaxValueChange,
    handleSearchTextChange,
  };
}
