import { FilterView } from "./Filter.view";
import { useFilterViewModel } from "./useFilter.viewModel";

export function Filter({}: Readonly<ReturnType<typeof useFilterViewModel>>) {
  const props = useFilterViewModel();

  return <FilterView {...props} />;
}
