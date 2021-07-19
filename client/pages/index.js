import styled from "styled-components";
import Page from "../layouts/Page";
import Container from "../generick/Container";
import Title from "../generick/Title";
import HelperText from "../generick/HelperText";

const HomePAge = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const HomePageText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  background-color: #f562a5;
  //align-items: flex-start;
`

const Image = styled.div`
  width: 100%;
  height: inherit;
  background-image: url("https://www.elegantthemes.com/blog/wp-content/uploads/2020/05/hire-content-writer-featured-image-scaled.jpg");
  background-repeat: no-repeat;
  background-size: contain;
`

const ImageContainer = styled.div`
  width: 50%;
  height: 300px;
`

export default function Home() {
    return (
        <Page>
            <HomePAge>
                <Container>
                    <HomePageText>
                        <Title>Welcome to my app!</Title>
                        <HelperText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis cupiditate
                            debitis ipsam iure perspiciatis quia suscipit unde ut velit. Ad aperiam atque commodi cumque
                            debitis deserunt dignissimos inventore, iusto laborum libero magnam modi molestiae mollitia
                            nam neque non odit officia, omnis perspiciatis possimus praesentium quam quasi quia, quos
                            repellendus repudiandae sed soluta sunt tempora tempore velit vitae voluptate voluptates. At
                            autem consequuntur distinctio dolor et facilis sed sint voluptate!
                        </HelperText>
                    </HomePageText>
                    <ImageContainer>
                        <Image/>
                    </ImageContainer>
                </Container>
            </HomePAge>
        </Page>
    )
}
