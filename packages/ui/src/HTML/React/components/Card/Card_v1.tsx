import { RefObject } from "react";
import { Icon, Image } from "../../classes";
import {
  StyledHead,
  StyledInfos,
  StyledSocial,
} from "./Card.style";

export const Card_v1 = (
  className: string,
  container: RefObject<HTMLDivElement>,
  bid_link: string,
  id: string,
  item_id: string,
  likeCounts: string,
  title: string,
  price: string,
  src: string
) => {
  return (
    <div className={className} ref={container}>
      <div id="card">
        <StyledHead>
          <div className={className} id="card-head">
            <div id="circle" />
            <div></div>
            <button id="menu">
              <Icon more_normal />
            </button>
          </div>
        </StyledHead>
        <Image src={src} />
        <StyledInfos
          bid_link={bid_link}
          id={item_id}
          likeCounts={likeCounts}
          price={price}
          title={title}
        >
          <div className={className}>
            <div id="line1">
              <div id="title">
                <p>{title}</p>
              </div>
            </div>
            <div id="line2">
              <div id="floor-price">
                <p>
                  From {price} Eth {id}
                </p>
              </div>
              <div id="place-bid">
                <a href={bid_link}>
                  <p>Place a bid</p>
                </a>
              </div>
            </div>
          </div>
        </StyledInfos>
        <StyledSocial>
          {" "}
          <div id="social">
            <button>
              <Icon logoZion />
            </button>
            <button>
              <Icon logoZion />
            </button>
            <button>
              <Icon logoZion />
            </button>
            <div></div>
            <button id="last">
              <div id="svg">
                <Icon like />
              </div>
            </button>
          </div>
        </StyledSocial>
      </div>
    </div>
  );
};
