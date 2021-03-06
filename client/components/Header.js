import styled from "styled-components";
import Container from "../generick/Container";
import navMenu from "../content/navMenu";
import Link from "next/link";
import authMenu from "../content/authMenu";
import Burger from "./Burger";
import Logo from "./Logo";
import {useEffect, useState} from "react";
import ResponsiveMenu from "./ResponsiveMenu";

const PageHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  border: none;
  border-bottom: 1px solid #ffffff;
`

const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const LinkName = styled.p`
  color: #ffffff;
  margin: 0 20px;
  cursor: pointer;
`

const AuthMenu = styled(NavMenu)``

export default function Header() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen((prev) => !prev)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    console.log('open', open)
  }, [open])

  return (
    <>
      {open ? <ResponsiveMenu onModalClick={handleClose}/> : ""}
      <PageHeader>
        <Container>
          <Link href="/">
            <Logo>
              Logo
            </Logo>
          </Link>
          <NavMenu>
            {navMenu.map((item, idx) => {
              return <Link key={idx} href={item.link}>
                <LinkName>{item.name}</LinkName>
              </Link>
            })}
          </NavMenu>
          <Burger onBurgerClick={handleOpen}/>
          <AuthMenu>
            {authMenu.map((item, idx) => {
              return <Link key={idx} href={item.link}>
                <LinkName>{item.name}</LinkName>
              </Link>
            })}
          </AuthMenu>
        </Container>
      </PageHeader>
    </>
  );
}