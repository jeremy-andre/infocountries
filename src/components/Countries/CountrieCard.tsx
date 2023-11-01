import { type Country } from "~/interfaces/country";
import Link from "next/link";

const CountrieCard = ({ id, image, name, subregion }: Country) => {
  return (
    <Link
      href={`/country/${id}`}
      className="flex flex-col gap-1 rounded-sm p-3 transition hover:scale-105 md:gap-2"
    >
      <img src={image} className=" h-[10rem] md:h-[12.5rem]" alt="CardImagen" />
      <p className="truncate px-1  font-medium text-blackRGB50 transition dark:text-white md:px-2 ">
        {name.toUpperCase()}
      </p>
      <p className="truncate px-1  md:px-2">{subregion}</p>
    </Link>
  );
};

export default CountrieCard;
