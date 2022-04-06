import React from "react";
import styled from "styled-components";

import { Wrapper } from "../components/StyledComponents/Wrapper";

const Container = styled.div`
  margin-top: var(--mt);
  grid-area: auto/2/auto/3;
  width: 100%;

  @media (min-width: 1700px) {
    width: 80%;
  }
`;

function Index({ location, data }) {
  return (
    <Wrapper>
      <Container>
        <h1>Home</h1>
      </Container>
    </Wrapper>
  );
}

export default Index;
