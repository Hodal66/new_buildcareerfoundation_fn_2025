const isDev = import.meta.env.DEV;

export const API_URL = import.meta.env.VITE_API_URL || (isDev ? "http://localhost:4300/" : "https://new-buildcareerfoundation-bn-2025.onrender.com/");
