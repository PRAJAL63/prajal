import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextValue {
  isDark: boolean;
  toggle: () => void;
  setTheme: (theme: "dark" | "light") => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  isDark: true,
  toggle: () => {},
  setTheme: () => {},
});

const applyTheme = (dark: boolean) => {
  if (dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const dark = saved !== null ? saved === "dark" : true;
    setIsDark(dark);
    applyTheme(dark);
  }, []);

  const toggle = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      applyTheme(next);
      return next;
    });
  };

  const setTheme = (theme: "dark" | "light") => {
    const dark = theme === "dark";
    setIsDark(dark);
    localStorage.setItem("theme", theme);
    applyTheme(dark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggle, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
