
import { PrismaClient } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient();

async function saveCountriesToDatabase() {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  const countriesData = response.data;

  for (const countryData of countriesData) {
    await prisma.country.create({
      data: {
        id: countryData.cca3,
        name: countryData.name.common,
        image: countryData.flags.svg,
        continent: countryData.region,
        capital: countryData.capital
          ? countryData.capital[0]
          : "Does not exist",
        subregion: countryData.subregion
          ? countryData.subregion
          : "Does not exist",
        area: countryData.area ? countryData.area : 0,
        population: countryData.population ? countryData.population : 0,
      },
    });
  }
}

// Llama a la función para guardar los países en la base de datos
saveCountriesToDatabase()
  .catch((error) => {
    console.error("Error al guardar países en la base de datos:", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
