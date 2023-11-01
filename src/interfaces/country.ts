export interface Country {
  area: number;
  capital: string;
  continent: string;
  id: string;
  image: string;
  name: string;
  population: number;
  subregion: string;
}

export interface Filters {
  filterRegion: string;
  filterContinent: string;
  // Otros filtros que puedas tener
}

export interface CountryState {
  countries: Country[]; // Asegúrate de que el tipo Country esté definido en tus interfaces
  filters: Filters;
  orderLetter: string;
  startPage: number;
  endPage: number;
}
