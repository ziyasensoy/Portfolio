export type Project = {
  key: string;
  image: string;
};

export const useProjects = () => {
  const projects: Project[] = [
    {
      key: "votevision",
      image: "/projects/votevision_mockup.png",
    },
    {
      key: "meesterproef",
      image: "/projects/",
    },
    {
      key: "interfaceInteraction",
      image: "/projects/interfaceinteractie_mockup.png",
    },
    {
      key: "kleurCompositie",
      image: "/projects/kleurcompositie_mockup.png",
    },
    {
      key: "typografie",
      image: "/projects/typografie_mockup.png",
    },
    {
      key: "beeldtaal",
      image: "/projects/beeldtaal_mockup.png",
    },
  ];

  return { projects };
};
