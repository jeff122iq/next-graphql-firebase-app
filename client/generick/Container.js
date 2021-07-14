import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    margin: 0 50px;
  }
`

export default Container