export function publicPath(path: string) {
  const baseURL = useRuntimeConfig().app.baseURL;

  if (baseURL === "/") {
    return path;
  }

  return `${baseURL.replace(/\/$/, "")}${path}`;
}
