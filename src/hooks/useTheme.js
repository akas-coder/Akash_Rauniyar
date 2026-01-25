import { useEffect, useState } from "react";

export default function useTheme() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;

    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  const toggleTheme = () => setDark(prev => !prev);

  return { dark, toggleTheme };
}
