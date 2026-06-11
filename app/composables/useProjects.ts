import InterfaceInteractionProject from "~/components/projects/projectDetails/InterfaceInteractionProject.vue";
import MeesterproefProject from "~/components/projects/projectDetails/MeesterproefProject.vue";
import VoteVisionProject from "~/components/projects/projectDetails/VoteVisionProject.vue";
import KleurCompositieProject from "~/components/projects/projectDetails/KleurCompositieProject.vue";
import TypografieProject from "~/components/projects/projectDetails/TypografieProject.vue";
import BeeldtaalProject from "~/components/projects/projectDetails/BeeldtaalProject.vue";

export type Project = {
  key: string;
  image: string;
  component?: Component;
  github?: string;
  demo?: string;
};


export const useProjects = () => {
  const projects: Project[] = [
    {
      key: "votevision",
      image: "/projects/votevision_mockup.png",
      github: "https://github.com/ziyasensoy/VoteVision",
      component: VoteVisionProject,
    },
    {
      key: "meesterproef",
      image: "/projects/",
      component: MeesterproefProject,
    },
    {
      key: "interfaceInteraction",
      image: "/projects/interfaceinteractie_mockup.png",
      demo: "https://editor.rive.app/file/ninja-animation/2202362?linkId=6aPI6rzXB0S5eW7ot8BHTg",
      component: InterfaceInteractionProject,
    },
    {
      key: "kleurCompositie",
      image: "/projects/kleurcompositie_mockup.png",
      demo: "https://www.figma.com/proto/aIwnjElmnG9Qrv5LD6pvcq/The-Golden-Roast---Designs?node-id=0-1&t=0cTaUvgtLMiYrhJZ-1",
      component: KleurCompositieProject,
    },
    {
      key: "typografie",
      image: "/projects/typografie_mockup.png",
      github: "https://github.com/ziyasensoy/neude-type-specimen",
      component: TypografieProject,
    },
    {
      key: "beeldtaal",
      image: "/projects/beeldtaal_mockup.png",
      component: BeeldtaalProject,
    },
  ];

  return { projects };
};
