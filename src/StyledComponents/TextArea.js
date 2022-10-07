import styled from "styled-components";

export const TextAria = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

padding: 20% 10%;
text-align: center;

* { padding: 0% 0%;}

@media only screen and (min-width: 700px) {
    padding: 10% 20%;
   
  }

  @media only screen and (min-width: 1200px) {
    padding: 0% 20%;
    align-items: flex-start;
  }
`