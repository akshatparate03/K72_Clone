const Video = () => {
  return (
    <div className="lg:h-full h-205 w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        src="/video.mp4"
      ></video>
    </div>
  );
};

export default Video;
