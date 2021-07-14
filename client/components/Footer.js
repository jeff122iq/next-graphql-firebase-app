import styled from "styled-components";
import Title from "../generick/Title";
import HelperText from "../generick/HelperText";
import Button from "../generick/Button";
import Link from "next/link";
import Container from "../generick/Container";
import navMenu from "../content/navMenu";
import Burger from "./Burger";
import authMenu from "../content/authMenu";
import Logo from "./Logo";

const PageFooter = styled.footer`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
`

const FooterContainer = styled(Container)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InfoContainer = styled(Container)`
  justify-content: space-between;
`

const CreateAccountSection = styled.div`
  width: 100%;
  background-color: #A43EE9;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const AccountSectionText = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 15px 0;
`

const FooterTitle = styled(Title)`
  font-weight: 300;
`

const FooterHelperText = styled(HelperText)`
  font-weight: 300;
`

const CreateAccountButton = styled(Button)`
  max-width: 300px;
  background-color: #E73B47;
`

const InfoSection = styled.div`
  width: 100%;
  background-color: #a444e5;
  padding: 40px 0;
  display: flex;
  justify-content: center;
`

const LinkName = styled.p`
  color: #ffffff;
  margin: 0 20px;
  cursor: pointer;
`

const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const AuthMenu = styled(NavMenu)``


export default function Footer() {
  return (
    <PageFooter>
      <CreateAccountSection>
        <FooterContainer>
          <AccountSectionText>
            <FooterTitle>
              Create account!
            </FooterTitle>
            <FooterHelperText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque aut culpa dicta
              dolores ex,
              harum libero magni pariatur quae quam quas, quia quod sint sit soluta sunt. Dignissimos id libero mollitia
              ratione? Ab autem blanditiis cupiditate deleniti eaque, eveniet laboriosam, laudantium magni minus, odit
              quasi
              quod sit unde vitae.
            </FooterHelperText>
          </AccountSectionText>
        </FooterContainer>
        <Link href="/sign-up">
          <CreateAccountButton>
            Create account
          </CreateAccountButton>
        </Link>
      </CreateAccountSection>
      <InfoSection>
        <InfoContainer>
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
          <AuthMenu>
            {authMenu.map((item, idx) => {
              return <Link key={idx} href={item.link}>
                <LinkName>{item.name}</LinkName>
              </Link>
            })}
          </AuthMenu>
        </InfoContainer>
      </InfoSection>
    </PageFooter>
  );
};