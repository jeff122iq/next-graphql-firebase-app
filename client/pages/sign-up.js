import Page from "../layouts/Page";
import styled from "styled-components";
import Container from "../generick/Container";
import Title from "../generick/Title";
import Input from "../generick/Input";
import Button from "../generick/Button";
import HelperText from "../generick/HelperText";
import {useEffect, useState} from "react";
import Modal from "../components/Modal";
import {useMutation, useQuery} from "@apollo/client";
import {REGISTER} from "../mutation/user";
import Popup from "../components/Popup";
import Loading from "../components/Loading";
import {router} from "next/client";
import Auth from "../store/authStore";
import {observer} from "mobx-react-lite";
import loaderStore from "../store/loaderStore";
import Link from "next/link";

const SingUpPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 100px 0 30px;
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
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 375px) {
    padding: 10px 30px;
    margin: 20px 0;
  }
  @media screen and (max-width: 320px) {
    padding: 15px;
    margin: 20px 0;
  }
`

const ImageContainer = styled.div`
  width: 50%;
  height: inherit;
  background-image: url("https://www.strategoweb.it/assets/blog_images/social.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export default observer(function SignUp() {

  const [visibility, setVisibility] = useState(false)
  const [newUser, {error}] = useMutation(REGISTER)
  const [open, setOpen] = useState(false)
  const [register, setRegister] = useState(false)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setVisibility(true)
    }, 1000)
  }, [])

  console.log(error)

  const addUser = (e) => {
    e.preventDefault()
    loaderStore.setIsLoading()
    newUser({
      variables: {
        username, email, password
      }
    }).then(({data}) => {
      console.log({data})
      const token = data.register
      localStorage.setItem("token", token)
      if (!token) {
        return
      }
      setUsername("")
      setEmail("")
      setPassword("")
      loaderStore.isLoading = false
      setRegister(true)
      setOpen(!open)
      Auth.authenticate()
      router.push(`/user/:id`)
    }).catch((error) => {
      loaderStore.isLoading = false
      setRegister(false)
      return error
    })
  }
  return (
    <>
      {error ? <Popup color="red" message={error.message} open={open} setOpen={setOpen}/> : ""}
      {register ? <Popup color="green" message="Register success" open={register} setOpen={setRegister}/> : ""}
      <Page>
        <Modal>
          <SingUpPage>
            {
              visibility ?
                <SignUpPageContainer>
                  <FormContainer>
                    <Title>Sign-up</Title>
                    <HelperText>Have you account?&nbsp;<Link
                      href="/sign-in">Sign-in</Link>&nbsp;please!</HelperText>
                    <Input
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                      type="text"
                      placeholder="Username"
                    />
                    <Input
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      type="email"
                      validate="none"
                      placeholder="Email"
                    />
                    <Input
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                    />
                    <Button onClick={addUser}>Sing-up</Button>
                  </FormContainer>
                  <ImageContainer/>
                </SignUpPageContainer>
                : ""
            }
          </SingUpPage>
          {loaderStore.isLoading === true && <Loading/>}
        </Modal>
      </Page>
    </>
  );
});