export type _app_v1Data = "_app_v1Data";
export type _app_v1Booleans = "_app_v1Booleans";
export type _app_v1Props = "_app_v1Props";
export type _app_v1ClassProps = "_app_v1ClassProps";
export type _app_v1AsChild = "_app_v1AsChild";
export const _app_v1 = "_app_v1";

// import { useEffect, useState } from "react";
// import { ThemeProvider } from "styled-components";
// import HTML from "../HTML";
// // TYPES
// import {
//   CardProps,
//   InfosProps,
//   ItemsAreaProps,
//   ItemProps,
//   ProfilePageProps,
//   NavBarProps,
// } from "../HTML/types";
// import { ColorGenerator } from "../Colors/classes";
// import { Palette } from "../Colors/classes/Palette";

// const LogoZion = HTML.React.components.Icons.LogoZion;
// const fluid_7 = HTML.React.lib.colors.Palettes.fluid_7;
// const GlobalStyles = HTML.React.styled.global.GlobalStyles;

// const src =
//   "https://ipfs.io/ipfs/QmQbeC3h3eAZej3mQCGoQAcuVj7v3RiNJqQ3huzjzDywb9?filename=QmQbeC3h3eAZej3mQCGoQAcuVj7v3RiNJqQ3huzjzDywb9";

// const { black, white } = fluid_7 as Required<
//   Pick<Palette, keyof typeof fluid_7>
// >;

// const theme = {
//   backgroundColor: "white",
//   body: fluid_7.white as string,
//   borderColor: fluid_7.black as string,
//   headingColor: fluid_7.black as string,
//   palette: fluid_7 as Required<
//     Pick<Palette, keyof typeof fluid_7>
//   >,
//   primary: {
//     backgroundColor: white,
//     borderColor: black,
//     color: black,
//   },
//   secondary: {
//     backgroundColor: black,
//     borderColor: white,
//     color: white,
//   },
//   textColor: black,
// };

// // const twitterProps: TwitterProps = {};

// // const linksProps: LinksProps = {
// //   name: "some name",
// //   twitter: twitterProps,
// // };

// // const detailsProps: DetailsProps = {
// //   followers: 100,
// //   following: 100,
// //   tracks: 100,
// // };

// // const infosProps: InfosProps = {
// //   description:
// //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
// //   isShowMore: false,
// //   setIsShowMore: () => {},
// // };

// const itemProps: ItemProps = {
//   data: {
//     title: "title",
//     description: "description",
//     highestBid: "32",
//     info: "info",
//     creatorField: "creator",
//     royalties: "10%",
//     currency: "ETH",
//   },
//   likeIcon: <LogoZion></LogoZion>,
//   // menuIcon: <LogoZion></LogoZion>,
//   src,
// };

// const cardInfosProps: InfosProps = {
//   bid_link: "",
//   id: "1/20",
//   likeCounts: "127",
//   likeIcon: <p>like icon</p>,
//   price: "0.32",
//   title: "<Title here>",
// };

// const nftPfpProps: CardProps = {
//   headProps: {
//     menuIcon: <LogoZion></LogoZion>,
//     clientHeight: 0,
//   },
//   infos: cardInfosProps,
//   src: "",
//   id: 0,
//   name: "name",
//   slug: "slug",
//   backgroundColor: theme.backgroundColor,
// };

// const itemsAreaProps: ItemsAreaProps = {
//   // blockSize: 0,
//   // columns: 0,
//   height: 0,
//   // width: 0,
//   avatarSize: 0,
// };

// const navBarProps: NavBarProps = {};

// const profilePageProps: ProfilePageProps = {
//   datas: [
//     {
//       id: 0,
//       name: "name",
//       slug: "slug",
//       src,
//       backgroundColor: theme.backgroundColor,
//       headProps: { clientHeight: 0 },
//       infos: cardInfosProps,
//     },
//   ],
//   theme,

//   blockSize: 0,
//   columns: 0,
//   height: 0,
//   parentHeight: 0,
//   parentWidth: 0,
//   width: 0,
//   itemsarea: itemsAreaProps,
//   isShowMore: false,
//   navbar: navBarProps,
//   nftpfp: nftPfpProps,
//   description:
//     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   followers: 100,
//   following: 100,
//   tracks: 100,
//   setIsShowMore: () => {},
// };

// export default function _app(props: any) {
//   const [gen, setGen] = useState("");
//   const [isShowMore, setIsShowMore] = useState(false);
//   const { Component } = props;

//   props = {
//     ...props,
//     itemProps: itemProps,
//     ...itemProps,
//     ...nftPfpProps,
//     ...profilePageProps,
//   };
//   props.infos = {
//     ...props.infos,
//     setIsShowMore,
//     isShowMore,
//   };
//   props.setIsShowMore = setIsShowMore;
//   props.isShowMore = isShowMore;
//   useEffect(() => {
//     const generator = new ColorGenerator();
//     const color1 = generator.generate().next();
//     setGen(color1.value ? color1.value : "");
//     setTimeout(
//       () =>
//         (props.src =
//           "https://ipfs.io/ipfs/QmP3KGfuYFEcL7ALkoYRbqmLeLmdyMdTacq92rgSc8Su4R?filename=QmP3KGfuYFEcL7ALkoYRbqmLeLmdyMdTacq92rgSc8Su4R"),
//       2000
//     );
//   }, []);
//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <GlobalStyles {...props} />
//         <Component {...props} gen={gen} />
//       </ThemeProvider>
//     </>
//   );
// }
