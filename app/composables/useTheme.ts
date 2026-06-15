export const useTheme = () => {
  const theme = useCookie<"light" | "dark">("theme", {
    default: () => "dark",
    watch: true,
    maxAge: 60 * 60 * 24 * 365,
  });

  const icon = computed(() => {
    return theme.value === "dark" ? "uil-sun" : "uil-moon";
  });

  const toggleTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
  };

  return {
    theme,
    icon,
    toggleTheme,
  };
};
