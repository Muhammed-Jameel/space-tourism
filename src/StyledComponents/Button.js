import styled from "styled-components";

export const Button = styled.div`
  width: 20vmax;
  height: 20vmax;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0% 30%;

  border-radius: 50%;
  background-color: #fff;

  h4 {
    color: #0b0d17;
  }

  :hover {
    box-shadow: 0 0 0 4vmax rgba(255, 255, 255, 0.1);
    transition: box-shadow 0.3s ease-in-out;
  }

  @media only screen and (min-width: 700px) {
    margin: 10% 40%;
  }

  @media only screen and (min-width: 1200px) {
    margin: 0% 50%;
  }
`;
