import Modal from "./Modal";
import styled from "styled-components";
import Link from "next/link";
import responsiveMenu from "../content/responsiveMenu";
import Logo from "./Logo";
import {useEffect, useState} from "react";

const ResponsiveMenuBlock = styled.div`
  .fadeInLeft {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @-webkit-keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
  animation: fadeInLeft 0.5s;
  width: 100%;
  min-height: inherit;
  background: #201253;
  opacity: 1;
  padding: 35px;
  transition: all 0.5s;
`

const MenuModal = styled(Modal)`
  height: 100%;
  z-index: 15;
`

const ResponsiveList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: #ffffff;
  font-size: 30px;
  font-weight: 300;
  a {
    margin: 10px 0;
  }
`

export default function ResponsiveMenu({onModalClick}) {
  const [visibility, setVisibility] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setVisibility(true)
    }, 500)
  }, [])

  return (
    <MenuModal onClick={onModalClick}>
      {visibility
        ?
        <ResponsiveMenuBlock>
        <ResponsiveList>
          <Logo>Logo</Logo>
          {responsiveMenu.map((item, idx) => {
            return (
              <Link href={item.link} key={idx}>
                {item.name}
              </Link>
            )
          })}
        </ResponsiveList>
      </ResponsiveMenuBlock>
      :
        ""
      }
    </MenuModal>
  );
};