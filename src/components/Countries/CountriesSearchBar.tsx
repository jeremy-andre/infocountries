import { CiSearch } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { addFilterSearch } from "~/redux/reducers/countryReducer";

const CountriesSearchBar = () => {
  const distpatch = useAppDispatch();
  const filterSearch = useAppSelector((state) => state.country.filterSearch);

  const hnadleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    distpatch(addFilterSearch(value));
  };

  return (
    <div className="flex w-full gap-2 md:max-w-[25rem]">
      <input
        value={filterSearch}
        className="w-full rounded-[4px] border-1 border-[rgb(220,220,220)] p-3 transition focus:border-1 focus:border-[rgb(140,140,140)] focus:outline-none dark:border-[rgb(40,40,40)] dark:bg-[rgb(10,10,10)] dark:focus:border-[rgb(100,100,100)] "
        type="text"
        placeholder="Escribe un país..."
        onChange={hnadleOnChangeSearch}
      />
    </div>
  );
};

export default CountriesSearchBar;
