import { useGSAP } from "@gsap/react";
import ProjectCard from "../components/projects/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  const projects = [
    {
      image1:
        "/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "/OKA_thumbnail-1280x960.jpg",
      image2:
        "/opto_thumbnail2-1280x960.jpg",
    },
    {
      image1:
        "/CF_thumbnail-1280x960.jpg",
      image2:
        "/thumbnailimage_shelton-1280x960.jpg",
    },
    {
      image1:
        "/BEST_site_menu_Thumbnail-1280x960.jpg",
      image2:
        "/thumbnailimage_atable2-1280x960.jpg",
    },
    {
      image1:
        "/thumbnailimage_SollioAg-1280x960.jpg",
      image2:
        "/chalaxeur-thumbnail_img-1280x960.jpg",
    },
    {
      image1:
        "/thumbnail_OSM_1280-1280x960.jpg",
      image2:
        "/100temps_Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "/crisis24_behance_1920X1200_cartes-1280x960.jpg",
      image2:
        "/thumbnailimage_opto-1280x960.jpg",
    },
    {
      image1:
        "/PME-MTL_Thumbnail-1280x960.jpg",
      image2:
        "/Fruite_thumbnail_bbq-1280x960.jpg",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".hero", {
      height: "100px",
      stagger: {
        amount: 0.2,
      },
      scrollTrigger: {
        trigger: ".lol",
        start: "top 100%",
        end: "top -150%",
        scrub: true,
      },
    });
  });

  return (
    <div className="lg:p-4 p-2">
      <div className=" pt-[45vh]">
        <h2 className="font-[font2] lg:text-[9.5vw] text-7xl uppercase">
          Projets
        </h2>
      </div>
      <div className="-lg:mt-20 lol">
        {projects.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2"
            >
              <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
