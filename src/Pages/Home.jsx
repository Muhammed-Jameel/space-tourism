import React from "react";
import { StyledHome } from "../StyledComponents/StyledHome";
import NavBar from "../components/NavBar";
import { Row, Column } from "../StyledComponents/ContentContainer";
import { TextAria } from "../StyledComponents/TextArea";
import { Button } from "../StyledComponents/Button";

const Home = (props) => {
  return (
    <>
      <StyledHome>
        <NavBar />
        <Row>
          <Column sm="12" md="12" lg="6">
            <TextAria>
              <p>SO, YOU WANT TO TRAVEL TO</p>
              <h1>SPACE</h1>
              <p>
                Let’s face it, if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </TextAria>
          </Column>

          <Column sm="12" md="12" lg="6">
            {" "}
            <Button>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target=" ">
                {" "}
                <h4>Explore</h4>
              </a>
            </Button>{" "}
          </Column>
        </Row>
      </StyledHome>
    </>
  );
};

export default Home;
