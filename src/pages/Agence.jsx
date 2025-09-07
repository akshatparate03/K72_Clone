import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "/Carl_480x640-480x640.jpg",
    "/Olivier_480x640-480x640.jpg",
    "/Lawrence_480x640-480x640.jpg",
    "/HugoJoseph_480x640-480x640.jpg",
    "/ChantalG_480x640-480x640.jpg",
    "/MyleneS_480x640-480x640.jpg",
    "/SophieA_480x640-480x640.jpg",
    "/Claire_480x640-480x640.jpg",
    "/Michele_480X640-480x640.jpg",
    "/MEL_480X640-480x640.jpg",
    "/CAMILLE_480X640_2-480x640.jpg",
    "/MAXIME_480X640_2-480x640.jpg",
    "/MEGGIE_480X640_2-480x640.jpg",
    "/joel_480X640_3-480x640.jpg",
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: "top 25.2%",
        end: "top -120%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  return (
    <div className="parent">
      <div id="page1" className="py-1">
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden lg:h-[20vw] h-[40vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[35vw] lg:top-96 -top-20 lg:left-[30vw] left-[30vw]"
        >
          <img
            ref={imageRef}
            className="h-full object-cover w-full"
            src="/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>
        <div className="relative font-[font2]">
          <div className="lg:mt-[55vh] mt-[15vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="lg:pl-[40%] lg:mt-20 mt-55 p-3">
            <p className="lg:text-5xl text-xl leading-tight">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agence;
