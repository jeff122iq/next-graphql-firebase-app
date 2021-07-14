import styled from "styled-components";
import Page from "../layouts/Page";
import Container from "../generick/Container";
import Title from "../generick/Title";

const HomePAge = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export default function Home() {
  return (
    <Page>
      <HomePAge>
        <Container>
          <Title>Hello</Title>
        </Container>
      </HomePAge>
    </Page>
  )
}
