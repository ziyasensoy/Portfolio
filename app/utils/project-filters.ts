export const PROJECT_FILTERS = [
  { id: "all", labelKey: "Projects.filters.all" },
  { id: "code", labelKey: "Projects.filters.code" },
  { id: "design", labelKey: "Projects.filters.design" },
  { id: "hbo-ict", labelKey: "Projects.filters.hboIct" },
  {
    id: "minor-vid",
    labelKey: "Projects.filters.minorVisualInterfaceDesign",
  },
] as const;

export type ProjectFilterId = Exclude<
  (typeof PROJECT_FILTERS)[number]["id"],
  "all"
>;
