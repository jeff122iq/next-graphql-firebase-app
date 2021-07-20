import styled from "styled-components";
import HelperText from "../generick/HelperText";
import {useEffect} from "react";

const AlertPopup = styled.div`
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

  width: 100%;
  z-index: 20;
  position: fixed;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 500px;
  padding: 20px 0;
  background-color: ${(props) => props.color};
  display: ${(props) => {
    return props.open === true ? `flex` : `none`
  }};
  justify-content: center;
  align-items: center;
  color: #ffffff;
  transition: background-color 0.3s;
  cursor: pointer;
  animation: fadeInDown 0.3s;
  &:hover {
    background-color: ${(props) => {
      return props.color === "green" ? "#033403" : "darkred"
    }
  }
  //transform: translateX(-50%);
`
export default function Popup({message, color, open, setOpen}) {

  useEffect( () => {
    setTimeout(() => {
      setOpen(false)
    }, 5000)
    setOpen(true)
  }, [])

  return (
    <AlertPopup color={color} open={open} onClick={() => setOpen(false)}>
      <HelperText>
        {message}
      </HelperText>
    </AlertPopup>
  );
};