import React, { createContext, useState, useContext, ReactNode } from "react";

// Kiểu dữ liệu của ThemeContext
interface ThemeContextType {
  theme: string; // "light" hoặc "dark"
  toggleTheme: () => void; // Hàm để chuyển đổi theme
}

// Khởi tạo giá trị mặc định cho context
const defaultContextValue: ThemeContextType = {
  theme: "light", // Giá trị mặc định là light
  toggleTheme: () => {}, // Hàm này sẽ được cập nhật sau
};

// Tạo context với giá trị mặc định
const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

// Tạo Provider để cung cấp giá trị context
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  // Hàm để chuyển đổi theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook để sử dụng theme context trong các component
export const useTheme = () => useContext(ThemeContext);
