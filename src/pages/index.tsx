import Layout from "~/layouts/layout";
import { api } from "~/utils/api";
import { useState, useEffect } from "react";

import { orderCountries } from "~/utils/orderCountries";
import {
  CountriesCardContainer,
  CountriesFilter,
  CountriesPagination,
} from "~/components";
import { useAppSelector } from "~/redux/hooks";

export default function Home() {
  const filterSearch = useAppSelector((state) => state.country.filterSearch);
  const filterRegion = useAppSelector((state) => state.country.filterRegion);
  const filterContinent = useAppSelector(
    (state) => state.country.filterContinent,
  );
  const orderCountry = useAppSelector((state) => state.country.orderCountries);

  const { data: countries, isFetched } = api.country.getCountries.useQuery({
    subregion: filterRegion, // Pasar el valor de filterRegion
    continent: filterContinent, // Pasar el valor de filterContinent
    name: filterSearch,
  });

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 24;

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Order Items
  const sortedData = orderCountries(countries, orderCountry);

  // Get the current page's data
  const currentData = sortedData?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana al principio de la página cuando se carga la aplicación
  }, [currentData]);

  return (
    <Layout>
      <div className="flex w-full max-w-[125rem] flex-col items-center  gap-4 rounded-lg pt-[3.5rem] ">
        <CountriesFilter />
        <CountriesCardContainer
          data={currentData ?? []}
          isFetched={isFetched}
        />
        <CountriesPagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={countries?.length ?? 0}
          onPageChange={handlePageChange}
        />
      </div>
    </Layout>
  );
}
