export default defineNuxtPlugin(() => {
  const theme = useCookie<"light" | "dark">("theme", {
    default: () => "dark",
    watch: true,
    maxAge: 60 * 60 * 24 * 365,
  });

  const legacyTheme = localStorage.getItem("theme");

  if (legacyTheme === "light" || legacyTheme === "dark") {
    theme.value = legacyTheme;
    localStorage.removeItem("theme");
  }
});
