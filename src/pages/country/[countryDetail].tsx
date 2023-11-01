import { useRouter } from "next/router";
import { api } from "~/utils/api";
import Layout from "~/layouts/layout";
import { CircularProgress } from "@nextui-org/react";
import { RiArrowGoBackLine } from "react-icons/ri";
import Link from "next/link";

export default function countryDetail() {
  const router = useRouter();
  const countryDetail = router.query.countryDetail?.toString() ?? "";

  const { data: country, isFetched } =
    api.country.getCountryDetail.useQuery(countryDetail);

  console.log(isFetched);

  if (!isFetched) {
    return (
      <Layout>
        <CircularProgress color="default" className="flex items-center" />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mt-[6rem] flex w-full max-w-[125rem] flex-col items-center justify-center gap-[5rem] p-4 md:mt-0 md:flex-row ">
        <Link href={`/`} className="absolute left-2 top-0 mt-[4rem] bg-lime-500 p-2 rounded-md">
          <RiArrowGoBackLine className="text-black"/>
        </Link>
        <img src={country?.image} className="w-full max-w-[35rem] " />
        <div className="flex w-full max-w-[25rem] flex-col gap-6 bg-white transition dark:bg-blackRGB10">
          <div className="bg-white transition dark:bg-blackRGB10">
            <h1 className=" text-center text-[3rem] ">{country?.name}</h1>
            <h1 className=" text-center text-[1rem] text-gray-500">
              {country?.capital}
            </h1>
          </div>
          <div className="flex justify-between">
            <label className="text-gray-500">Población</label>
            <p>{country?.population} </p>
          </div>
          <div className="flex justify-between">
            <label className="text-gray-500">Área</label>
            <p>{country?.area} km2 </p>
          </div>
          <div className="flex justify-between">
            <label className="text-gray-500">Continente</label>
            <p>{country?.continent}</p>
          </div>
          <div className="flex justify-between">
            <label className="text-gray-500">Región</label>
            <p>{country?.subregion}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
