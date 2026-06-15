import InterfaceInteractionProject from "~/components/projects/projectDetails/InterfaceInteractionProject.vue";
import MeesterproefProject from "~/components/projects/projectDetails/MeesterproefProject.vue";
import VoteVisionProject from "~/components/projects/projectDetails/VoteVisionProject.vue";
import KleurCompositieProject from "~/components/projects/projectDetails/KleurCompositieProject.vue";
import TypografieProject from "~/components/projects/projectDetails/TypografieProject.vue";
import BeeldtaalProject from "~/components/projects/projectDetails/BeeldtaalProject.vue";
import type { ProjectFilterId } from "~/utils/project-filters";

export type Project = {
  key: string;
  thumbnail: string;
  component: Component;
  filters: ProjectFilterId[];
  github?: string;
  demo?: string;
};


export const useProjects = () => {
  const projects: Project[] = [
    {
      key: "votevision",
      thumbnail: publicPath("/projects/thumbnails/votevision_thumbnail.jpeg"),
      github: "https://github.com/ziyasensoy/VoteVision",
      component: VoteVisionProject,
      filters: ["hbo-ict", "code"],
    },
    {
      key: "meesterproef",
      thumbnail: publicPath("/projects/thumbnails/meesterproef_thumbnail.jpeg"),
      github: "https://github.com/ziyasensoy/Meesterproef",
      demo: "https://ziyasensoy.github.io/Meesterproef/",
      component: MeesterproefProject,
      filters: ["minor-vid", "code"],
    },
    {
      key: "typografie",
      thumbnail: publicPath("/projects/thumbnails/typografie_thumbnail.jpeg"),
      github: "https://github.com/ziyasensoy/neude-type-specimen/",
      demo: "https://ziyasensoy.github.io/neude-type-specimen/",
      component: TypografieProject,
      filters: ["minor-vid", "code"],
    },
    {
      key: "interfaceInteraction",
      thumbnail: publicPath("/projects/thumbnails/interfaceinteractie_thumbnail.jpeg"),
      github: "https://editor.rive.app/file/ninja-animation/2202362?linkId=6aPI6rzXB0S5eW7ot8BHTg",
      demo: publicPath(
        "/projects/interfaceinteractie/Eindproduct_Ziya_Sensoy.mp4",
      ),
      component: InterfaceInteractionProject,
      filters: ["minor-vid"],
    },
    {
      key: "kleurCompositie",
      thumbnail: publicPath("/projects/thumbnails/kleurcompositie_thumbnail.jpeg"),
      demo: "https://www.figma.com/proto/aIwnjElmnG9Qrv5LD6pvcq/The-Golden-Roast---Designs?node-id=0-1&t=0cTaUvgtLMiYrhJZ-1",
      component: KleurCompositieProject,
      filters: ["design", "minor-vid"],
    },
    {
      key: "beeldtaal",
      thumbnail: publicPath("/projects/thumbnails/beeldtaal_thumbnail.jpeg"),
      component: BeeldtaalProject,
      filters: ["design", "minor-vid"],
    },
  ];

  return { projects };
};
