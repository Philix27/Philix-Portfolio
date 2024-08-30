import styled from "styled-components";

export const SectionTitle = styled.h1`
  color: #313334;
  font-size: 50px;
  font-weight: 300;
`;
export const BannerTitle = styled.h1`
  color: #fff;
  font-size: 90px;
`;

export const CardTitle = styled.h1`
  color: #fff;
  font-size: 40px;
`;
export const BannerSubtitle = styled.h2`
  color: #fff;
  font-size: 2rem;
  font-weight: 300;
  padding-bottom: 20px;
  padding-left: 10px;
`;

export const BannerImg = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
  overflow: hidden;
  border-radius: 20px;
`;

export function GenSectionTitle() {
  return;
}
// export const CompsRegistry = {
//   banner: {
//     title: BannerTitle,
//     subtitle: BannerSubtitle,
//     img: BannerImg,
//   },
//   section: {
//     title: SectionTitle,
//   },
//   card: {
//     title: CardTitle,
//   },
// };
