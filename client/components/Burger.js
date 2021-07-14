import styled from "styled-components";

const ResponsiveMenuButton = styled.div`
  display: none;
  @media screen and (max-width: 768px){
    width: 100%;
    max-width: 30px;
    display: flex;
    align-items: center;
`

const ResponsiveMenuButtonContainer = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(10px, 10px);
      transition: all 0.3s;
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(4px, -4px);
      transition: all 0.3s;
    }
  }
`

const ResponsiveMenuElement = styled.span`
  width: 100%;
  height: 1px;
  background-color: #ffffff;
`

export default function Burger() {
  return (
    <ResponsiveMenuButton>
      <ResponsiveMenuButtonContainer>
        <ResponsiveMenuElement/>
        <ResponsiveMenuElement/>
        <ResponsiveMenuElement/>
      </ResponsiveMenuButtonContainer>
    </ResponsiveMenuButton>
  );
};