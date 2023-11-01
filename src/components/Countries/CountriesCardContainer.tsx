import CountrieCard from "./CountrieCard";
import { type Country } from "~/interfaces/country";
import { CircularProgress } from "@nextui-org/react";

interface Props {
  data: Country[];
  isFetched: boolean;
}

const CountriesCardContainer = ({ data, isFetched }: Props) => {
  // Loading
  if (!isFetched) {
    return (
      <div className="flex h-[10rem] items-center">
        <CircularProgress
          aria-label="Cargando"
          className="flex items-center"
          classNames={{ indicator: "stroke-[rgb(118,196,87)]" }}
        />
      </div>
    );
  }

  // data null
  if (!data.length) {
    return (
      <div className="flex h-[10rem] items-center">
        ¡No se encontraron países que coincidan con tu búsqueda!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2 overflow-hidden rounded-md md:grid-cols-3 xl:grid-cols-4 ">
      {data.map((country) => (
        <CountrieCard key={country.id} {...country} />
      ))}
    </div>
  );
};

export default CountriesCardContainer;
