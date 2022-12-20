// @ts-nocheck
import { Dispatch, SetStateAction, useState } from "react";
import styled, { css } from "styled-components";
import { Badge } from "../../Badge";
import { Card } from "../../Card";
import { Icon } from "../../Icon";
import { Image } from "../../Image";
import { ItemsArea } from "../../ItemsArea";
import { NavBar } from "../../NavBar";
// TODO @giacomogagliano mettere apposto

/////// TYPES
export type Profile_v1Data = {
  tracks: number;
  followers: number;
  following: number;
  description: string;
  isShowMore: boolean;
  setIsShowMore: Dispatch<SetStateAction<boolean>>;
};

export type Profile_v1Booleans = { small?: boolean };

export type Profile_v1Props = NoizProps<
  Profile_v1Data & Profile_v1Booleans
>;

export type Profile_v1ClassBooleans = {};

export type Profile_v1ClassProps = utility.Flatten<
  NoizDatas<Profile_v1Props> & Profile_v1ClassBooleans
>;

export type Profile_v1AsChild = MakeAsChild<
  "Profile",
  Profile_v1ClassProps
>;
/////////////

const StyledTwitter = styled(Icon)`
  place-self: end;
`;

const NavBarStyled = styled(NavBar)``;

const BadgeStyled = styled(Badge)``;

////////CLASS
export class Profile_v1 extends BaseNoiz<
  Profile_v1Data & Profile_v1Booleans,
  Profile_v1ClassBooleans
> {
  constructor(props: Profile_v1ClassProps) {
    super(props);
  }
  Html = (props: Profile_v1Props) => {
    const [isAvatarImageLoaded, setIsAvatarImageLoaded] =
      useState(false);

    function handleClick() {
      props.setIsShowMore(!props.isShowMore);
    }
    return (
      <div className={props.className} css={props.css}>
        <div id="bg-upper"></div>
        <div id="profile-avatar">
          <Image
            datas={[
              {
                src: "https://ipfs.io/ipfs/QmPGGowQG4oPoRf884Hz9WXivACoDni1GsdDYkRdXVLfJc?filename=QmPGGowQG4oPoRf884Hz9WXivACoDni1GsdDYkRdXVLfJc",
                imageLoaded: !isAvatarImageLoaded,
                handleisLoading: setIsAvatarImageLoaded,
              },
            ]}
            imageLoaded={!isAvatarImageLoaded}
          ></Image>
        </div>
        <div id="infos">
          <p id="account">{"<account name>"}</p>
          <p id="handle">{"@handle"}</p>
          <div id="details">
            <div id="text-area">
              <p id="bold">{props.tracks}</p>
              <p>Tracks</p>
            </div>
            <div id="text-area">
              <p id="bold">{props.followers}</p>
              <p>Followers</p>
            </div>
            <div id="text-area">
              <p id="bold">{props.following}</p>
              <p>Following</p>
            </div>
          </div>
          <div id="social">
            <div>
              <button id="follow-btn">
                <p>Follow</p>
              </button>
            </div>
            <Icon datas={[]} buttoned share></Icon>
            <Icon datas={[]} buttoned more_Normal></Icon>
          </div>
          <div id="description">
            <p>{props.description}</p>
          </div>
          <button onClick={handleClick}>Show More</button>
          <div id="links-area">
            <Badge datas={[{ size: "small" }]}></Badge>
            <div id="links">
              <div id="twitter">
                <StyledTwitter
                  twitter
                  buttoned
                  datas={[]}
                />
              </div>
              <div id="handle">
                <p>handle</p>
              </div>
            </div>
          </div>
        </div>
        <NavBarStyled datas={[]} />
        <ItemsArea
          datas={[{ avatarSize: 5, height: 100 }]}
        >
          <Card datas={[]}></Card>
        </ItemsArea>
        {props.children}
      </div>
    );
  };

  Style = styled(this.Html)`
    display: grid;
    grid-template-columns: 2rem 1fr 2rem;
    grid-template-rows: 2rem 15rem auto 3rem auto;
    transition: 0.3s ease;
    ${props => {
      if (props.isShowMore)
        return css`
          grid-template-rows: 2rem 15rem auto 3rem auto;
        `;
      return "";
    }}
    grid-template-areas:
    "bg bg bg"
    ". circle ."
    ". infos ."
    "navbar navbar navbar"
    ". content .";
    width: 100%;
    height: 100%;
    #bg-upper {
      grid-area: bg;
      z-index: -1;
      width: 100%;
      height: 15rem;
      background-color: #c4c4c4;
    }
    #profile-avatar {
      z-index: 1;
      display: grid;
      overflow: hidden;
      grid-area: circle;
      place-self: center;
      background-color: red;
      border-radius: 100%;
      width: 15rem;
      height: 15rem;
      #profile-avatar-image {
        aspect-ratio: 1;
        width: 100%;
        height: 100%;
      }
    }
    #infos {
      grid-area: infos;
      display: grid;
      overflow: hidden;
      place-self: center;
      /* place-items: center; */
      grid-template-rows: 1.5rem 1.5rem 2rem 2rem 2rem 1.5rem 3.5rem;
      ${props => {
        if (props.isShowMore)
          return css`
            grid-template-rows: 1.5rem 1.5rem 2rem 2rem auto 1.5rem 3.5rem;
          `;
        else return "";
      }}
      height: 100%;
      #account {
        place-self: center;
      }
      #handle {
        place-self: center;
      }
      #details {
        display: grid;
        overflow: hidden;
        width: 100%;
        grid-template-columns: 1fr 1fr 1fr;
        #text-area {
          display: inline;
          place-self: center;
          p {
            display: inline;
            &:first-child {
              margin-right: 0.2rem;
              font-weight: bolder;
            }
          }
        }
      }
      #social {
        width: 100%;
        height: 100%;
        grid-template-columns: 3fr 1fr 1fr;
        grid-template-areas: "follow . .";
        display: grid;
        #follow-btn {
          background-color: red;
          grid-area: follow;
          width: 100%;
          height: 100%;
          place-self: center;
          background-color: #e5e5e5;
          color: ${props => props.theme.palette.darkgrey};
          border-radius: 100px;
          border: 1px solid
            ${props => props.theme.primary.borderColor};
        }
      }
      #description {
        height: 100%;
        display: grid;
        place-items: center;
        overflow: hidden;
      }
      #links-area {
        width: 100%;
        height: 100%;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "follow . .";
        display: grid;
        ${BadgeStyled} {
          place-self: center;
        }
        #links {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr 3fr;
          place-items: center;
          #twitter {
            display: grid;
            width: 100%;
            height: 100%;
            place-content: center;
          }
          #handle {
            place-items: center;
            background-color: transparent;
            width: 100%;
          }
        }
      }
    }
    ${NavBarStyled} {
      width: 100%;
      display: grid;
      grid-area: navbar;
    }
  `;

  Mapper = Profile_v1.mapperFactory(this.Style);

  render() {
    return <this.Mapper {...this.props}></this.Mapper>;
  }
}
