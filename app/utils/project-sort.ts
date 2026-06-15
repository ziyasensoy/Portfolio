export const FAVORITE_PROJECT_ORDER = [
  "votevision",
  "meesterproef",
  "typografie",
  "interfaceInteraction",
  "kleurCompositie",
  "beeldtaal",
] as const;

export const NEWEST_PROJECT_ORDER = [
  "meesterproef",
  "interfaceInteraction",
  "beeldtaal",
  "kleurCompositie",
  "typografie",
  "votevision",
] as const;

export const PROJECT_SORT_OPTIONS = [
  { id: "favorites", labelKey: "Projects.sort.favorites" },
  { id: "oldest", labelKey: "Projects.sort.oldest" },
  { id: "newest", labelKey: "Projects.sort.newest" },
] as const;

export type ProjectSortId = (typeof PROJECT_SORT_OPTIONS)[number]["id"];

function sortByKeyOrder<T extends { key: string }>(
  projects: T[],
  order: readonly string[],
): T[] {
  const orderMap = new Map(order.map((key, index) => [key, index]));

  return [...projects].sort(
    (a, b) => (orderMap.get(a.key) ?? 0) - (orderMap.get(b.key) ?? 0),
  );
}

export function sortProjects<T extends { key: string; dateStart: string; dateEnd: string }>(
  projects: T[],
  sort: ProjectSortId,
): T[] {
  if (sort === "favorites") {
    return sortByKeyOrder(projects, FAVORITE_PROJECT_ORDER);
  }

  if (sort === "newest") {
    return sortByKeyOrder(projects, NEWEST_PROJECT_ORDER);
  }

  return [...projects].sort((a, b) =>
    a.dateStart.localeCompare(b.dateStart),
  );
}
