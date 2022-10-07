import styled from "styled-components";

export const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2%;

  span {
    display: none;
  }

  .logo {
    position: relative;
    width: 48px;
    height: 48px;
    left: 2%;
  }

  .toggle_menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin: 1rem;
  }

  .menu_links {
    min-height: 50vh;
    align-self: center;
    justify-content: center;
  }

  .link {
    margin: 5rem 0rem;
    justify-self: center;
    align-self: center;
  }

  .line {
    display: none;
  }

  .nav-links-container {
    display: none;
  }

  .active {
    text-decoration: solid underline rgba(255, 255, 255, 1) 5px;
    text-underline-offset: 2.3em;
  }

  p:hover {
    text-decoration: solid underline rgba(255, 255, 255, 0.5) 5px;
    text-underline-offset: 2.3em;
  }

  @media screen and (min-width: 700px) {
    padding-top: 0;

    .nav-links-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 57.63%;
      height: 6rem;

      background: rgba(255, 255, 255, 0.04);
      backdrop-filter: blur(40.7742px);
    }
  }

  @media screen and (min-width: 1200px) {
    padding-top: 2%;

    span {
      display: inline;
    }

    .nav-links-container {
      justify-content: center;
    }

    .line {
      display: block;
      position: relative;
      width: 32.84vw;
      height: 1px;
      left: 2%;
      z-index: 10;

      background: #ffffff;
      mix-blend-mode: normal;
      opacity: 0.25;
    }
  }
`;
