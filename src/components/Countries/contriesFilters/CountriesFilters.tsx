import React from "react";
import { useState } from "react";
import CountriesSearchBar from "../CountriesSearchBar";
//====================Icons====================//
import { RxMixerVertical } from "react-icons/rx";
import { IoTrashBinOutline } from "react-icons/io5";
//====================Redux====================//
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import {
  addFilterContinent,
  addFilterRegion,
  addOrderCountries,
  clearFilters,
} from "~/redux/reducers/countryReducer";

import CountriesOrder from "../CountriesOrder";

import { region, Orden, continent } from "./data";
import SelectUI from "~/components/ui/Select";

import { useMediaQuery } from "react-responsive";

const CountriesFilter = () => {
  // redux
  const dispatch = useAppDispatch();
  const filterContinent = useAppSelector(
    (state) => state.country.filterContinent,
  );
  const filterRegion = useAppSelector((state) => state.country.filterRegion);
  const orderCountries = useAppSelector(
    (state) => state.country.orderCountries,
  );
  // show Filters
  const [showFilters, setShowFilters] = useState(false);

  // handlers
  const handleContinentChange = (value: string) => {
    dispatch(addFilterContinent(value));
  };

  const handleRegionChange = (value: string) => {
    dispatch(addFilterRegion(value));
  };

  const handleOrderCountries = (value: string) => {
    dispatch(addOrderCountries(value));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  // responsive
  const isMd = useMediaQuery({ query: "(min-width: 768px)" });

  const options = [
    { value: "asc", label: "A-z" },
    { value: "desc", label: "Z-a" },
  ];

  return (
    <div className="flex w-full flex-col items-center rounded-md px-2">
      <div className="z-10 mb-4 flex w-full items-center justify-between gap-2 bg-white transition dark:bg-blackRGB10">
        <div className="md:w-[20%]">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex h-[3rem] items-center justify-center gap-2 rounded-md bg-[rgb(230,230,230)] p-2 text-[rgb(70,70,70)] transition hover:bg-[rgb(210,210,210)] dark:bg-blackRGB30 dark:text-white dark:hover:bg-[rgb(40,40,40)]"
          >
            <RxMixerVertical />
          </button>
        </div>
        <CountriesSearchBar />
        {/*============Orders============*/}
        <div className="hidden justify-end gap-3 rounded-md md:flex md:w-[20%] ">
          <SelectUI
            options={options}
            defaultOption={orderCountries}
            onOptionChange={handleOrderCountries}
            // label="Orden"
          />
        </div>
      </div>
      <div
        className={`flex w-full gap-2  transition-all ${
          showFilters
            ? "mb-4 max-h-[10rem] md:max-h-[2.5rem] "
            : "pointer-events-none mb-0 max-h-0 -translate-y-[10rem] opacity-0 md:-translate-y-[2.5rem] "
        }`}
      >
        {/*============Filters============*/}
        <div className="flex w-full  flex-col gap-4 px-2 md:flex-row">
          {/*============Region============*/}
          <div className=" flex w-full items-center justify-between gap-2 md:max-w-[22rem] ">
            <label htmlFor="">Region:</label>
            <SelectUI
              classname="max-w-[17rem]"
              options={region}
              defaultOption={filterRegion}
              onOptionChange={handleRegionChange}
              // label="region"
            />
          </div>
          {/*============Continente============*/}
          <div className="flex w-full items-center justify-between gap-2 md:max-w-[22rem]">
            <label htmlFor="">Continente:</label>
            <SelectUI
              classname="max-w-[17rem]"
              options={continent}
              defaultOption={filterContinent}
              onOptionChange={handleContinentChange}
              // label="continente"
            />
          </div>
          {/*============Orders============*/}
          <div className="flex justify-between gap-2 rounded-md md:hidden">
            <label htmlFor="">Orden:</label>
            <SelectUI
              classname="max-w-[17rem]"
              options={options}
              defaultOption={orderCountries}
              onOptionChange={handleOrderCountries}
              // label="Orden"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between px-0">
        <div className="flex flex-1 flex-wrap items-center gap-2">
          <label className="py-1">Filtros: </label>
          {!filterContinent && !filterRegion && (
            <div className="text-lime-600">¡No hay filtros activos!</div>
          )}
          {filterContinent && (
            <div className="rounded-md bg-lime-600 px-3 py-1 text-gray-600 transition">
              {filterContinent}
            </div>
          )}
          {filterRegion && (
            <div className="rounded-md bg-lime-600 px-3 py-1 text-gray-600 transition">
              {filterRegion}
            </div>
          )}
        </div>
        <button
          onClick={handleClearFilters}
          className="flex h-min items-center gap-2 rounded-md border border-[rgb(210,210,210)] p-2 text-center transition hover:bg-[rgb(210,210,210)] dark:border-blackRGB50 hover:dark:bg-blackRGB50 md:w-auto"
        >
          <IoTrashBinOutline className="text-lime-600" />
          Filtros
        </button>
      </div>
    </div>
  );
};

export default CountriesFilter;
