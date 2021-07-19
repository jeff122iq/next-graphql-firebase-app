import styled from "styled-components";

const Modal = styled.div`
  .fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeIn 1s;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(90deg, rgba(191, 42, 239, 1) 0%, rgba(0, 0, 0, 0.5998774509803921) 0%);
  overflow: hidden;
  position: absolute;
  @media screen and (max-width: 768px) {
    min-height: 90%;
  }
`

export default Modal