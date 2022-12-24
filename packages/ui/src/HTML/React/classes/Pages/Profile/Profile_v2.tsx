import {
  ComponentClass,
  Dispatch,
  SetStateAction,
} from "react";
import styled, { css } from "styled-components";
import {
  Badge,
  BadgeProps,
  BadgeState,
} from "../../Badge";
import { Card, CardProps, CardState } from "../../Card";
import { Icon, IconProps, IconState } from "../../Icon";
import {
  Image,
  ImageProps,
  ImageState,
} from "../../Image";
import {
  ItemsArea,
  ItemsAreaProps,
  ItemsAreaState,
} from "../../ItemsArea";
import {
  NavBar,
  NavBarProps,
  NavBarState,
} from "../../NavBar";

enum layouts {
  main = "main",
}
enum styles {
  defaultStyle = "defaultStyle",
}
type layoutTypes = keyof typeof layouts;
type styleTypes = keyof typeof styles;

export interface Profile_v2Props
  extends BaseNoizProps<layoutTypes, styleTypes> {
  tracks: number;
  followers: number;
  following: number;
  description: string;
  isShowMore: boolean;
  setIsShowMore: Dispatch<SetStateAction<boolean>>;
}

export class Profile_v2Props extends BaseNoizProps<
  layoutTypes,
  styleTypes
> {}
export interface Profile_v2State
  extends BaseNoizState<Profile_v2Props> {
  isAvatarImageLoaded?: boolean;
}

export class Profile_v2State extends BaseNoizState<Profile_v2Props> {}

export interface Profile_v2
  extends BaseNoiz<
    layoutTypes,
    styleTypes,
    Profile_v2Props,
    Profile_v2State
  > {
  Icon: ComponentClass<IconProps, IconState>;
  NavBar: ComponentClass<NavBarProps, NavBarState>;
  Badge: ComponentClass<BadgeProps, BadgeState>;
  Image: ComponentClass<ImageProps, ImageState>;
  ItemsArea: ComponentClass<
    ItemsAreaProps,
    ItemsAreaState
  >;
  Card: ComponentClass<CardProps, CardState>;
}

export class Profile_v2 extends BaseNoiz<
  layoutTypes,
  styleTypes,
  Profile_v2Props,
  Profile_v2State
> {
  static defaultProps: Profile_v2Props = {
    description: "description",
    followers: 100,
    following: 200,
    isShowMore: false,
    setIsShowMore: () => {},
    tracks: 1,
    style: styles.defaultStyle,
    layout: layouts.main,
  };
  // FIXME #135 @giacomogagliano @ariannatnl
  // FIXME #136 @giacomogagliano ts error
  // @ts-ignore
  Icon: ComponentClass<IconProps, IconState> = Icon;
  StyledTwitter = styled(this.Icon)`
    place-self: end;
  `;

  NavBar: ComponentClass<NavBarProps, NavBarState> =
    NavBar;
  NavBarStyled = styled(this.NavBar)``;

  Badge: ComponentClass<BadgeProps, BadgeState> = Badge;
  BadgeStyled = styled(Badge)``;

  Image: ComponentClass<ImageProps, ImageState> = Image;

  ItemsArea: ComponentClass<
    ItemsAreaProps,
    ItemsAreaState
  > = ItemsArea;

  Card: ComponentClass<CardProps, CardState> = Card;

  constructor(props: Profile_v2Props) {
    super(props);
    let state = new Profile_v2State();
    state.isAvatarImageLoaded = false;
    state.layout = () => <></>;
    state.style = styled(this.Html)``;
    this.state = state;
  }

  setIsAvatarImageLoaded = (isAvLoaded: boolean) => {
    this.setState({ isAvatarImageLoaded: isAvLoaded });
  };

  main = (props: Profile_v2Props) => {
    // const setIsAvatarImageLoaded =
    //   this.setIsAvatarImageLoaded;
    // const isAvatarImageLoaded =
    //   this.state.isAvatarImageLoaded;
    const Image = this.Image;
    const ItemsArea = this.ItemsArea;
    const Badge = this.Badge;
    const StyledTwitter = this.StyledTwitter;
    const NavBarStyled = this.NavBarStyled;

    function handleClick() {
      props.setIsShowMore(!props.isShowMore);
    }
    return (
      <div
        className={props.className}
        // css={props.css}
      >
        <div id="bg-upper"></div>
        <div id="profile-avatar">
          <Image src="https://ipfs.io/ipfs/QmPGGowQG4oPoRf884Hz9WXivACoDni1GsdDYkRdXVLfJc?filename=QmPGGowQG4oPoRf884Hz9WXivACoDni1GsdDYkRdXVLfJc"></Image>
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
            <Icon buttoned share></Icon>
            <Icon buttoned more_normal></Icon>
          </div>
          <div id="description">
            <p>{props.description}</p>
          </div>
          <button onClick={handleClick}>Show More</button>
          <div id="links-area">
            <Badge size="small"></Badge>
            <div id="links">
              <div id="twitter">
                <StyledTwitter twitter buttoned />
              </div>
              <div id="handle">
                <p>handle</p>
              </div>
            </div>
          </div>
        </div>
        <NavBarStyled />
        <ItemsArea avatarSize={4} height={100}>
          <Card
            layout="main"
            bid_link=""
            id={10}
            item_id=""
            likeCounts="200"
            price=""
            slug=""
            src=""
            title=""
          ></Card>
        </ItemsArea>
        {props.children}
      </div>
    );
  };
  layouts = [
    new this.Layout({
      name: layouts.main,
      component: this.main,
    }),
  ];

  defaultStyle = styled(this.Html)`
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
    overflow: auto;
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
        ${this.BadgeStyled} {
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
    ${this.NavBarStyled} {
      width: 100%;
      display: grid;
      grid-area: navbar;
    }
  `;

  styledlayouts = [
    new this.Style({
      name: styles.defaultStyle,
      style: this.defaultStyle,
    }),
  ];
}
