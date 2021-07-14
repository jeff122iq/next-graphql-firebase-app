import Page from "../layouts/Page";
import styled from "styled-components";
import Container from "../generick/Container";
import Title from "../generick/Title";
import Input from "../generick/Input";
import Button from "../generick/Button";
import HelperText from "../generick/HelperText";
import PageLink from "../generick/PageLink";
import {useEffect, useState} from "react";
import Modal from "../components/Modal";

const SingUpPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 100px 0;
`

const SignUpPageContainer = styled(Container)`
  .fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  @-webkit-keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
  justify-content: center;
  animation: fadeInDown 1s;
`

const FormContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: #938AFC;
  padding: 20px 50px;
  flex-direction: column;
`

const ImageContainer = styled.div`
  width: 50%;
  height: 400px;
  background-image: url("https://mydmi.imgix.net/Become_a_Digital_Marketing_Manager_Header.png?fm=jpg&ixlib=php-3.3.1&q=40&w=1170&s=a9a6f2b8fe13b5d4c79d72371e0f56af");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export default function SignUp() {

  const [visibility, setVisibility] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setVisibility(true)
    }, 1000)
  }, [])

  console.log(visibility)

  return (
    <Page>
      <Modal>
        <SingUpPage>
          {
            visibility ?
              <SignUpPageContainer>
                <FormContainer>
                  <Title>Sign-in</Title>
                  <HelperText>Don't have an account?&nbsp;<PageLink
                    href="/sign-up">Sign-up</PageLink>&nbsp;please!</HelperText>
                  <Input type="email" validate="none" placeholder="Email"/>
                  <Input type="password" placeholder="Password"/>
                  <Button>Sing-in</Button>
                </FormContainer>
                <ImageContainer/>
              </SignUpPageContainer>
              : ""
          }
        </SingUpPage>
      </Modal>
    </Page>
  );
};