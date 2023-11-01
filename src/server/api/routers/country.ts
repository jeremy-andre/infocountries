import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const inputSchema = z.object({
  subregion: z.string().optional(),
  continent: z.string().optional(),
  name: z.string().optional(),
  // Otros campos si es necesario
});

interface NameFilter {
  [key: string]: string;
}

interface CountryFilter {
  subregion?: string;
  continent?: string;
  name?: NameFilter;
};

export const countryRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    const countries = ctx.db.country.findMany();
    return countries;
  }),
  getCountryDetail: publicProcedure
    .input(z.string())
    .query(({ ctx, input }) => {
      const countryDetail = ctx.db.country.findUnique({
        where: {
          id: input,
        },
      });

      return countryDetail;
    }),
  getCountries: publicProcedure.input(inputSchema).query(({ ctx, input }) => {
    // Aplicar los filtros en la consulta
    const where: CountryFilter = {};

    if (input.subregion) {
      where.subregion = input.subregion;
    }

    if (input.continent) {
      where.continent = input.continent;
    }

    if (input.name) {
      where.name = {
        contains: input.name,
      };
    }

    const countries = ctx.db.country.findMany({
      where,
    });

    return countries;
  }),
});
