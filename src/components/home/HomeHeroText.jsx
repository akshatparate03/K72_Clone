import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1]  mt-82 lg:mt-0 pt-5 text-center">
      <div className="lg:text-[9.5vw] text-[14vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[12vw]">
        L'étincelle
      </div>
      <div className="lg:text-[9.5vw] text-[14vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[12vw]">
        qui
        <div className="h-[7vw] w-[16vw] rounded-full overflow-hidden ">
          <Video />
        </div>
        génère
      </div>
      <div className="lg:text-[9.5vw] text-[14vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[12vw]">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
