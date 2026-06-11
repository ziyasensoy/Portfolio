import InterfaceInteractionProject from "~/components/projects/projectDetails/InterfaceInteractionProject.vue";
import MeesterproefProject from "~/components/projects/projectDetails/MeesterproefProject.vue";
import VoteVisionProject from "~/components/projects/projectDetails/VoteVisionProject.vue";
import KleurCompositieProject from "~/components/projects/projectDetails/KleurCompositieProject.vue";
import TypografieProject from "~/components/projects/projectDetails/TypografieProject.vue";
import BeeldtaalProject from "~/components/projects/projectDetails/BeeldtaalProject.vue";

export type Project = {
  key: string;
  thumbnail: string;
  component: Component;
  github?: string;
  demo?: string;
};


export const useProjects = () => {
  const projects: Project[] = [
    {
      key: "votevision",
      thumbnail: "/projects/thumbnails/votevision_thumbnail.jpeg",
      github: "https://github.com/ziyasensoy/VoteVision",
      component: VoteVisionProject,
    },
    {
      key: "meesterproef",
      thumbnail: "/projects/thumbnails/meesterproef_thumbnail.jpeg",
      component: MeesterproefProject,
    },
    {
      key: "typografie",
      thumbnail: "/projects/thumbnails/typografie_thumbnail.jpeg",
      github: "https://github.com/ziyasensoy/neude-type-specimen",
      component: TypografieProject,
    },
    {
      key: "interfaceInteraction",
      thumbnail: "/projects/thumbnails/interfaceinteractie_thumbnail.jpeg",
      demo: "https://editor.rive.app/file/ninja-animation/2202362?linkId=6aPI6rzXB0S5eW7ot8BHTg",
      component: InterfaceInteractionProject,
    },
    {
      key: "kleurCompositie",
      thumbnail: "/projects/thumbnails/kleurcompositie_thumbnail.jpeg",
      demo: "https://www.figma.com/proto/aIwnjElmnG9Qrv5LD6pvcq/The-Golden-Roast---Designs?node-id=0-1&t=0cTaUvgtLMiYrhJZ-1",
      component: KleurCompositieProject,
    },
    {
      key: "beeldtaal",
      thumbnail: "/projects/thumbnails/beeldtaal_thumbnail.jpeg",
      component: BeeldtaalProject,
    },
  ];

  return { projects };
};
