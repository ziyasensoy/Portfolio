export type Project = {
  key: string;
  image: string;
  github?: string;
  demo?: string;
};

export const useProjects = () => {
  const projects: Project[] = [
    {
      key: "votevision",
      image: "/projects/votevision_mockup.png",
      github: "https://github.com/ziyasensoy/VoteVision"
    },
    {
      key: "meesterproef",
      image: "/projects/",
    },
    {
      key: "interfaceInteraction",
      image: "/projects/interfaceinteractie_mockup.png",
      demo: "https://editor.rive.app/file/ninja-animation/2202362?linkId=6aPI6rzXB0S5eW7ot8BHTg"
    },
    {
      key: "kleurCompositie",
      image: "/projects/kleurcompositie_mockup.png",
      demo: "https://www.figma.com/proto/aIwnjElmnG9Qrv5LD6pvcq/The-Golden-Roast---Designs?node-id=0-1&t=0cTaUvgtLMiYrhJZ-1"
    },
    {
      key: "typografie",
      image: "/projects/typografie_mockup.png",
      github: "https://github.com/ziyasensoy/neude-type-specimen"
    },
    {
      key: "beeldtaal",
      image: "/projects/beeldtaal_mockup.png",
    },
  ];

  return { projects };
};
