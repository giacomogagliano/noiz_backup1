import React from "react";
import styled, { css } from "styled-components";

const IconContainer = css`
  width: 70px;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const AutoplayVideo = css`
  display: block;
  margin: auto;
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 10px;
  filter: brightness(0.9);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
`;

const AutoplayVideoContainer = css`
  position: relative;
  display: block;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const VideoBoxComponent = styled.div`
  display: grid;
  place-items: center;

  video {
    ${AutoplayVideo}
  }
  img {
    ${IconContainer}
  }
  a {
    ${AutoplayVideoContainer}
  }
`;

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
