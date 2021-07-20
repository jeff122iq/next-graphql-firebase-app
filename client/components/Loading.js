import Title from "../generick/Title";
import styled from "styled-components";

const Loader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const IdsRing = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default function Loading() {
  return (
    <Loader>
      <Title>
        Loading...
      </Title>
      <IdsRing>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </IdsRing>
    </Loader>
  );
};