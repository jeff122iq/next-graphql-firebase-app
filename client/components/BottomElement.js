import styled from "styled-components";

const BottomElement = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
    padding: 490px 0;  
  }
  @media screen and (max-width: 320px) {
    padding: 490px 0;
  }
`

export default BottomElement