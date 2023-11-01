import SelectUI from "../ui/Select";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  defaultOption: string;
  onOptionChange: (value: string) => void;
  label?: string | null;
  classname?: string | null;
}
const CountriesOrder = ({
  options,
  defaultOption,
  onOptionChange,
}: CustomSelectProps) => {
  return (
    <div className="flex justify-between gap-2 rounded-md md:hidden">
      <label htmlFor="">Orden:</label>
      <SelectUI
        classname="max-w-[17rem]"
        options={options}
        defaultOption={defaultOption}
        onOptionChange={onOptionChange}
        // label="Orden"
      />
    </div>
  );
};

export default CountriesOrder;
