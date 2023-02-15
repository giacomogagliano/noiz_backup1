import React from "react";
import { VideoBoxComponent } from "./StylesSheet";

interface VideoBoxElement {
  src: string;
}
export const VideoBox = ({
  href,
  icon,
  video,
}: {
  href: string;
  icon: VideoBoxElement;
  video: VideoBoxElement;
}) => {
  const target = "_blank";
  const type = "video/mp4";
  return (
    <VideoBoxComponent>
      <a href={href} target={target}>
        <img src={icon.src}></img>
        <video autoPlay loop muted>
          <source src={video.src} type={type} />
        </video>
      </a>
    </VideoBoxComponent>
  );
};
