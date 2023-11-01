import { type Country } from "~/interfaces/country";

export function orderCountries(
  countries: Country[] | undefined,
  orden: string,
) {
  // Asegúrate de manejar casos en los que paises sea nulo o indefinido
  if (!countries || countries.length === 0) {
    return [];
  }

  return countries.sort((a, b) => {
    const comparison = a.name.localeCompare(b.name);

    if (orden === "asc") {
      return comparison;
    } else if (orden === "desc") {
      return -comparison;
    } else {
      return 0;
    }
  });
}
