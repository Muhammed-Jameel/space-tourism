import styled from "styled-components";
import {
  backgroundHomeDesktop,
  backgroundHomeTablet,
  backgroundHomeMobile,
} from "../assets/home/index";

export const StyledHome = styled.body`
  background-image: url(${backgroundHomeMobile});
  background-size: cover;
  background-repeat: no-repeat;

  height: 100%;
  width: 100%;

  @media screen and (min-width: 700px) {
    background-image: url(${backgroundHomeTablet});
  }

  @media screen and (min-width: 1200px) {
    background-image: url(${backgroundHomeDesktop});
  }
`;
