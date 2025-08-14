import ThemeToggle from "./ThemeToggle";
import FontControl from "./FontControl";
import { useTheme } from "../Context/ThemeContext";

export default function Controls() {
  return (
    <div>
      <ThemeToggle/>
      <FontControl/>
    </div>
  );
}