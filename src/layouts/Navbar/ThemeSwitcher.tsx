import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { BsMoonStars, BsSun } from "react-icons/bs";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="h-[2rem] w-[2rem] rounded-full bg-[rgb(230,230,230)] p-2 dark:bg-[rgb(30,30,30)]"
    >
      {theme === "dark" ? <BsMoonStars size="1rem" /> : <BsSun size="1rem" />}
    </motion.button>
  );
};
